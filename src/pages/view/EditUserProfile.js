import React, { useState, useEffect } from 'react'
import '../css/AddVendors.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useParams } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Scrollbars from 'react-custom-scrollbars-2';


import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Button, Icon, IconButton, Input, InputAdornment } from '@mui/material';
import { AddCircle, Send, Visibility } from '@mui/icons-material';

function EditProfile() {

    const userData = JSON.parse(localStorage.getItem('userData'))

    const [user, setUser] = useState({
        id: userData.id,
        username: userData.username,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        enabled: userData.enabled,
        profile: userData.profile,
        registerAs: "Web Apps",
        institutionName: userData.institutionName,
        pincode: userData.pincode,
        city: userData.city,
        state: userData.state,
        country: userData.country,
        isuploded: userData.isuploded,
        isverified: userData.isverified,
        isemailverified: userData.documentNumber,
        documentNumber: userData.documentNumber,
        address: userData.address,
        avatar: userData.avatar,
        document: userData.document,
        roleId: userData.roleId,
        imageName: userData.imageName,
        imagePath: userData.imagePath        
      });
    const [loading, setLoading] = useState(false);

    useEffect(() => {


    }, [])


    const updateUser = async (event) => {
        event.preventDefault();

        try {
            setLoading(true)
            // const formData = new FormData();
            // formData.append('images', images);
            // formData.append('products', JSON.stringify(user));


            const response = await axios.put(`${baseUrl}/user/`, user);
            // const response = await axios.put(`http://localhost:5003/user/`,user);

            const jsonData = await response.data;
            console.log(jsonData)
            if (response.status == 200) {
                setLoading(false);
                if (jsonData.STATUS == "SUCCESS") {
                    // setIsLoggedIn(true);
                    
                    localStorage.setItem('userData', JSON.stringify(jsonData.USER));
                    
                    
                    console.log('is logged In : ' + localStorage.getItem('userData'));
                    

                    toast.success('Your Profile has been Updated')
                    // if (
                    //   jsonData.USER.role.roleName == 'Admin'
                    // ) {
                    //   navigate('/dashboard',JSON.stringify(jsonData.USER))
                    // } else {
                    //   navigate('/',JSON.stringify(jsonData.USER))
                    // }
                    
                    // localStorage.clear();
                    // localStorage.getItem('isLoggedIn');
                  }
                  else {
                    
                    toast('You have intered wrong details', {
                      position: 'top-center'
                    });
                  }

                

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
            <ToastContainer />
            <div className=''>


                <h4 className='mt-2 mb-1'>Update Your Profile Data</h4>

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
                    <div className=" ml-5 mb-4 cssui-usercard__header-info">
                        <h4 className="">{userData.firstName} {userData.lastName}</h4>
                        <h5 className="">{userData.profile}</h5>
                        <h5 className="">{userData.role.roleName}</h5>
                    </div>
                </header>
                <Scrollbars style={{ height: 439 }}>
                    <form className='container' encType="multipart/form-data" action="" onSubmit={updateUser}>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { mt: 1, width: '55ch' },
                            }}
                        // noValidate
                        // autoComplete="off"
                        // encType="multipart/form-data" action="" onSubmit={createProducts}
                        >
                            <div className='row'>
                                <div className='col'>

                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="firstName" label='First Name' onChange={handleProductsChange} name='firstName' value={user.firstName} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="lastName" label='Last Name' onChange={handleProductsChange} name='lastName' value={user.lastName} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="phone" label='Phone No.' onChange={handleProductsChange} name='phone' value={user.phone} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="lastName" label='Designation' onChange={handleProductsChange} name='profile' value={user.profile} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="role" label='Role Name' onChange={handleProductsChange} name='role' value={userData.role.roleName} disabled />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="institutionName" label='Institution Name' onChange={handleProductsChange} name='institutionName' value={user.institutionName} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="documentNumber" label='Document Number' onChange={handleProductsChange} name='documentNumber' value={user.documentNumber} required />

                                </div>
                                <div className='col'>

                                    <TextField color="success" size='small' variant="filled" type="email" className="form-control" id="email" value={user.email} name='email' label='Variation Name' onChange={handleProductsChange} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="pincode" value={user.pincode} name='pincode' label='Pincode' onChange={handleProductsChange} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="city" value={user.city} name='city' label='City' onChange={handleProductsChange} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="state" value={user.state} name='state' label='State' onChange={handleProductsChange} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="country" value={user.country} name='country' label='Country' onChange={handleProductsChange} required />
                                    <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="address" value={user.address} name='address' label='Full Address' onChange={handleProductsChange} required />
                                    {
                                        loading ?
                                            (
                                                <>
                                                    <h5 className='pt-4'>

                                                        <img style={{ width: 40, height: 40 }} src='spinner.gif' />

                                                    </h5>
                                                </>
                                            ) :
                                            (
                                                <>

                                                </>
                                            )
                                    }

                                    <button className='buttonAddbulk mt-5 form-control' onClick={updateUser}>Update Your Data</button>

                                </div>

                            </div>


                        </Box>
                    </form>
                </Scrollbars>
            </div>


        </>
    )
}

export default EditProfile;