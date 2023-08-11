import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import ForgetPassword from '../../pages/view/ForgetPassword';
import axios from 'axios';
import { Box, LinearProgress } from '@mui/material';

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);



  // useEffect(() => {

  // }, [])



  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable to track login status
  var isLoggedIn = false;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {

      if (formData.username == null || formData.username == '') {
        toast('Kindly Enter User Name', {
          position: 'top-center'
        });

      }
      else if (formData.password == null || formData.password == '') {
        toast('Kindly Enter Password', {
          position: 'top-center'
        });
      }
      else {
        setLoading(true);

        // const response = await axios.post(`http://localhost:5002/user/api/login`,
        const response = await axios.post(`${baseUrl}/user/api/login`,

          formData
        );
        // if (response.status == 503) {
        //   toast('Server is down', {
        //     position: 'top-center'
        //   });
        // } else if (response.status == 500) {
        //   toast('Invalid User Name & Password', {
        //     position: 'top-center'
        //   });
        // }
        // else if (response.ok) {

        const jsonData = await response.data;
        console.log('Json Data ' + typeof jsonData);
        console.log('response Json ' + typeof response.data)

        // Handle successful login response

        console.log(jsonData);
        if (jsonData.STATUS == "SUCCESS") {
          // setIsLoggedIn(true);
          setLoading(false);
          localStorage.setItem('userData', JSON.stringify(jsonData.USER));
          isLoggedIn = true
          localStorage.setItem('isLoggedIn', isLoggedIn);
          console.log('is logged In : ' + localStorage.getItem('userData'));
          console.log('is logged In : ' + localStorage.getItem('isLoggedIn'));
          // if (
          //   jsonData.USER.role.roleName == 'Admin'
          // ) {
          //   navigate('/dashboard',JSON.stringify(jsonData.USER))
          // } else {
          //   navigate('/',JSON.stringify(jsonData.USER))
          // }
          navigate('/')
          window.location.reload();
          // localStorage.clear();
          // localStorage.getItem('isLoggedIn');
        }
        else {
          setLoading(false);
          toast('Password is Invalid', {
            position: 'top-center'
          });
        }
        // } else {

        //   throw new Error('Failed to login');
        // }
      }
    } catch (err) {
      // Handle error
      toast('Server is down', {
        position: 'top-center'
      });
      console.error(err);
    }
  }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }




  return (
    <div>
      {
        loading ? (<>
          <Box className='load' sx={{ width: '123%' }}>
            <LinearProgress color="secondary" variant="determinate" value={progress} />
          </Box></>) : (<></>)
      }


      <div className='container-fluid mt-5'>

        <div className='row'>
          <div className='col mt-5'>
          <Link to={'/'}><img className="signUpLogo" src='E (14).png' /></Link>
            <h1 className='mb-4'>Welcome to Eqipped </h1>
            <h6>Already have an account ? <Link style={{ color: 'red' }} id='loginPageSignup' to={'/signup'}>signup</Link></h6>
            <h6>Continue as guest</h6>
          </div>
          {/* <div className='col mr-5 ml-2'>
            <div className='loginVertical'></div>
          </div> */}
          <div className='col'>
            <form onSubmit={handleFormSubmit}>
              <img src='https://eqipped.com/image/defaultProfileImage.png' />
              <label className="label1" aria-hidden="true">Login Page</label>

              <input required name="username" type="text" id="username"
                value={formData.username} onChange={handleInputChange} className='form-control' placeholder='Email Id' />
              <input required="" name="password" type="password" id="password" value={formData.password}
                onChange={handleInputChange} className='form-control' placeholder='Password' />
              <h6><Link style={{ color: 'red' }} to={'/forgotPassword'}>Forgot Password</Link></h6>
              <button id='submitLogin' className='button mt-5 form-control'>Login</button>
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

export default Login;
