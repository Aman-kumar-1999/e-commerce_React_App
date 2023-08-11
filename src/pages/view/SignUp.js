import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/css/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import ForgetPassword from '../../pages/view/ForgetPassword';
import axios from 'axios';

import Scrollbars from 'react-custom-scrollbars-2';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Button, Icon, IconButton, Input, InputAdornment } from '@mui/material';
import { AddCircle, PriceChange, Send, Visibility } from '@mui/icons-material';

const SignUp = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        profile: "",
        registerAs: "Web Apps",
        institutionName: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
        isuploded: "",
        isverified: "",
        isemailverified: "",
        documentNumber: "",
        address: "",
        avatar: "",
        document: "",
      });
    
    
    
      const navigate = useNavigate();
    
      const createUser = async (event) => {
        event.preventDefault();
        try {
          
          if (formData.password == null || formData.password == '') {
            toast('Kindly Enter Your Password', {
              position: 'top-center'
            });
          }
          else if (formData.firstName == null || formData.firstName == '') {
            toast('Kindly Enter Your First Name', {
              position: 'top-center'
            });
          }
    
          else if (formData.lastName == null || formData.lastName == '') {
            toast('Kindly Enter Your Last Name', {
              position: 'top-center'
            });
          }
    
          else if (formData.email == null || formData.email == '') {
            toast('Kindly Enter Your E-mail', {
              position: 'top-center'
            });
          }
    
          else if (formData.phone == null || formData.phone == '') {
            toast('Kindly Enter Your Phone Number', {
              position: 'top-center'
            });
          }
    
          else if (formData.profile == null || formData.profile == '') {
            toast('Kindly Enter Your Profile', {
              position: 'top-center'
            });
          }
    
          else if (formData.institutionName == null || formData.institutionName == '') {
            toast('Kindly Enter Your Institution Name', {
              position: 'top-center'
            });
          }
    
          else if (formData.pincode == null || formData.pincode == '') {
            toast('Kindly Enter Your Pincode', {
              position: 'top-center'
            });
          }
    
          else if (formData.city == null || formData.city == '') {
            toast('Kindly Enter Your City', {
              position: 'top-center'
            });
          }
    
          else if (formData.state == null || formData.state == '') {
            toast('Kindly Enter Your State', {
              position: 'top-center'
            });
          }
    
          else if (formData.country == null || formData.country == '') {
            toast('Kindly Enter Your Country', {
              position: 'top-center'
            });
          }
    
        //   else if (formData.isuploded == null || formData.isuploded == '') {
        //     toast('Kindly check for Upload', {
        //       position: 'top-center'
        //     });
        //   }
        //   else if (formData.isverified == null || formData.isverified == '') {
        //     toast('Kindly check for Verification', {
        //       position: 'top-center'
        //     });
        //   }
    
        //   else if (formData.isemailverified == null || formData.isemailverified == '') {
        //     toast('Kindly check is your E-mail Verified', {
        //       position: 'top-center'
        //     });
        //   }
    
        //   else if (formData.documentNumber == null || formData.documentNumber == '') {
        //     toast('Kindly Enter Your Document Number', {
        //       position: 'top-center'
        //     });
        //   }
    
        //   else if (formData.address == null || formData.address == '') {
        //     toast('Kindly Enter Your Address', {
        //       position: 'top-center'
        //     });
        //   }
          // else if (formData.avatar == null || formData.avatar == '') {
          //   toast('Kindly Enter Your Avatar', {
          //     position: 'top-center'
          //   });
          // }
        //   else if (formData.document == null || formData.document == '') {
        //     toast('Kindly Enter Your Document', {
        //       position: 'top-center'
        //     });
        //   }
          else {
    
            const response = await fetch(`${baseUrl}/user/user`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
            if (response.status == 503) {
              toast('Server is down', {
                position: 'top-center'
              });
            } else if (response.status == 500) {
              toast('Email is already present kindly use another Email', {
                position: 'top-center'
              });
            }
            else if (response.ok) {
    
              const jsonData = await response.json();
    
    
              console.log(jsonData);
              toast('User has been Created')


            } else {
    
              throw new Error('Failed to Create');
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
    
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      }

  return (
    <div>

      <div className='container-fluid mt-5'>

        <div className='row'>
          <div className='col mt-5'>
          <Link to={'/'}><img className="signUpLogo" src='E (14).png' /></Link>
            <h1 className='mb-4'>Welcome to Eqipped </h1>
            <h6>Already have an account ? <Link style={{color:'red'}} id='SignUpLogin' to={'/login'}>login</Link></h6>
            <h6>Continue as guest</h6>
          </div>
          {/* <div className='col mr-5 ml-2'>
            <div className='loginVertical'></div>
          </div> */}
          <div className='col'>
            {/* <Scrollbars style={{height : 445, width: 280}}> */}
            <form >
              <img src='https://eqipped.com/image/defaultProfileImage.png' />
              <label id='' className="label1" aria-hidden="true">Sign Up Page</label>

              <Scrollbars style={{ height: 435 }}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '55ch' },
              }}

            >
              <TextField
                required
                color="success"
                label="Email Id"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder='Email Id'
                onChange={handleInputChange}
                value={formData.email}
                name="email"
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">email</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                label="Password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder='Password'
                onChange={handleInputChange}
                value={formData.password}
                name='password'
                required
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">lock</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />

              <TextField
                required
                color="success"
                label="First Name"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder='First Name'
                onChange={handleInputChange}
                value={formData.firstName}
                name='firstName'
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">person</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                color="success"
                label="Last Name"
                type="text" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder='Last Name' 
                onChange={handleInputChange} 
                value={formData.lastName} 
                name='lastName'
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">person</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                color="success"
                label="Phone"
                type="number" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder='Phone' 
                onChange={handleInputChange} 
                value={formData.phone}
                name='phone'                 
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">phone</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                color="success"
                label="Profile"
                type="text" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder='Profile' 
                onChange={handleInputChange} 
                value={formData.profile} 
                name='profile' 
                helperText="Designation"  
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">badge</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                color="success"
                label="Institution Name"
                type="text" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder='Institution Name' 
                onChange={handleInputChange} 
                value={formData.institutionName} 
                name='institutionName' 
                 
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">account_balance</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                color="success"
                label="Pincode"
                type="number" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder='Pincode' 
                onChange={handleInputChange} 
                value={formData.pincode} 
                name='pincode'                 
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">pin_drop</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                color="success"
                label="City"
                type="text" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder='City' 
                onChange={handleInputChange} 
                value={formData.city} 
                name='city' 
                
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">location_on</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                color="success"
                label="State"
                type="text" 
                placeholder='State' 
                className="form-control" 
                id="exampleInputPassword1" 
                onChange={handleInputChange} 
                value={formData.state} 
                name='state'                 
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">location_on</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                label="Country"
                color="success"
                type="text" 
                placeholder='Country' 
                className="form-control" 
                id="country" 
                onChange={handleInputChange} 
                value={formData.country} 
                name='country'                 
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span className="material-symbols-outlined">location_on</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                label="Document Number"
                type="text" 
                className="form-control" 
                placeholder='Document Number' 
                id="exampleInputPassword1" 
                onChange={handleInputChange} 
                value={formData.documentNumber} 
                name='documentNumber' 
                                
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">demography</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              <TextField
                required
                label="Full Address"
                color="success"
                type="text" 
                className="form-control" 
                placeholder='Full Address' 
                id="exampleInputPassword1"
                onChange={handleInputChange} 
                value={formData.address} 
                name='address' 
                                
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span id='' className="material-symbols-outlined">home_pin</span>
                    </InputAdornment>
                  ),
                }}
                variant="filled"

              />
              {/* <button className="button mt-3 form-control " onClick={createUser}>Create Vendor</button> */}


            </Box>

          </Scrollbars>
              {/* <div className="mb-3">
                <input type="text" className="form-control" placeholder='Is Uploaded' id="exampleInputPassword1" onChange={handleInputChange} value={formData.isuploded} name='isuploded' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Is Verified' id="exampleInputPassword1" onChange={handleInputChange} value={formData.isverified} name='isverified' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Is Mail Verifiised' id="exampleInputPassword1" onChange={handleInputChange} value={formData.isemailverified} name='isemailverified' required />
              </div>
              <div className="mb-3">
                <input type="number" className="form-control" placeholder='Document Number' id="exampleInputPassword1" onChange={handleInputChange} value={formData.documentNumber} name='documentNumber' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Address' id="exampleInputPassword1" onChange={handleInputChange} value={formData.address} name='address' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Document' id="exampleInputPassword1" onChange={handleInputChange} value={formData.document} name='document' required /> */}
              {/* </div> */}
              <button className='button mt-5 form-control' id='signuppagesignupButton' onClick={createUser}>Sign Up</button>
              {/* <button type="reset" className='button mt-3 form-control'  >Clear</button> */}
            </form>
            {/* </Scrollbars> */}
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

export default SignUp;
