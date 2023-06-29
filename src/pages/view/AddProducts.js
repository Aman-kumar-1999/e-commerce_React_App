import React, { useState, useEffect } from 'react'
import '../css/AddVendors.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import axios from 'axios';

function AddProducts() {

    const userData = JSON.parse(localStorage.getItem('userData'))

    const [products, setProducts] = useState({
        
            "vendorId": userData.id,
              "vendorName": userData.firstName+' '+userData.lastName,              
              "vendorEmail": userData.email,
              "productName": "",
              "brandName":"",
              "productDescription": "",
              "category": "",
              "individualProductPrice": null,
              "status": "Confirmed Order",
              "action": "Edit",
            "productQuantity":null,
            "discountPercentage": null,
            "bulkCode": "",
                "variationName": "",
                "variationId": "",
                "gst": null,
                "hsn": "",
                "isVerified": "",
                "tierNo": "",
                "containLiquid": "",
                

            

            
    });

    const [images, setImages] = useState([]);

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
            formData.append('products',JSON.stringify(products));
            

            const response = await axios.post(`${baseUrl}/product/`, formData);
            // const response = await axios.post(`http://localhost:5005/product/`,formData);

            console.log(response.data);
            if(response.status==200){
                toast('Product has been Created')

            }
            
        } catch (error) {
            console.error(error);
           
        }
    };

    return (
        <>
            <ToastContainer />
            <h2>Create Product</h2>
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
                    <div className="mb-3">
                        <input type="text" className="form-control" id="bulkCode" value={products.bulkCode} name='bulkCode' placeholder='BulkCode' onChange={handleProductsChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="variationName" value={products.variationName} name='variationName' placeholder='Variation Name' onChange={handleProductsChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="variationId" value={products.variationId} name='variationId' placeholder='variationId' onChange={handleProductsChange} />
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" id="gst" value={products.gst} name='gst' placeholder='GST' onChange={handleProductsChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="hsn" value={products.hsn} name='hsn' placeholder='HSN ' onChange={handleProductsChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="isVerified" value={products.isVerified} name='isVerified' placeholder='Is Verified ' onChange={handleProductsChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="tierNo" value={products.tierNo} name='tierNo' placeholder='tierNo ' onChange={handleProductsChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="containLiquid" value={products.containLiquid} name='containLiquid' placeholder='containLiquid ' onChange={handleProductsChange} />
                    </div>


                    <div>
                        <button type="submit" className="form-label  btn2" >CREATE</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProducts