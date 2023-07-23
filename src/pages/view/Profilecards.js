import React, { useState, useEffect } from 'react'
// import '../css/AddVendors.css'
import '../css/Profile.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Scrollbars from 'react-custom-scrollbars-2';
import { Button, backdropClasses } from '@mui/material';
import { AddCircle, Edit, EditAttributesOutlined, EditAttributesRounded, EditAttributesSharp, EditCalendar, EditNote, EditRoad } from '@mui/icons-material';
import EditProfile from './EditUserProfile';


function Profilecards() {
  const userData = JSON.parse(localStorage.getItem('userData'))

  const [user, setUser] = useState(userData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {


  }, [])


  const updateUser = async (event) => {
    event.preventDefault();

    try {
      setLoading(true)
      const formData = new FormData();
      // formData.append('images', images);
      // formData.append('products', JSON.stringify(user));


      const response = await axios.put(`${baseUrl}/user/`, formData);
      // const response = await axios.post(`http://localhost:5005/product/`,formData);

      console.log(response.data);
      if (response.status == 200) {
        setLoading(false);
        toast.success('Your Profile has been Updated')

      }
      else if (response.status == 503) {
        setLoading(false);
        toast.error('Server is down !')
      } else {
        setLoading(false);
        toast.error('Some thing went wrong !')
      }

    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error('Server is down !')
    }
  };

  const handleProductsChange = (event) => {
    const { name, value } = event.target;
    setUser(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));

  }
  return (
    <>
      <div className='row mt-3'>


        <p className='col'>
          <header className="cssui-usercard__header">


            {(userData.imagePath != null || userData.imagePath != undefined) ? (
              <div>
                <img className='sidebarImg' src={userData.imagePath} alt='' />

              </div>
            ) : (<>
              <div >
                <span className="material-symbols-outlined logoSideBar" >account_circle</span>

              </div>
            </>)}
            <div className="ml-4">
              <h5 className="">{userData.firstName} {userData.lastName}</h5>
              <h5 className="">{userData.profile}</h5>
              <h5 className="">{userData.role.roleName}</h5>
            </div>

          </header>
        </p>
        <p className='col '>
          <Link to={'/editProfile'} >
            <Button variant="outlined" className='pl-4 p-2 bg-info text-light'  startIcon={<EditNote className='' ></EditNote>}>
              Edit Your Profile
            </Button>
          </Link>
        </p>
        <p className='col'>
          <Link to={'/changepassword'} >
            <Button variant="outlined" className='p-2 bg-danger text-light' startIcon={<EditNote className='' ></EditNote>}>
              Change Your Password
            </Button>
          </Link>
        </p>
      </div>

      

      <Scrollbars style={{ height: 435 }}>
        <form className='container' encType="multipart/form-data" action="" onSubmit={updateUser}>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { mt: 1, width: '55ch' },
            }}

          >
            <div className='row'>
              <div className='col'>

                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="firstName" label='First Name' onChange={handleProductsChange} name='firstName' value={user.firstName} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="lastName" label='Last Name' onChange={handleProductsChange} name='lastName' value={user.lastName} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="phone" label='Phone No.' onChange={handleProductsChange} name='phone' value={user.phone} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="lastName" label='Designation' onChange={handleProductsChange} name='profile' value={user.profile} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="role" label='Role Name' onChange={handleProductsChange} name='role' value={user.role.roleName} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="institutionName" label='Institution Name' onChange={handleProductsChange} name='institutionName' value={user.institutionName} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="documentNumber" label='Document Number' onChange={handleProductsChange} name='documentNumber' value={user.documentNumber} disabled />

              </div>
              <div className='col'>

                <TextField color="success" size='small' variant="filled" type="email" className="form-control profileText" id="email" value={user.email} name='email' label='Variation Name' onChange={handleProductsChange} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="pincode" value={user.pincode} name='pincode' label='Pincode' onChange={handleProductsChange} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="city" value={user.city} name='city' label='City' onChange={handleProductsChange} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="state" value={user.state} name='state' label='State' onChange={handleProductsChange} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="country" value={user.country} name='country' label='Country' onChange={handleProductsChange} disabled />
                <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="address" value={user.address} name='address' label='Full Address' onChange={handleProductsChange} disabled />


                {/* <button className='button mt-3 form-control' onClick={updateUser}>Update Your Data</button> */}

              </div>

            </div>


          </Box>
        </form>
      </Scrollbars>

      {/* <article className="cssui-usercard">
        <div className="cssui-usercard__body">
          <header className="cssui-usercard__header">
            
            {(userData.imagePath != null || userData.imagePath != undefined) ? (
              <div>
                <img className='sidebarImg' src={userData.imagePath} alt='' />

              </div>
            ) : (<>
              <div >
                <span className="material-symbols-outlined logoSideBar" >account_circle</span>

              </div>
            </>)}
            <div className="cssui-usercard__header-info">
              <h3 className="cssui-usercard__name">{userData.firstName} {userData.lastName}</h3>
              <h5 className="">{userData.profile}</h5>
              <h5 className="">{userData.role.roleName}</h5>
            </div>
          </header>
          <div className="cssui-usercard__content">
            <div className="cssui-slider">



              <input id="slide1" type="radio" className="cssui-slider__switch cssui-usercard__switch" name="slider-controls" checked autofocus />
              <label for="slide1" className="cssui-slider__control cssui-usercard__control"></label>
              <input id="slide2" type="radio" className="cssui-slider__switch cssui-usercard__switch" name="slider-controls" />
              <label for="slide2" className="cssui-slider__control cssui-usercard__control"></label>


              <div className="cssui-slider__slides">



                <div className="cssui-slider__slide">
                  <h4 className="cssui-usercard__title">About me</h4>
                  <div className="cssui-usercard__stats">
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-earth"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Language</span>
                        <span className="cssui-stats__value">{userData.language}</span>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-location"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Hometown</span>
                        <span className="cssui-stats__value">{userData.city}</span>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-calendar"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Date of birth</span>
                        <span className="cssui-stats__value">{userData.dateOfBirth}</span>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-man-woman"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Relationship</span>
                        <span className="cssui-stats__value">{userData.relationship}</span>
                      </div>
                    </div>
                  </div>
                </div>







                <div className="cssui-slider__slide">
                  <h4 className="cssui-usercard__title">My Contacts</h4>
                  <div className="cssui-usercard__stats">
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-email"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">E-mail</span>
                        <a href="#0" className="cssui-stats__value">{userData.email}</a>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-phone"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Phone</span>
                        <a href="tel:79000000000" className="cssui-stats__value">{userData.phone}</a>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-whatsapp"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Address</span>
                        <span className="cssui-stats__value">{userData.address} {userData.city} {userData.state} {userData.country} - {userData.pincode}</span>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-skype"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Organization</span>
                        <span className="cssui-stats__value">{userData.institutionName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </article> */}



    </>
  )
}

export default Profilecards
