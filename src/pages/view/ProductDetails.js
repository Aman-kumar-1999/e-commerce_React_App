import React, { useEffect, useState } from "react";

import '../css/ProductDetails.css'
import axios from "axios";
import baseUrl from "../../helper/helper";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const ProductDetails = () => {
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

    useEffect(() => {
        getProductByProductId();

    }, [])

    const userData = JSON.parse(localStorage.getItem('userData'))
    var isLoggedIn = localStorage.getItem('isLoggedIn');

    const cart =
    {

        "productId": '',
        "vendorId": '',
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

    const [product, setProducts] = useState([]
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
    );
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
                            console.log(response.data)
                            toast.success('Order has been Created.')

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

    const getProductByProductId = async (event) => {

        try {
            // const response = axios.get(`http://localhost:5005/product/productId/${productId}`).then(
            const response = axios.get(`${baseUrl}/product/productId/${productId}`).then(
                (response) => {
                    setProducts(response.data)
                    console.log('product Data By Id : ' + response.data)
                    // toast.success('Your are ready to update product Data')
                }, (error) => {
                    console.log(error);
                    // toast.error('Your are unable to update product Data')
                }

            )

        } catch (error) {
            console.error(error);
            // toast.error('Server is down !')
        }
    }
    return (
        <>

            <div className="productDetails">
                <div className="">
                    {imgCollection.map(item => (
                        <div className="carousel-item active" data-bs-interval="6000">
                            {
                                (product.imagePath != "No") ? (
                                    <div>
                                        <img className="productDetailsProductImage" src={product.imagePath} alt="" />

                                    </div>
                                ) : (<>
                                    <div>
                                        <img className="productDetailsProductImage" src='productImage.png' alt="...." />
                                    </div>
                                </>)
                            }



                        </div>
                    ))}
                    {/* <button className="prevbutton" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon prevIcon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="nextbutton" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span style={{ width: 10, height: 15 }} className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                    {/* <img className="productDetailsProductImage" src={product.imagePath} alt="..." /> */}
                </div>
                <div>
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
                    {/* <p>Quantity : </p><input type='text' placeholder="didi"/> */}
                    <button className="productDetailsAddToCart" onClick={() => addToCart(product)}>Add to Cart</button>

                    <button className="productDetailsBuyNow" onClick={() => checkout(product)}>Buy Now </button>

                </div>
            </div>


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

        </>
    )
}

export default ProductDetails