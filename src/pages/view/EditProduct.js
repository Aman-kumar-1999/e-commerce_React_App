import React, { useState, useEffect } from 'react'
import '../css/AddVendors.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useParams } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import axios from 'axios';

function EditProduct() {
    const {productId} = useParams();
    const userData = JSON.parse(localStorage.getItem('userData'))
    console.log('ProductId : '+productId)
    useEffect(()=>{
     getProductByProductId();

    },[])
    
    const [products, setProducts] = useState({
        "productId": productId,
        "vendorId": userData.id,
        "vendorName": userData.firstName + ' ' + userData.lastName,
        "vendorEmail": userData.email,
        "productName": "",
        "brandName": "",
        "productDescription": "",
        "category": "",
        "individualProductPrice": "",
        "status": "Confirmed Order",
        "action": "Edit",
        "productQuantity": "",
        "discountPercentage": ""
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
    const getProductByProductId = async (event)=>
    {
        
        try {
            // const response = axios.get(`http://localhost:5005/product/productId/${productId}`).then(
            const response = fetch(`${baseUrl}/product/productId/${productId}`).then(
                (response) =>{
                    setProducts(response.json())
                    console.log('product Data By Id : '+response.json())
                    toast.success('Your are ready to update product Data')
                },(error)=>{
                    console.log(error);
                    toast.error('Your are unable to update product Data')
                }

            )
            
        } catch (error) {
            console.error(error);
            toast.error('Server is down !')
        }
    }

    const createProducts = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('images', images);
            formData.append('products', JSON.stringify(products));


            const response = await axios.put(`${baseUrl}/product/`, formData);
            // const response = await axios.post(`http://localhost:5005/product/`,formData);

            console.log(response.data);
            if (response.status == 200) {
                toast.success('Product has been Updated')

            }
            else if (response.status == 503) {
                toast.error('Server is down !')
            } else {
                toast.error('Some thing went wrong !')
            }

        } catch (error) {
            console.error(error);
            toast.error('Server is down !')
        }
    };

    return (
        <>
            <ToastContainer />
            <h2>Edit Product</h2>
            <div className='add'>

                <form className='container' encType="multipart/form-data" action="" onSubmit={createProducts}>

                    <div className="mb-3">
                        <input type="file" className="form-control" placeholder='images' name='images' onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder='Product Name' id='productName' onChange={handleProductsChange} name='productName' value={products.productName} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="productDescription" placeholder='Product Description' onChange={handleProductsChange} name='productDescription' value={products.productDescription} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="category" name='category' value={products.category} aria-describedby="emailHelp" placeholder='Category' onChange={handleProductsChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" id="productQuantity" value={products.productQuantity} name='productQuantity' placeholder='Product Quantity' onChange={handleProductsChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="brandName" value={products.brandName} name='brandName' placeholder='Brand Name' onChange={handleProductsChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" id="individualProductPrice" value={products.individualProductPrice} name='individualProductPrice' aria-describedby="emailHelp" placeholder='Individual Product Price' onChange={handleProductsChange} required />
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" id="discountPercentage" value={products.discountPercentage} name='discountPercentage' placeholder='Discount' onChange={handleProductsChange} />
                    </div>


                    <div>
                        <button type="submit" className="form-label  btn2" >CREATE</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProduct