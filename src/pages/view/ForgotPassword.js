import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/css/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';

import axios from 'axios';

const ForgotPassword = () => {

    const [formEmailData, setFormEmailData] = useState({
        recipient:''
      });
      

    const handleForgetPasswordSubmit = async (event) => {
        event.preventDefault();
    
        try {
          if (formEmailData.recipient == null || formEmailData.recipient == '') {
            toast.error('Kindly Enter Email Id', {
              position: 'top-center'
            });
    
          }
          else {
    
            const response = await fetch(`${baseUrl}/user/forgetPassword`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formEmailData)
            });
            if (response.status == 503) {
              toast.error('Server is down now', {
                position: 'top-center'
              });
            } else if (response.status == 500) {
              toast.error('Email Id is not register', {
                position: 'top-center'
              });
            }
            else if (response.ok) {
    
              const jsonData = await response.json();
              // localStorage.setItem('userData', jsonData);
              // Handle successful login response
    
              console.log(jsonData);
              if (jsonData.STATUS == "SUCCESS") {
                // setIsLoggedIn(true);
                // isLoggedIn = true
                // localStorage.setItem('isLoggedIn', isLoggedIn);
                // console.log('is logged In : ' + localStorage.getItem('isLoggedIn'));
                // navigate('/dashboard');
                // window.location.reload();
                // localStorage.clear();
                // localStorage.getItem('isLoggedIn');
                toast.success('congratulations ! You are Successful Reset Your Password. Default Password has been send to your email Id', {
                  position: 'top-center'
                });
    
              }
              else {
                toast('Email Id is not Present in our Data Base', {
                  position: 'top-center'
                });
              }
            } else {
    
              throw new Error('Failed to Reset your password');
            }
          }
        } catch (err) {
          // Handle error
          toast('Server is down', {
            position: 'top-center'
          });
          console.error(err);
        }
      }
      const handleEmailInputChange = (event) => {
        const { name, value } = event.target;
        setFormEmailData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      }

  


  return (
    <div>

      <div className='container-fluid '>

        <div className='row'>
          <div className='col mt-5'>
            <img className="mb-4" src='https://eqipped.com/eqippedLogo.png' />
            <h1 className='mb-4'>Welcome to Eqipped </h1>
            <h6>For Login ? <Link style={{color:'red'}} to={'/login'}>login</Link></h6>
            <h6>Continue as guest</h6>
          </div>
          {/* <div className='col mr-5 ml-2'>
            <div className='loginVertical'></div>
          </div> */}
          <div className='col'>
            <form onSubmit={handleForgetPasswordSubmit}>
              <img src='https://eqipped.com/image/defaultProfileImage.png' />
              <label className="label1" aria-hidden="true">Forgot Your Password</label>

              <input required name="recipient" type="text" id="recipient"
                value={formEmailData.recipient} onChange={handleEmailInputChange} className='form-control' placeholder='Email Id' />
              
              <button className='button mt-5 form-control' onClick={handleForgetPasswordSubmit}>Send New Password</button>
              <button type="reset" className='button mt-3 form-control'  >Clear</button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="body">

        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form onSubmit={handleFormSubmit}>
              <label className="label1" for="chk" aria-hidden="true">Login</label>


              <input required="" name="username" type="text" id="username"
                value={formData.username} onChange={handleInputChange} placeholder="username" />

              <input required="" name="password" type="password" id="password" value={formData.password}
                onChange={handleInputChange}
                placeholder="Password" />
              <button className="buttonLogin" type="submit">Login</button>

            </form>
            <ToastContainer />


          </div>


          <div className="login">

            <ForgetPassword />

          </div>


        </div>
      </div> */}


    </div>




  );
};

export default ForgotPassword;
