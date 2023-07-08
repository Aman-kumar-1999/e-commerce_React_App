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

function EditProduct() {
    const {productId} = useParams();
    const userData = JSON.parse(localStorage.getItem('userData'))
    console.log('ProductId : '+productId)
    useEffect(()=>{
     getProductByProductId();

    },[])
    const [variation, setVariation] = useState([{}]);

    useEffect(() => {
        fetchVariation();
    }, [])

    const fetchVariation = async () => {
        // const response = await fetch(`http://localhost:5005/product/variationData/getAll`);
        const response = await fetch(`${baseUrl}/product/variationData/getAll`);
        const jsonData = await response.json();

        setVariation(JSON.parse(JSON.stringify(jsonData)));
    }
    const [variationNameData, setVariationNameData] = useState('');
    const handleVariationChange = (event) => {
        // const { name, value } = event.target;
        setVariationNameData(event.target.value);
        console.log('Varataion Name : ' + variationNameData)

    }
    const createVariation = async () => {
        try {
            // const response = await fetch(`http://localhost:5005/product/variationData/${variationNameData}`);
            const response = await fetch(`${baseUrl}/product/variationData/${variationNameData}`);
            const jsonData = await response.json();
            if (response.status == 200) {
                let apidata = variation.concat(jsonData);
                // toast.success(`Variation has been Created \n Variation Id`+apidata);
                setVariation(apidata);
                toast.success(`Variation has been Created \n Variation Id : ${jsonData.variationId} \n Variation Name : ${jsonData.variationName} `)

            }

        } catch (e) {
            toast.error('Variation can not be Created')
        }
    }
    console.log("Variation : " + variation)
    
    const [products, setProducts] = useState({
        "productId": productId,
        "vendorId": userData.id,
        "vendorName": userData.firstName + ' ' + userData.lastName,
        "vendorEmail": userData.email,
        "productName": "",
        "brandName": "",
        "productDescription": "",
        "category": "",
        "individualProductPrice": null,
        "status": "Confirmed Order",
        "action": "Edit",
        "productQuantity": null,
        "discountPercentage": null,
        "bulkCode": "",
        "variationName": "",
        "variationId": "",
        "gst": null,
        "hsn": "",
        "isVerified": "",
        "tierNo": "",
        "containLiquid": "",
        "companyCode": "",
        "bulkPack": "",
        "bulkPrice": ""

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
    const getProductByProductId = async ()=>
    {
        
        try {
            // const response = axios.get(`http://localhost:5005/product/productId/${productId}`).then(
            const response = await fetch(`${baseUrl}/product/productId/${productId}`)
            const jsonData = await response.json();

            setProducts(JSON.parse(JSON.stringify(jsonData)));
            toast.success('Now you are ready to update Product Data');
            
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
            <p className='float-end'>
                <a class="" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                    <Button variant="outlined" className='p-2' startIcon={<AddCircle className='' ></AddCircle>}>
                        Create Variation
                    </Button>
                </a>
                {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button> */}
            </p>
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">

                        <FormControl className='float-end' sx={{ width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Variation Name</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                onChange={handleVariationChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={createVariation}
                                        >
                                            <Send />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Variation Name"
                            />

                        </FormControl>

                        {/* <FormControl  variant="standard">
                            <InputLabel htmlFor="outlined-adornment-sent">Variation Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-sent"
                                type='text'
                                size='small'


                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label=""

                                            edge="end"
                                        >
                                            <Send />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            label="Variation Name"
                            />
                        </FormControl> */}
                        {/* <button className='btn btn-info float-end'>Create</button> */}
                        {/* <TextField
                            className='float-end'
                            required
                            color="success" id="variationName"
                            label="Variation Name"
                            size='small'
                            variant="filled"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label=""

                                        edge="end"
                                    >
                                        <Send />
                                    </IconButton>
                                </InputAdornment>
                            }

                        /> */}

                    </div>
                </div>
            </div>
            <Scrollbars style={{ height: 435 }}>
            <form className='container' encType="multipart/form-data" action="" onSubmit={createProducts}>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '55ch' },
                    }}
                    // noValidate
                    // autoComplete="off"
                    // encType="multipart/form-data" action="" onSubmit={createProducts}
                >
                    <div className='row'>
                        <div className='col'>
                            <TextField
                                required
                                color="success" id="productName"
                                label="Product Name"
                                onChange={handleProductsChange} name='productName' value={products.productName}
                                size='small'
                                variant="filled"
                            />

                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="productDescription" label='Product Description' onChange={handleProductsChange} name='productDescription' value={products.productDescription} required />

                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="category" name='category' value={products.category} aria-describedby="emailHelp" label='Category' onChange={handleProductsChange} required />

                            <TextField color="success" size='small' variant="filled" type="number" className="form-control" id="productQuantity" value={products.productQuantity} name='productQuantity' label='Product Quantity' onChange={handleProductsChange} required />

                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="brandName" value={products.brandName} name='brandName' label='Brand Name' onChange={handleProductsChange} required />

                            <TextField color="success" size='small' variant="filled" type="number" className="form-control" id="individualProductPrice" value={products.individualProductPrice} name='individualProductPrice' aria-describedby="emailHelp" label='Individual Product Price' onChange={handleProductsChange} required />

                            <TextField color="success" size='small' variant="filled" type="number" className="form-control" id="discountPercentage" value={products.discountPercentage} name='discountPercentage' label='Discount' onChange={handleProductsChange} required />

                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="bulkCode" value={products.bulkCode} name='bulkCode' label='BulkCode' onChange={handleProductsChange} required />

                            <TextField color="success" size='small' variant="filled" type="number" className="form-control" id="gst" value={products.gst} name='gst' label='GST' onChange={handleProductsChange} required />
                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="tierNo" value={products.tierNo} name='tierNo' label='Tier No ' onChange={handleProductsChange} required />



                        </div>
                        <div className='col'>
                        {/* <label htmlFor='cars'>Variation Id</label> */}
                            {/* <select onChange={event => handleProductsChange(event)} className="btn-secondary" name="variationId" id="cars">
                               
                                <option value="Cancelled Order">Cancelled Order</option>
                                <option value="Confirmed Order">Confirmed Order</option>
                                <option value="Pending Order">Pending Order</option>
                                <option value="Recent Order">Recent Order</option>
                            </select> */}
                            <FormControl variant="filled" sx={{ m: 1, minWidth: 480 }}
                            >
                                <InputLabel id="demo-simple-select-filled-label" >Variation Id</InputLabel>
                                <Select

                                    labelId="demo-simple-select-filled-label"
                                    id="variationId"
                                    name='variationId'
                                    onChange={event => handleProductsChange(event)}
                                    // onChange={handleProductsChange}
                                   
                                    // MenuProps={MenuProps}
                                >

                                    {variation.map((name) => (
                                        <MenuItem
                                            // key={name}
                                            value={name.variationId}
                                       
                                        >
                                            {name.variationId}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {/* <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="variationId" value={products.variationId} name='variationId' label='variationId' onChange={handleProductsChange} required /> */}

                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="variationName" value={products.variationName} name='variationName' label='Variation Name' onChange={handleProductsChange} required />

                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="containLiquid" value={products.containLiquid} name='containLiquid' label='Sub Category ' onChange={handleProductsChange} required />



                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="hsn" value={products.hsn} name='hsn' label='HSN ' onChange={handleProductsChange} required />

                            {/* <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="isVerified" value={products.isVerified} name='isVerified' label='Is Verified ' onChange={handleProductsChange} required /> */}


                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="companyCode" value={products.companyCode} name='companyCode' label='Company Code ' onChange={handleProductsChange} required />

                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="bulkPack" value={products.bulkPack} name='bulkPack' label='Bulk Pack' onChange={handleProductsChange} required />

                            <TextField color="success" size='small' variant="filled" type="text" className="form-control" id="bulkPrice" value={products.bulkPrice} name='bulkPrice' label='Bulk Price' onChange={handleProductsChange} required />
                            <input type='file' color='success' size='small' variant='filled' name='images' onChange={handleInputChange} label='Chose Product Image' />
                            {/* <TextField color="success" size='small' variant="filled" type="file" className="form-control" id="bulkPrice" value={products.containLiquid} name='bulkPrice' label='' onChange={handleProductsChange} required/> */}
                            <button className='button mt-3 form-control' onClick={createProducts}>Update Product</button>

                        </div>

                    </div>


                </Box>
                </form>
            </Scrollbars>
        </>
    )
}

export default EditProduct