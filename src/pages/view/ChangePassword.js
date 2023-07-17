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

function ChangePassword() {

    const userData = JSON.parse(localStorage.getItem('userData'))

    const [user, setUser] = useState({
        email: userData.email,
        oldPassword: '',
        newPassword: ''
    });
    const [loading, setLoading] = useState(false);

    const [confirmedPassword, setCofirmedPassword] = useState();

    useEffect(() => {


    }, [])


    const changedUserPassword = async (event) => {
        event.preventDefault();

        try {
            

            if (user.newPassword != confirmedPassword) {
                toast.error("Password Mismatch ?");
            }
            else {
                setLoading(true)


                const response = await axios.put(`${baseUrl}/user/changePassword`, user);
                // const response = await axios.put(`http://localhost:5003/user/changePassword`, user);


                const jsonData = await response.data;
                console.log(jsonData)
                if (response.status == 200) {
                    setLoading(false);
                    if(jsonData.STATUS ==='SUCCESS'){
                        toast.success('Your Password has been Changed')
                    }
                    else{
                        toast.error("Your Password can't Changed");
                    }
                    
                }
                else if (response.status == 503) {
                    setLoading(false);
                    toast.error('Server is down !')
                } else {
                    setLoading(false);
                    toast.error('Some thing went wrong !')
                }

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
    const handleChangeConfirmedPasswordd = (event) => {
        setCofirmedPassword(event.target.value);


    }

    return (
        <>
            <ToastContainer />
            <div className=''>


                <h4 className='mt-2 mb-4'>Change Your Password</h4>


                <Scrollbars style={{ height: 300 }}>
                    <form className='container' encType="multipart/form-data" action="" onSubmit={changedUserPassword}>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { mt: 1, ml: 2, width: '55ch' },
                            }}
                        // noValidate
                        // autoComplete="off"
                        // encType="multipart/form-data" action="" onSubmit={createProducts}
                        >
                            <div className='row'>
                                {/* <div className='col'>

                                    <TextField color="success" size='small' variant="filled" type="email" className="form-control" id="email" label='Enter Email or User Name' onChange={handleProductsChange} name='email' value={user.email} required />
                                    <TextField color="success" size='small' variant="filled" type="password" className="form-control" id="oldPassword" label='Current Password' onChange={handleProductsChange} name='oldPassword' value={user.oldPassword} required />
                                    
                                </div> */}
                                <div className='col'>
                                    {/* <TextField color="success" size='small' variant="filled" type="email" className="form-control" id="email" label='Enter Email or User Name' onChange={handleProductsChange} name='email' value={user.email} required /> */}
                                    <TextField color="success" size='small' variant="filled" type="password" className="form-control" id="oldPassword" label='Current Password' onChange={handleProductsChange} name='oldPassword' value={user.oldPassword} required />


                                    <TextField color="success" size='small' variant="filled" type="password" className="form-control" id="newPassword" value={user.newPassword} name='newPassword' label='New Password' onChange={handleProductsChange} required />

                                    <TextField color="success" size='small' variant="filled" type="password" className="form-control" id="confirmedPassword" value={confirmedPassword} name='confirmedPassword' label='Confirmed Password' onChange={handleChangeConfirmedPasswordd} required />
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

                                    <button className='buttonAddbulk m-3 form-control' onClick={changedUserPassword}>Change Your Password</button>

                                </div>

                            </div>


                        </Box>
                    </form>
                </Scrollbars>
            </div>


        </>
    )
}

export default ChangePassword;