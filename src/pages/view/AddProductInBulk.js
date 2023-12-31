import React, { useState, useEffect } from 'react'
import '../css/AddVendors.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import axios from 'axios';

function AddProductInBulk() {

    const userData = JSON.parse(localStorage.getItem('userData'))
    const [loading,setLoading] = useState(false);

    const [products, setProducts] = useState({
            "vendorId": userData.id,
            "vendorName": userData.firstName+' '+userData.lastName,              
            "vendorEmail": userData.email,        
    });

    const [file, setFile] = useState(null);

    const handleInputChange = (event) => {
        setFile(event.target.files[0]);
        console.log('file name' + event.target.file)
    };
    // const handleProductsChange = (event) => {
        
    //     setProducts();
        
    // }
    // useEffect(() => {
    //     handleProductsChange;
    //   }, []);

    

    const createProductsInBulk = async (event) => {
        event.preventDefault();


        try {
            setLoading(true)
            const formData = new FormData();
            formData.append('file', file);
            formData.append('products',JSON.stringify(products));          
            const response = await axios.post(`${baseUrl}/product/upload`, formData);
            // const response = await axios.post(`http://localhost:5005/product/`,formData);
            console.log(response.data);
            if(response.status==200){
                if(response.data.STATUS == 'SUCCESS'){
                    setLoading(false)
                    toast.success('All Product has been Created')
                }else
                {
                    setLoading(false)
                    toast.error('Unable to Create All Product')
                }
                

            }
            
        } catch (error) {
            console.error(error);
           
        }
    };

    return (
        <>
            <ToastContainer />
            <h2>Create Product</h2>
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
            <div className='add'>

                <form className='container' encType="multipart/form-data" action="" onSubmit={createProductsInBulk}>

                    <div className="mb-3">
                        <input type="file" className="form-control" placeholder='file' name='file' onChange={handleInputChange} required />
                    </div>
                    <div>
                        <button type="submit" className="buttonAddbulk mt-5 form-control" >CREATE</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProductInBulk