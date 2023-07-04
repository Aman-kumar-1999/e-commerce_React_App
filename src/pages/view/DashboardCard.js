import React, { useState, useEffect } from 'react'
import '../css/DashboardCard.css'
import { Link } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import axios from 'axios';

function DashboardCards() {
  const [order, setOrder] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchOrder();
    fetchProduct();
  }, []);

  const fetchOrder = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/`);


      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setOrder(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }

  };
  console.log(order)
  // console.log("Listproduct : "+listproduct)
  const [product, setProduct] = useState([]);
  // const listproduct = []

  // useEffect(() => {

  // }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${baseUrl}/product/`);


      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setProduct(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(product)
  // console.log("Listproduct : "+listproduct)
  const [vendor, setVendor] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchVendor();
  }, []);

  const fetchVendor = async () => {
    try {
      const response = await fetch(`${baseUrl}/user/filterUser/64548fe503361d235e13f849`);


      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setVendor(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(vendor)
  const [users, setUsers] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${baseUrl}/user/filterUser/64548ff003361d235e13f84a`);


      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setUsers(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(users)
  // console.log("Listproduct : "+listproduct)


  return (
    <>

      {/* <div className='row '>
        <div className='col-3'>
          <div className="vl" />
          <p className='float-start pl-2 pt-3'>Total Orders</p>
          
          <p className='float-start pt-5 dash'>{order.length}</p>
          <p className='float-end pt-5 text-info'>+{order.length}%</p>

        </div>
        <div className='col-3'>
          <div className="vl" />
          <p className='float-start pl-2 pt-3'>Total Products</p>
          {
            product.length == 0 ?
              (
                <>
                  <h5 className='pt-4'>

                    <img style={{ width: 40, height: 40 }} src='spinner.gif' />

                  </h5>
                </>
              ) : (
                <>
                  <p className='float-start pt-5 dash'>{product.length}</p>
                  <p className='float-end pt-5 text-info'>+{product.length}%</p>
                </>
              )
          }
          

        </div>
        <div className='col-3'>
          <div className="vl" />
          <p className='float-start pl-2 pt-3'>Total Vendors</p>
         
          <p className='float-start pt-5 dash'>{vendor.length}</p>
          <p className='float-end pt-5 text-info'>+{vendor.length}%</p>

        </div>
        <div className='col-3'>
          <div className="vl" />
          <p className='float-start pl-2 pt-3'>Total Users</p>
          
          <p className='float-start pt-5 dash'>{users.length}</p>
          <p className='float-end pt-5 text-info'>+{users.length}%</p>

        </div>
        <div className='col-3'>
          <div className="vl" />
          <p className='float-start pl-2 pt-3'>Earnings</p>
          
          <p className='float-start pt-5'>{order.length}</p>
          <p className='float-end pt-5 text-info'>+{order.length}%</p>

        </div>
        <div className='col-3'>
          <div className="vl" />
          <p className='float-start pl-2 pt-3'>Revenue</p>
          
          <p className='float-start pt-5'>{order.length}</p>
          <p className='float-end pt-5 text-info'>+{order.length}%</p>

        </div>




      </div> */}


      <div className="container row dashboardCard">
        <div className="row">
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Orders</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> {order.length}</h6>
              {/* <Link className='newOder' to={'/orders'}> {order.length} New Orders</Link> */}
              <br />
              <Link className='viewAllOrders' to={'/orders'}>View All Orders</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>fluid_med</span></p>
            </div>
          </div>
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Products</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> {product.length}</h6>
              {/* <Link className='newOder' to={'/products'}>{product.length} New Products</Link> */}
              <br />
              <Link className='viewAllOrders' to={'/products'}>View All Products</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>science</span></p>
            </div>
          </div>
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Vendors</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> {vendor.length}</h6>
              {/* <Link className='newOder'>{vendor.length} New Venders</Link> */}
              <br />
              <Link className='viewAllOrders'>View All Venders</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>diversity_3</span></p>
            </div>
          </div>
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Users</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> {users.length}</h6>
              {/* <Link className='newOder'>{users.length} New Users</Link> */}
              <br />
              <Link className='viewAllOrders'>View All Users</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>person</span></p>
            </div>
          </div>
        </div>




      </div>

    </>
  )
}

export default DashboardCards;
