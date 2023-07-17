import React, { useState, useEffect } from 'react'
import '../css/AddVendors.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import axios from 'axios';

function EditUserImage() {

    const userData = JSON.parse(localStorage.getItem('userData'))
    const [useImagName, setUserImageName] = useState(userData.imageName);
    const [useImagPath, setUserImagePath] = useState(userData.imagePath);

    const newUserData = JSON.parse(localStorage.getItem('userData'))


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
        imageName: useImagName,
        imagePath: useImagPath
    });
    const [loading, setLoading] = useState(false);


    const [products, setProducts] = useState({
        "id": userData.id
    });

    const [images, setImages] = useState(null);

    const handleInputChange = (event) => {
        setImages(event.target.files[0]);
        console.log('file name' + event.target.file)

    };


    const getUserData = async () => {

        try {
            // const response = await fetch(`http://localhost:5005/product/?pageNo=${pageNo}&dataLimit=${dataLimit}`);
            const response = await fetch(`${baseUrl}/user/username/${userData.username}`);


            const jsonData = await response.json();

            if (jsonData.STATUS == "SUCCESS") {
                // setIsLoggedIn(true);

                localStorage.setItem('userData', JSON.stringify(jsonData.USER));


                console.log('is logged In : ' + localStorage.getItem('userData'));

                setLoading(false)
                toast.success('Your Image has been Updated')

            }
            else {

                toast.error('You are unable to change your Profile image', {
                    position: 'top-center'
                });
            }
        } catch (error) {
            setLoading(false)
            toast.error('You are unable to change your Profile image', {
                position: 'top-center'
            });
            console.log('Error:', error);
        }

    }

    const createProducts = async (event) => {
        event.preventDefault();

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('images', images);
            formData.append('userData', JSON.stringify(products));


            const response = await axios.put(`${baseUrl}/product/userUpdate`, formData);
            // const response = await axios.put(`http://localhost:5005/product/userUpdate`,formData);

            console.log(response.data);
            if (response.status == 200) {
                if (response.data.STATUS === 'SUCCESS') {
                    getUserData();
                }
                else {
                    toast.error('Error has been occoured')
                }




            }

        } catch (error) {
            setLoading(false)
            toast.error('You are unable to change your Profile image', {
                position: 'top-center'
            });
            console.error(error);

        }
    };

    return (
        <>
            <ToastContainer />
            <h4>Change Your Profile Image</h4>
            <div className='add'>
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
                <form className='container' encType="multipart/form-data" action="" onSubmit={createProducts}>

                    <div className="mb-3">
                        <input type="file" className="form-control" placeholder='images' name='images' onChange={handleInputChange} required />
                    </div>
                    <div>
                        <button type="submit" className="buttonAddbulk mt-5 form-control" >Upload</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUserImage