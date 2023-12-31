import React, { useEffect, useState } from "react";

import '../css/ProductDetails.css'
import axios from "axios";
import baseUrl from "../../helper/helper";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import Carousel from "react-multi-carousel";


const ProductDetails = () => {

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
    const imgCollection = [
        {
            image: 'eqippedImg3.png',

        }, {
            image: 'eqippedImg4.jpg',

        }, {
            image: 'Labequipment.png',

        }
    ];

    const { productId } = useParams();
    const [data, setData] = useState([]);
    const [product, setProducts] = useState([]);
    const [tier, setTier] = useState([]);
    const [variationData, setvariationData] = useState([]);


    useEffect(() => {
        window.scrollTo(0, 0);
        getProductByProductIdForTier();
        getProductByVariationId();


    }, [])

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
        "status": "New Shipments",
        "action": "Edit",
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


    // {

    //         "productId": productId,
    //         "productName": "",
    //         "brandName": "",
    //         "productDescription": "",
    //         "category": "",
    //         "individualProductPrice": "",
    //         "status": "Confirmed Order",
    //         "action": "Edit",
    //         "productQuantity": "",
    //         "discountPercentage": ""

    // }

    const navigate = useNavigate();

    const addToCart = async (item) => {
        if (isLoggedIn) {

            try {
                let cart1 = JSON.stringify(item)
                // console.log('Item : ' + JSON.stringify(item))
                let item1 = JSON.parse(cart1);
                cart.productId = item1.productId;
                cart.vendorId = item1.vendorId;
                cart.email = userData.email;
                cart.phone = userData.phone;
                cart.address = userData.address;
                cart.customerName = userData.firstName + " " + userData.lastName;
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
        }
        else {
            navigate('/login')

        }
    };

    const checkout = async (items) => {
        if (isLoggedIn) {
            try {
                const response = null;
                let cart1 = JSON.stringify(items)
                // console.log('Item : ' + JSON.stringify(items))
                let item1 = JSON.parse(cart1);
                cart.productId = item1.productId;
                cart.vendorId = item1.vendorId;
                cart.email = userData.email;
                cart.phone = userData.phone;
                cart.address = userData.address;
                cart.customerName = userData.firstName + " " + userData.lastName;
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

                // response = axios.post(`http://localhost:5004/order/`, cart).then(

                response = axios.post(`${baseUrl}/order/`, cart).then(
                    (response) => {
                        if (response.status == 200) {



                            //console.log(response.data)
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
        } else {
            navigate('/login')
        }

    }

    // const getProductByProductId = async () => {
    //     try {
    //         const response = await fetch(`${baseUrl}/product/productId/${productId}`);


    //         const jsonproduct = await response.json();
    //         // listproduct = jsonproduct;
    //         setProducts(jsonproduct);


    //     } catch (error) {
    //         console.log('Error:', error);
    //     }

    // }
    const getProductByProductIdForTier = async () => {
        try {
            // const response = await fetch(`http://localhost:5005/product/tier/productId/${productId}`);
            const response = await fetch(`${baseUrl}/product/tier/productId/${productId}`);


            const jsonproduct = await response.json();
            // listproduct = jsonproduct;
            // setProducts(jsonproduct);
            console.log("Tier : " + jsonproduct.TIER)
            setTier(jsonproduct.TIER)
            setProducts(jsonproduct.PRODUCT)



        } catch (error) {
            console.log('Error:', error);
        }

    }
    const getProductByVariationId = async () => {
        let dataLimit = 10;

        let pageNo = Math.ceil(data.length / dataLimit) + 1
        console.log("Page No : " + pageNo)
        try {
            // const response = await fetch(`http://localhost:5005/product/variationId/${product.variationId}/${pageNo}/${dataLimit}`);

            const response = await fetch(`${baseUrl}/product/variationId/${product.variationId}?pageNo=${pageNo}&dataLimit=${dataLimit}`);


            let jsonproduct = await response.json();

            let apidata = [...variationData, ...jsonproduct];

            setvariationData(apidata);
            console.log('Veriation : ' + variationData);
        } catch (error) {
            console.log('Error:', error);
        }

    }
    const getProductByVariationIdScroll = async () => {
        //window.location.reload();
        let dataLimit = 10;

        let pageNo = Math.ceil(data.length / dataLimit) + 1
        console.log("Page No : " + pageNo)
        try {
            // const response = await fetch(`http://localhost:5005/product/variationId/${product.variationId}/${pageNo}/${dataLimit}`);

            const response = await fetch(`${baseUrl}/product/variationId/${product.variationId}?pageNo=${pageNo}&dataLimit=${dataLimit}`);


            let jsonproduct = await response.json();

            let apidata = [...variationData, ...jsonproduct];

            setvariationData(apidata);
            console.log('Veriation : ' + variationData);
        } catch (error) {
            console.log('Error:', error);
        }

    }
    return (
        <>
            <div className="row mt-5 bg-opacity-10 border border-info border-start-0 rounded-3">
                <div className="col float-start">

                    <div className="">

                        <div className="col mt-4">
                            {
                                (product.imagePath != "No") ? (
                                    <div>
                                        <img className="" src={product.imagePath} alt="" />


                                    </div>
                                ) : (<>
                                    <div>
                                        <img className="" src='https://eqipped.com/productImage.png' alt="...." />


                                    </div>
                                </>)
                            }



                        </div>

                    </div>

                </div>
                <div className="col mb-5 float-start">
                    <h4 className="">{product.productName} </h4>

                    <p> Brand: {product.brandName}</p>
                    
                    <p> Quantity of Products in a Packet : {product.productQuantity}</p>
                    <p>Company Code: {product.companyCode} </p>
                    <p>Price :
                        <span style={{ fontSize: '15px' }} className="material-symbols-outlined">
                            currency_rupee
                        </span>{product.natePriceWithDiscount} /-</p>
                    <p >{product.productDescription}</p>
                    <div className="row mb-4 bg-muted rounded-3">

                        <div className="col-4 table-responsive">

                            <div className="row">
                                <p><b>Packet : </b></p>
                            </div>
                            <div className="row">
                                <p><b>Price : </b></p>
                            </div>

                        </div>

                        {
                            tier && tier.map(item => (
                                <>
                                    <div className="col table-responsive">


                                        <div className="row">
                                            <p>{item.productQuantity}</p>
                                        </div>
                                        <div className="row">
                                            <p> <span style={{ fontSize: '15px' }} className="material-symbols-outlined">
                                                currency_rupee
                                            </span>
                                                {(item.productQuantity) * (product.natePriceWithDiscount - (item.offerPercentage / 100) * product.natePriceWithDiscount).toFixed(0)}</p>
                                        </div>

                                    </div>


                                </>
                            ))
                        }

                    </div>

                    <button className="btn btn-info" onClick={() => addToCart(product)}>Add to Cart</button>
                    <button className="btn btn-danger ml-5" onClick={() => checkout(product)} >Buy Now</button>

                </div>

            </div>

            {/* <div className="productDetails">
                {product ? (<>
                    <div className="">
                        
                        <div className="carousel-item active col" data-bs-interval="6000">
                            {
                                (product.imagePath != "No") ? (
                                    <div>
                                        <img className="productDetailsProductImage" src={product.imagePath} alt="" />

                                    </div>
                                ) : (<>
                                    <div>
                                        <img className="productDetailsProductImage" src='https://eqipped.com/productImage.png' alt="...." />
                                    </div>
                                </>)
                            }



                        </div>
                       
                    </div>
                    <div className="col">
                        <p className="productDetailsProductName">{product.productName}</p>
                        <p className="productDetailsDscription">Quantity : {product.productQuantity}</p>
                        <p className="productDetailsBrandName">brand Name: {product.brandName}</p>
                        <p className="productDetailsProductPrice">
                            Price :
                            <span className="material-symbols-outlined">
                                currency_rupee
                            </span>{product.natePriceWithDiscount} /-
                        </p>
                        <p className="productDetailsProductDescription">{product.productDescription}</p>
                        
                        <button className="productDetailsAddToCart" onClick={() => addToCart(product)}>Add to Cart</button>

                        <button className="productDetailsBuyNow" onClick={() => checkout(product)}>Buy Now </button>

                    </div>
                </>) : (<>
                    <div className='text-center loading1'>

                        <img style={{ width: 200, height: 200 }} src='https://eqipped.com/spinner.gif' />
                        <h1>Loading .... </h1>
                       

                    </div>
                </>)}

            </div> */}


            {/* <div class="list-group ">


                <a href="#" class="list-group-item list-group-item-action rounded cartBody1">
                    <div className="Cart-Items">
                        <div className="image-box">

                            <div>
                                <img className="imageProduct" src={product.imagePath} alt="...." />

                            </div>


                        </div>
                        <div className="about1">
                            <h1 className="title">{product.productName}</h1>
                            <h3 className="subtitle">{product.productDescription}</h3>
                            <h3 className="subtitle">{product.brandName}</h3>
                            <h3 className="subtitle">{product.containLiquid}</h3>
                        </div>

                        <div className="prices">
                            <div className="amount">
                                <span className="material-symbols-outlined">
                                    currency_rupee
                                </span> {product.natePriceWithDiscount}
                            </div>
                        </div>


                    </div >
                </a>






            </div> */}
            <div className="Variation">


                <div className="Header">
                    <h3 className="Heading">Related Products</h3>
                    <h5 className="Action" ></h5>
                </div>

                <hr style={{ paddingTop: 1, background: '#a70cef', marginLeft: '10px' }} />


                <InfiniteScroll
                    dataLength={variationData.length}
                    next={getProductByVariationId}
                    hasMore={true}
                    loader={<div className='text-center loading1'>

                        <img style={{ width: 50, height: 50 }} src='https://eqipped.com/spinner.gif' />

                    </div>}

                >
                    <div className="row">
                        {variationData.map((item,index) => (


                            <Link key={index} to={'/productDetails/' + item.productId} className="col linkHover">
                                <div className="card-img text-decoration-none ">

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

                                </div>

                            </Link>

                        ))}
                    </div>

                </InfiniteScroll>
            </div>

        </>
    )
}

export default ProductDetails