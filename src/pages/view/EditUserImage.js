import React, { useState, useEffect } from 'react'
import '../css/AddVendors.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import axios from 'axios';

function EditUserImage() {

    const userData = JSON.parse(localStorage.getItem('userData'))

    const [products, setProducts] = useState({
        "id": userData.id
    });

    const [images, setImages] = useState(null);

    const handleInputChange = (event) => {
        setImages(event.target.files[0]);
        console.log('file name' + event.target.file)

    };
    const handleProductsChange = (event) => {
        const { name, value } = event.target;
        setProducts(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));

    }

    const createProducts = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('images', images);
            formData.append('userData', JSON.stringify(products));


            const response = await axios.put(`${baseUrl}/product/userUpdate`, formData);
            // const response = await axios.put(`http://localhost:5005/product/userUpdate`,formData);

            console.log(response.data);
            if (response.status==200) {
                toast('Image has been uploaded')

            }

        } catch (error) {
            console.error(error);

        }
    };

    return (
        <>
            <ToastContainer />
            <h2>Update Image</h2>
            <div className='add'>

                <form className='container' encType="multipart/form-data" action="" onSubmit={createProducts}>

                    <div className="mb-3">
                        <input type="file" className="form-control" placeholder='images' name='images' onChange={handleInputChange} required />
                    </div>
                    <div>
                        <button type="submit" className="form-label  btn2" >Upload</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUserImage