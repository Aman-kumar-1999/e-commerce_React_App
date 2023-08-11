import React from 'react'
import '../css/Navbar.css';
import { useState, useEffect } from 'react';
import { Router, Route, Link, RouteOutlet } from 'react-router-dom';
// import Sidebar from '../../pages/view/Sidebar';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
import { Box, LinearProgress } from '@mui/material';
import HomePageSlider from '../../pages/view/HomePageSlider';
// import Cart from '../../pages/view/Cart';



const Navbar = () => {

  var isLoggedIn = localStorage.getItem('isLoggedIn');
  var userData = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();

  const [tagHeated, setTagHeated] = useState(false);


  useEffect(() => {
    if (tagHeated) {
      navigate('/')
      localStorage.clear();
      window.location.reload();

    }
  }, [tagHeated]);

  const handleTagHeat = () => {
    setTagHeated(true);
  };




  return (
    <>

      <nav
        style={{ background: '#F0FFFF' }}
        className='Container  sticky-top navCSS'>
        {isLoggedIn ? (
          <div>
            {
              userData.role.roleName == 'Admin' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>
                  </a>
                </>
              ) : (<></>)
            }


            {
              userData.role.roleName == 'User' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExampleUser" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>

                  </a>
                </>
              ) : (<></>)
            }
            {
              userData.role.roleName == 'Vendor' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExampleVendor" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>

                  </a>
                </>
              ) : (<></>)
            }
          </div>


        ) : (<></>)
        }
        <Link to={'/'}
        >
          <div className='float-start'>
          
          <img className='eqippedLogo' src='https://eqipped.com/E (4).png' />
           
          </div>

        </Link>
        {isLoggedIn ? (
          <div className="float-end">
            <Link className='navAccountResponsive mt-1 mb-1 float-end' onClick={handleTagHeat}>
              <span id='logoutIcon' class="material-symbols-outlined">logout</span>&nbsp;<p className='navAccountText'>Logout</p>
            </Link>
            <Link className='navCartResponsive mt-1 mb-1 float-end' to={'/cart'}>
              <span id='shoppingCart' class="material-symbols-outlined">shopping_cart</span>&nbsp;<p className='cartText'>Cart</p>
            </Link>
          </div>
        ) : (
          <div className='float-end'>
            <Link className='navAccountResponsive float-end mt-1 mb-1 float-end' to='/login'>
              <span id='logoutIcon' class="material-symbols-outlined">login</span>&nbsp;<p className='navAccountText'>Login</p>
            </Link>
          </div>
        )

        }


      </nav>



    </>
  )

}
export default Navbar;