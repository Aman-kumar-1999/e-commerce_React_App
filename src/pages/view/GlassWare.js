import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import { Link, useNavigate } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css';
import '../css/HomeSlider.css'
import 'react-toastify/dist/ReactToastify.css';
import baseUrl from '../../helper/helper';
import HomeCategory from './HomeCategory';
import { toast } from 'react-toastify';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';


import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function GlassWare(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };




    const [data, setData] = useState([]);

    const userData = JSON.parse(localStorage.getItem('userData'))
    var isLoggedIn = localStorage.getItem('isLoggedIn');

    const cart =
    {

        "productId": '',
        "vendorId": '',
        "customerName": '',
        "vendorName": null,
        "vendorEmail": null,
        "productName": null,
        "productDescription": null,
        "category": null,
        "brandName": null,
        "productQuantity": null,
        "individualProductPrice": 0.0,
        "natePriceWithDiscount": 0.0,
        "discountPercentage": 0.0,
        "status": null,
        "action": null,
        "imageName": null,
        "imagePath": null,
        "bulkCode": null,
        "variationName": null,
        "variationId": null,
        "gst": null,
        "hsn": null,
        "isVerified": null,
        "tierNo": null,
        "containLiquid": null,
        "totalProductPrice": 0.0

    }






    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let eqi = 'Glassware'
        let dataLimit = 10;

        let pageNo = Math.ceil(data.length / dataLimit) + 1
        console.log("Page No : " + pageNo)

        try {
            // const response = await fetch(`http://localhost:5005/product/category/${eqi}/${pageNo}/${dataLimit}`);
            const response = await fetch(`${baseUrl}/product/category/${eqi}?pageNo=${pageNo}&dataLimit=${dataLimit}`);


            let jsonproduct = await response.json();

            let apidata = [...data, ...jsonproduct];

            // listproduct = jsonproduct;
            setData(apidata);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    const getProductByProductId = async (productId) => {

        try {
            // const response = axios.get(`http://localhost:5005/product/productId/${productId}`).then(
            const response = axios.get(`${baseUrl}/product/productId/${productId}`).then(
                (response) => {
                    console.log('product Data By Id : ' + response.data)
                    return response.data
                    // console.log('product Data By Id : ' + response.data)
                    // toast.success('Your are ready to update product Data')
                }, (error) => {
                    console.log(error);
                    // toast.error('Your are unable to update product Data')
                }

            )
            return response;

        } catch (error) {
            console.error(error);
            // toast.error('Server is down !')
        }
    }
    const addToCart = async (item) => {
        try {
            let cart1 = JSON.stringify(item)
            console.log('Item : ' + JSON.stringify(item))
            let item1 = JSON.parse(cart1);
            cart.productId = item1.productId;
            cart.vendorId = item1.vendorId;
            cart.customerName = userData.firstName + " " + userData.lastName;
            cart.email = userData.email;
            cart.phone = userData.phone;
            cart.address = userData.address;
            cart.vendorName = item1.vendorName;
            cart.vendorEmail = item1.vendorEmail;
            cart.productName = item1.productName;
            cart.productDescription = item1.productDescription;
            cart.category = item1.category;
            cart.brandName = item1.brandName;
            cart.productQuantity = item1.productQuantity;
            cart.individualProductPrice = item1.individualProductPrice;
            cart.natePriceWithDiscount = item1.natePriceWithDiscount;
            cart.discountPercentage = item1.discountPercentage;
            cart.imageName = item1.imageName;
            cart.imagePath = item1.imagePath;
            cart.bulkCode = item1.bulkCode;
            cart.variationName = item1.variationName;
            cart.variationId = item1.variationId;
            cart.gst = item1.gst;
            cart.hsn = item1.hsn;
            cart.status = "New Shipments";
            cart.action = "Edit";
            cart.isVerified = item1.isVerified;
            cart.tierNo = item1.tierNo;
            cart.containLiquid = item1.containLiquid;
            cart.totalProductPrice = item1.totalProductPrice;
            console.log("ProductId : " + cart.productId);



            const response = await axios.post(`${baseUrl}/order/cart`, cart)

                .then(response => {

                    console.log(response.data);


                    toast.success('Added on cart')


                })
                .catch(error => {


                    toast.error('Unable to add on cart')
                    console.error(error);
                });





        } catch (error) {
            console.error(error);

        }
    };
    console.log(data)
    const navigate = useNavigate();
    const checkout = async (items1) => {
        try {
            console.log("item : " + items1)
            const items = await getProductByProductId(items1.productId)
            console.log("Product Id  : " + JSON.stringify(items))
            const response = null;
            let cart1 = JSON.stringify(items)
            console.log('Item : ' + JSON.stringify(items))
            let item1 = JSON.parse(cart1);
            cart.productId = item1.productId;
            cart.vendorId = item1.vendorId;
            cart.customerName = userData.firstName + " " + userData.lastName;
            cart.email = userData.email;
            cart.phone = userData.phone;
            cart.address = userData.address;
            cart.vendorName = item1.vendorName;
            cart.vendorEmail = item1.vendorEmail;
            cart.productName = item1.productName;
            cart.productDescription = item1.productDescription;
            cart.category = item1.category;
            cart.brandName = item1.brandName;
            cart.productQuantity = item1.productQuantity;
            cart.individualProductPrice = item1.individualProductPrice;
            cart.natePriceWithDiscount = item1.natePriceWithDiscount;
            cart.discountPercentage = item1.discountPercentage;
            cart.imageName = item1.imageName;
            cart.imagePath = item1.imagePath;
            cart.bulkCode = item1.bulkCode;
            cart.variationName = item1.variationName;
            cart.variationId = item1.variationId;
            cart.gst = item1.gst;
            cart.hsn = item1.hsn;
            cart.status = "New Shipments";
            cart.action = "Edit";
            cart.isVerified = item1.isVerified;
            cart.tierNo = item1.tierNo;
            cart.containLiquid = item1.containLiquid;
            cart.totalProductPrice = item1.totalProductPrice;
            // console.log("ProductId : " + cart.productId);


            response = axios.post(`${baseUrl}/order/`, cart).then(
                (response) => {
                    if (response.status == 200) {
                        if (response.data.Email_STATUS === 'Failed') {
                            console.log(response.data)
                            toast.warning(`Order has been Created. But Email Sent : ${response.data.Email_STATUS}`);
                        }
                        if (response.data.WhatsApp_STATUS === 'Failed') {
                            console.log(response.data)
                            toast.warning(`Order has been Created. But WhatsApp Msg Sent : ${response.data.WhatsApp_STATUS}`);
                        }
                        if (response.data.WhatsApp_STATUS === 'Success.' || response.data.Email_STATUS === 'Success.') {
                            console.log(response.data)
                            toast.success(`Order has been Created. Sent Email : ${response.data.Email_STATUS} & Sent WhatsApp : ${response.data.WhatsApp_STATUS}`)
                        }
                        else {
                            console.log(response.data)
                            toast.warning(`Order has been Created. Sent Email : ${response.data.Email_STATUS} & Sent WhatsApp : ${response.data.WhatsApp_STATUS}`)
                        } navigate('/checkoutsuccess')

                    }
                }

            ).catch((error) => {
                toast.error('Order can not be created.')
                console.log(error);

            })
            // const response = await axios.post(`http://localhost:5005/product/`,formData);



        } catch (error) {
            // console.error(error);

        }

    }

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='carasouldiv mt-3'>
            <HomeCategory />
            {/* <BottomNavigation className='mb-3' sx={{ width: "100%" }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Equipments"
                    value="equipments"
                    icon={<Link to={'/equipments'} ><img style={{ width: 40 }} src='microscope.png' /></Link>}
                >

                </BottomNavigationAction>
                <BottomNavigationAction
                    label="Instruments"
                    value="instruments"
                    icon={<Link to={'/instruments'} className=''><img style={{ width: 40 }} src='loupe.png' /></Link>}
                />
                <BottomNavigationAction
                    label="Plastic Ware"
                    value="plasticWare"
                    icon={<Link to={'/plasticWare'} className=''>
                        <img style={{ width: 40 }} src='beaker.png' />

                    </Link>}
                />
                <BottomNavigationAction
                    label="Glass Ware"
                    value="glassWare"
                    icon={<Link to={'/glassWare'} className=''>
                        <img style={{ width: 40 }} src='test_tube.png' />

                    </Link>} />
                <BottomNavigationAction
                    label="Chemicals"
                    value="chemicals"
                    icon={<Link to={'/chemicals'} className=''>
                        <img style={{ width: 40 }} src='flask.png' />

                    </Link>} />
                <BottomNavigationAction
                    label="Chart & Models"
                    value="chart"
                    icon={<Link to={'/chart'} className=''>
                        <img style={{ width: 40 }} src='smiling-skeleton.png' />

                    </Link>} />
                <BottomNavigationAction
                    label="Physics"
                    value="physics"
                    icon={<Link to={'/physics'} className=''>
                        <img style={{ width: 40 }} src='physics.png' />

                    </Link>} />
                <BottomNavigationAction
                    label="Chemistry"
                    value="chemistry"
                    icon={<Link to={'/chemistry'} className=''>
                        <img style={{ width: 40 }} src='chemistory.png' />

                    </Link>} />
                <BottomNavigationAction
                    label="Biology"
                    value="biology"
                    icon={<Link to={'/biology'} className=''>
                        <img style={{ width: 40 }} src='biology.png' />

                    </Link>} />


            </BottomNavigation> */}


            {/* <ul class="nav nav-tabs mb-3">
                <li class="nav-item">
                    <Link to={'/equipments'} class="nav-link" aria-current="page" data-bs-target="#nav-home">Equipments</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/instruments'} class="nav-link " aria-current="page" >Instruments</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/plasticWare'} class="nav-link" >Plastic Ware</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/glassWare'} class="nav-link" >Glass Ware</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/chemicals'} class="nav-link " >Chemicals</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/chart'} class="nav-link " >Chart & Model</Link>
                </li>
            </ul> */}



            <InfiniteScroll
                dataLength={data.length}
                next={fetchData}
                hasMore={true}
                loader={<div className='text-center loading1'>

                    <img style={{ width: 50, height: 50 }} src='spinner.gif' />

                </div>}
            // scrollableTarget="scrollableDiv"
            >
                {
                    (data.length == 0) ? (<>

                        {/* <p> No Equipments are Present</p> */}
                    </>) : (
                        <>
                            <div className="row">
                                {data.map(item => (


                                    <div className="col linkHover">
                                        <Link to={'/productDetails/' + item.productId} className="card-img text-decoration-none ">
                                            {
                                                (item.imagePath != "No") ? (
                                                    <div>
                                                        <img className="productImage" src={item.imagePath} alt="...." />

                                                    </div>
                                                ) : (
                                                    <div>
                                                        <img className="productImage" src='https://eqipped.com/productImage.png' alt="..." />
                                                    </div>
                                                )
                                            }

                                            <div className='card-body'>
                                                <p className='productName' >{
                                                    item.productName.length >= 10 ? (<>{item.productName.toUpperCase().slice(0, 10)} ....</>) : (<>{item.productName.toUpperCase()}</>)
                                                }</p>
                                                <p className='offCategory'>{item.discountPercentage} % off</p>
                                                <p className='natePriceWithDiscount'><span id='productIcon' className="material-symbols-outlined">
                                                    currency_rupee
                                                </span> {item.natePriceWithDiscount}</p>
                                                <p className='brandName'>{item.brandName}</p>
                                                <p className='individualProductPrice'><span id='productIcon' className="material-symbols-outlined">
                                                    currency_rupee
                                                </span> {item.individualProductPrice}</p>



                                                {
                                                    (isLoggedIn) ? (
                                                        <div >
                                                            <Link onClick={() => addToCart(item)}><div className='col-5 text-decoration-none cart-button-category'>Add to cart</div></Link>

                                                            <Link onClick={() => checkout(item)}><div className='col-4 float-end text-decoration-none cart-button1-category'>Buy now</div></Link>


                                                        </div>
                                                    ) : (
                                                        <>
                                                            <Link to={'/login'} className="cart-btn"><div className='col-5 text-decoration-none cart-button-category'>Add to cart</div></Link>

                                                            <Link to={'/login'} className="cart-btn"><div className='col-4 text-decoration-none cart-button1-category'>Buy now</div></Link>


                                                        </>
                                                    )
                                                }
                                            </div>

                                        </Link>

                                    </div>

                                ))}
                            </div>

                        </>
                    )
                }

            </InfiniteScroll>




        </div>
    )
}

export default GlassWare;