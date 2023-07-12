import './App.css';


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from './components/view/Dashboard';
import Login from './components/view/Login';
import Navbar from './components/view/Navbar';
import Footer from './components/view/Footer';
import Home from './components/view/Home';
import Logout from './components/view/Logout';
import Sidebar from './pages/view/Sidebar';
import Orders from './components/view/Orders';
import Products from './components/view/Products';
import Vendors from './components/view/Vendor';
import User from './components/view/User';
import Shipments from './components/view/Shipments';
import Profile from './components/view/Profile';
import Setting from './components/view/Settings';
import MyOrders from './components/view/MyOrders';
import Notifications from './components/view/Notifications';
import Addvendors from './pages/view/Addvendors';
import Adduser from './pages/view/Adduser';
import Addadminuser from './pages/view/Addadminuser';
import Equipments from './pages/view/Equipments';
import Instruments from './pages/view/Instruments';
import PlasticWare from './pages/view/PlasticWare';
import Chemicals from './pages/view/Chemicals';
import Charts from './pages/view/Chart';
import GlassWare from './pages/view/GlassWare';
import AddProducts from './pages/view/AddProducts';
import AddProductInBulk from './pages/view/AddProductInBulk';
import EditUserImage from './pages/view/EditUserImage';
import EditProduct from './pages/view/EditProduct';
import Cart from './components/view/Cart';
import { ToastContainer } from 'react-toastify';
import ProductDetails from './pages/view/ProductDetails';
import CheckOutSuccess from './pages/view/CheckOutSuccess';
import UserSidebar from './pages/view/UserSidebar';
import VendorSidebar from './pages/view/VendorSidebar';
import { useState } from 'react';
import axios from 'axios';
import Scrollbars from 'react-custom-scrollbars-2';
import VendorProduct from './pages/view/VendorProduct';
import SignUp from './pages/view/SignUp';
import ForgotPassword from './pages/view/ForgotPassword';
import B404 from './pages/view/404';
import ProtectedRoute from './components/view/ProtectedRoute';


function App() {

  const [loading, setLoading] = useState(false);
  const [onLoading, setOnLoading] = useState(true);
  const l1 = true

  const userData = JSON.parse(localStorage.getItem('userData'))
  var isLoggedIn = localStorage.getItem('isLoggedIn');

  axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    // setLoading(true);
    // setOnLoading(false);

    // document.body.classList.add('loading');
    // document.getElementById('spinnerLoading').classList.add('spinnerTab')

    return config;
  }, function (error) {
    // Do something with request error

    // setLoading(false)
    // setOnLoading(true)

    // document.body.classList.remove('loading');
    // document.getElementById('spinnerLoading').classList.remove('spinnerTab')
    return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // document.body.classList.remove('loading');
    // document.getElementById('spinnerLoading').classList.remove('spinnerTab')
    // setLoading(false);
    // setOnLoading(true);

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // document.body.classList.add('loading');
    // document.getElementById('spinnerLoading').classList.add('spinnerTab')
    // setLoading(true);
    // setOnLoading(false)

    return Promise.reject(error);
  });


  return (
    <> 
    

    {/* <Scrollbars style={{ height: 635 }}> */}
    <div className="App">


      <Router>
        <div>
          <ToastContainer />


          <div className="container-fluid text-center">
            <div className="row">
              {onLoading && (
                <>
                <Navbar />
                </>
              )
              }
              {loading && (<div className='text-center loading1'>

                <img style={{ width: 200, height: 200 }} src='spinner.gif' />
                <h1>Loading .... </h1>
                {/* <div style={{width: 500,height: 500}} class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                     </div> */}
                {/* <span class="loader"></span> */}

              </div>)}
              {onLoading && (
                <div className="col-1">
                  <ul className="list-group list-group-flush">
                    <Sidebar />
                    <UserSidebar />
                    <VendorSidebar />

                  </ul>
                </div>
              )}
              {onLoading && (
                <div className="col-10">
                  
                    <Routes className="">

                      <Route exact path="*" element={<B404 />} />
                      
                      <Route path="/" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" element={<Home />} />
                      <Route exact path="/login" element={<Login />} />
                      <Route exact path="/signup" element={<SignUp />} />
                      <Route exact path="/logout" element={<Logout />} />
                      <Route exact path="/forgotPassword" element={<ForgotPassword />} />

                      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                      <Route exact path="/dashboard" element={isLoggedIn && userData.role.roleName === 'Admin' ? (<Dashboard/>):(<Navigate to={'/'}/>)}/>
                      <Route path="/orders" element={ isLoggedIn && userData.role.roleName === 'Admin' ? (<Orders />):(<Navigate to={'/'}/>)} />
                      <Route path="/products" element={ isLoggedIn && userData.role.roleName === 'Admin' ? (<Products />):(<Navigate to={'/'}/>)} />
                      <Route path="/vendors" element={ isLoggedIn && userData.role.roleName === 'Admin' ? (<Vendors />):(<Navigate to={'/'}/>)} />
                      <Route path="/user" element={ isLoggedIn && userData.role.roleName === 'Admin' ? (<User />):(<Navigate to={'/'}/>)} />
                      <Route path="/setting" element={ isLoggedIn && userData.role.roleName === 'Admin' ? (<Setting />):(<Navigate to={'/'}/>)} />
                      <Route path="/shipments" element={ isLoggedIn && userData.role.roleName === 'Vendor' ? (<Shipments />):(<Navigate to={'/'}/>)} />
                      <Route path="/profile" element={ isLoggedIn ? (<Profile />):(<Navigate to={'/'}/>)} />
                      <Route path="/myorders" element={ isLoggedIn ? (<MyOrders />):(<Navigate to={'/'}/>)} />
                      <Route path="/notifications" element={ isLoggedIn ? (<Notifications />):(<Navigate to={'/'}/>)} />
                      <Route path="/addvendor" element={ isLoggedIn && userData.role.roleName === 'Admin' ? (<Addvendors />):(<Navigate to={'/'}/>)} />
                      <Route path="/adduser" element={ isLoggedIn && (userData.role.roleName === 'Admin' || userData.role.roleName === 'Vendor') ? (<Adduser />):(<Navigate to={'/'}/>)} />
                      <Route path="/addadminuser" element={ isLoggedIn && userData.role.roleName === 'Admin' ? (<Addadminuser />):(<Navigate to={'/'}/>)} />
                      <Route path="/equipments" id="nav-home" element={<Equipments />} />
                      <Route path="/instruments" element={<Instruments />} />
                      <Route path="/plasticWare" element={<PlasticWare />} />
                      <Route path="/glassWare" element={<GlassWare />} />
                      <Route path="/chemicals" element={<Chemicals />} />
                      <Route path="/chart" element={<Charts />} />
                      <Route path="/addproduct" element={ isLoggedIn && (userData.role.roleName === 'Admin' || userData.role.roleName === 'Vendor') ? (<AddProducts />):(<Navigate to={'/'}/>)} />
                      <Route path="/addproductinbulk" element={ isLoggedIn && (userData.role.roleName === 'Admin' || userData.role.roleName === 'Vendor') ? (<AddProductInBulk />):(<Navigate to={'/'}/>)} />
                      <Route path="/editUserImage" element={ isLoggedIn ? (<EditUserImage />):(<Navigate to={'/'}/>)} />
                      <Route path="/cart" element={ isLoggedIn ? (<Cart />):(<Navigate to={'/'}/>)} />
                      <Route path="editProduct/:productId" element={ isLoggedIn && (userData.role.roleName === 'Admin' || userData.role.roleName === 'Vendor') ? (<EditProduct />):(<Navigate to={'/'}/>)} />
                      <Route path="productDetails/:productId" element={<ProductDetails />} />
                      <Route path="/checkoutsuccess" element={ isLoggedIn ? (<CheckOutSuccess />):(<Navigate to={'/'}/>)} />
                      <Route path="/vendorProduct" element={ isLoggedIn && userData.role.roleName === 'Vendor' ? (<VendorProduct />):(<Navigate to={'/'}/>)} />
                      



                    </Routes>
                  
                  {/* <Footer />   */}
                </div>
              )}

              <div className="col-1">
                <ul className="list-group list-group-flush">

                </ul>
              </div>
              {onLoading && (
                <Footer className='sticky-button'/>
              )}
            </div>

          </div>
        </div>
      </Router>

    </div>
    {/* </Scrollbars> */}
    </>
  );
}

export default App;
