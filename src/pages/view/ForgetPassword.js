import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseUrl from '../../helper/helper';

const ForgetPassword = () =>{

    const [formEmailData, setFormEmailData] = useState({
        recipient:''
      });
      

    const handleForgetPasswordSubmit = async (event) => {
        event.preventDefault();
    
        try {
          if (formEmailData.recipient == null || formEmailData.recipient == '') {
            toast('Kindly Enter Email Id', {
              position: 'top-center'
            });
    
          }
          else {
    
            const response = await fetch(`${baseUrl}/password/forgetPassword`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formEmailData)
            });
            if (response.status == 503) {
              toast('Server is down now', {
                position: 'top-center'
              });
            } else if (response.status == 500) {
              toast('Email Id is not register', {
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
                toast('congratulations ! You are Successful Reset Your Password. Default Password has been send to your email Id', {
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
      
    return(
        <>
        <form onSubmit={handleForgetPasswordSubmit}>
              <label className="label2" for="chk" aria-hidden="true">Forget Password</label>
              {/* <input type="email" name="email" onChange={handleInputChange} placeholder="Email"  value={formData.username} required="" /> */}

              <input required="" name="recipient" type="text" id="recipient"
                value={formEmailData.recipient} onChange={handleEmailInputChange} placeholder="Email" />

              <button className="buttonLogin" onClick={handleForgetPasswordSubmit}>Submit</button>

            </form>
        </>
    )
}
export default ForgetPassword;