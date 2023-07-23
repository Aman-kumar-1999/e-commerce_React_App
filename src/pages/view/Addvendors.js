import React, { useState } from 'react';
import '../css/AddVendors.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';

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

function Addvendors() {

  const userData = JSON.parse(localStorage.getItem('userData'));
  // const [tempVendorId, setTempVendorId] = useState('');

  // React.useEffect(() => {
  //   console.log('Sub Vendor Test : ' + userData.id);
  //   if (userData.role.roleName === 'Vendor') {
  //     setTempVendorId(userData.id);
  //     console.log('Temp if : ' + tempVendorId);
  //   }
  //   else {
  //     setTempVendorId('No');
  //     console.log('Temp else : ' + tempVendorId);
  //   }
  // }, []);

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
    subVendorId: "",
    avatar: "",
    document: "",
  });

  const newVendor = {
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
    subVendorId: "",
    avatar: "",
    document: "",
  };



  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable to track login status

  const createVendor = async (event) => {
    event.preventDefault();
    try {
      // if (formData.username == null || formData.username == '') {
      //   toast('Kindly Enter Username', {
      //     position: 'top-center'
      //   });
      // }
      // else
      if (formData.password == null || formData.password == '') {
        toast('Kindly Enter Password', {
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

      // else if (formData.isuploded == null || formData.isuploded == '') {
      //   toast('Kindly check for Upload', {
      //     position: 'top-center'
      //   });
      // }
      // else if (formData.isverified == null || formData.isverified == '') {
      //   toast('Kindly check for Verification', {
      //     position: 'top-center'
      //   });
      // }

      // else if (formData.isemailverified == null || formData.isemailverified == '') {
      //   toast('Kindly check is your E-mail Verified', {
      //     position: 'top-center'
      //   });
      // }

      else if (formData.documentNumber == null || formData.documentNumber == '') {
        toast('Kindly Enter Your Document Number', {
          position: 'top-center'
        });
      }

      else if (formData.address == null || formData.address == '') {
        toast('Kindly Enter Your Address', {
          position: 'top-center'
        });
      }
      // else if (formData.avatar == null || formData.avatar == '') {
      //   toast('Kindly Enter Your Avatar', {
      //     position: 'top-center'
      //   });
      // }
      // else if (formData.document == null || formData.document == '') {
      //   toast('Kindly Enter Your Document', {
      //     position: 'top-center'
      //   });
      // }
      else {

        console.log('Sub Vendor Test : ' + userData.id);
        if (userData.role.roleName === 'Vendor') {
          newVendor.subVendorId = userData.id;
          // console.log('Temp if : ' + tempVendorId);
        }
        else {
          newVendor.subVendorId = 'No';
          // console.log('Temp else : ' + tempVendorId);
        }

        newVendor.username = formData.username;
        newVendor.password = formData.password;
        newVendor.firstName = formData.firstName;
        newVendor.lastName = formData.lastName;
        newVendor.email = formData.email;
        newVendor.phone = formData.phone;
        newVendor.profile = formData.profile;
        newVendor.registerAs = "Web Apps";
        newVendor.institutionName = formData.institutionName;
        newVendor.pincode = formData.pincode;
        newVendor.city = formData.city;
        newVendor.state = formData.state;
        newVendor.country = formData.country;
        newVendor.isuploded = "No";
        newVendor.isverified = "No";
        newVendor.isemailverified = "No";
        newVendor.documentNumber = formData.documentNumber;
        newVendor.address = formData.address;
        newVendor.avatar = "No";
        newVendor.document = "No";


        const response = await fetch(`${baseUrl}/user/vendor`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newVendor)
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

          // Handle successful login response

          console.log(jsonData);
          toast('Vendor User has been Created')
          // setIsLoggedIn(true);
          // localStorage.clear();
          // localStorage.getItem('isLoggedIn');
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
    <>
      <ToastContainer />
      <div className='add'>
        <form className='container'>
          <h4>Create Vendor</h4>
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
                id="exampleInputPassword1" 
                onChange={handleInputChange} 
                value={formData.country} 
                name='country'                 
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
              <button className="button mt-3 form-control " onClick={createVendor}>Create Vendor</button>


            </Box>

          </Scrollbars>


          {/* <div className="mb">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Id' onChange={handleInputChange} value={formData.email} name="email" required />
          </div>
          <div className="mb">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' onChange={handleInputChange} value={formData.password} name='password' required />
          </div>
          <div className="mb">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First Name' onChange={handleInputChange} value={formData.firstName} name='firstName' required />
          </div>
          <div className="mb">
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Last Name' onChange={handleInputChange} value={formData.lastName} name='lastName' required />
          </div>
          <div className="mb">
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone' onChange={handleInputChange} value={formData.phone} name='phone' required />
          </div>
          <div className="mb">
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Profile' onChange={handleInputChange} value={formData.profile} name='profile' required />
          </div>
          <div className="mb">
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Institution Name' onChange={handleInputChange} value={formData.institutionName} name='institutionName' required />
          </div>
          <div className="mb">
            <input type="number" className="form-control" id="exampleInputPassword1" placeholder='Pincode' onChange={handleInputChange} value={formData.pincode} name='pincode' required />
          </div>
          <div className="mb">
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder='City' onChange={handleInputChange} value={formData.city} name='city' required />
          </div>
          <div className="mb">
            <input type="text" placeholder='State' className="form-control" id="exampleInputPassword1" onChange={handleInputChange} value={formData.state} name='state' required />
          </div>
          <div className="mb">
            <input type="text" placeholder='Country' className="form-control" id="exampleInputPassword1" onChange={handleInputChange} value={formData.country} name='country' required />
          </div>

          <div className="mb">
            <input type="text" className="form-control" placeholder='Document Number' id="exampleInputPassword1" onChange={handleInputChange} value={formData.documentNumber} name='documentNumber' required />
          </div>
          <div className="mb">
            <input type="text" className="form-control" placeholder='Address' id="exampleInputPassword1" onChange={handleInputChange} value={formData.address} name='address' required />
          </div>

          <div>
            <button type="submit" className="form-label  btn2" onClick={createVendor}>CREATE</button>
          </div> */}
        </form>
      </div>
    </>
  )
}

export default Addvendors
