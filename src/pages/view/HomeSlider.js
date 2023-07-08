import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-multi-carousel/lib/styles.css';
import '../css/HomeSlider.css'
import 'react-toastify/dist/ReactToastify.css';
import baseUrl from '../../helper/helper';
import HomeCategory from './HomeCategory';
import axios from 'axios';
import 'react-multi-carousel/lib/styles.css';
import Equipments from './Equipments';

function HomeSlider(props) {



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
    const [dataInst, setDataInst] = useState([]);
    const [dataPlastic, setDataPlastic] = useState([]);
    const [dataGlass, setDataGlass] = useState([]);
    const [dataChemical, setDataChemical] = useState([]);
    const [dataChart, setDataChart] = useState([]);
    const [temp, setTemp] = useState(true);


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
        // setTemp(true)
        // if(temp){
        fetchData();
        fetchDataInst();
        fetchDataPlastic();
        fetchDataChemical();
        fetchDataGlass();        
        fetchDataChart();
        // }
        // setTemp(false)
    }, [temp]);

    const fetchData = async () => {
        let eqi = 'Equipments'
        let dataLimit = 20;

        let pageNo = Math.ceil(data.length/dataLimit) + 1
        console.log("Page No : "+pageNo)

        try {
            // const response = await fetch(`http://localhost:5005/product/category/${eqi}/${pageNo}/${dataLimit}`);
            const response = await fetch(`${baseUrl}/product/category/${eqi}/${pageNo}/${dataLimit}`);


            let jsonproduct = await response.json();

            let apidata = [...data, ...jsonproduct];

            // listproduct = jsonproduct;
            setData(apidata);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    const fetchDataInst = async () => {
        let eqi = 'Instruments'
        let dataLimit = 20;

        let pageNo = Math.ceil(data.length/dataLimit) + 1
        console.log("Page No : "+pageNo)

        try {
            // const response = await fetch(`http://localhost:5005/product/category/${eqi}/${pageNo}/${dataLimit}`);
            const response = await fetch(`${baseUrl}/product/category/${eqi}/${pageNo}/${dataLimit}`);


            let jsonproduct = await response.json();

            let apidata = [...data, ...jsonproduct];

            // listproduct = jsonproduct;
            setDataInst(apidata);
        } catch (error) {
            console.log('Error:', error);
        }
       
    };
    const fetchDataPlastic = async () => {

        let eqi = 'Plasticware'

        

        let dataLimit = 20;

        let pageNo = Math.ceil(data.length/dataLimit) + 1
        console.log("Page No : "+pageNo)

        try {
            // const response = await fetch(`http://localhost:5005/product/category/${eqi}/${pageNo}/${dataLimit}`);
            const response = await fetch(`${baseUrl}/product/category/${eqi}/${pageNo}/${dataLimit}`);


            let jsonproduct = await response.json();

            let apidata = [...data, ...jsonproduct];

            // listproduct = jsonproduct;
            setDataPlastic(apidata);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    const fetchDataGlass = async () => {
        let eqi = 'Glassware'
        let dataLimit = 20;

        let pageNo = Math.ceil(data.length/dataLimit) + 1
        console.log("Page No : "+pageNo)

        try {
            // const response = await fetch(`http://localhost:5005/product/category/${eqi}/${pageNo}/${dataLimit}`);
            const response = await fetch(`${baseUrl}/product/category/${eqi}/${pageNo}/${dataLimit}`);


            let jsonproduct = await response.json();

            let apidata = [...data, ...jsonproduct];

            // listproduct = jsonproduct;
            setDataGlass(apidata);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    const fetchDataChemical = async () => {
        let eqi = 'Chemicals'
        let dataLimit = 20;

        let pageNo = Math.ceil(data.length/dataLimit) + 1
        console.log("Page No : "+pageNo)

        try {
            // const response = await fetch(`http://localhost:5005/product/category/${eqi}/${pageNo}/${dataLimit}`);
            const response = await fetch(`${baseUrl}/product/category/${eqi}/${pageNo}/${dataLimit}`);


            let jsonproduct = await response.json();

            let apidata = [...data, ...jsonproduct];

            // listproduct = jsonproduct;
            setDataChemical(apidata);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    const fetchDataChart = async () => {
        let eqi = 'Chart & Models'
        let dataLimit = 20;

        let pageNo = Math.ceil(data.length/dataLimit) + 1
        console.log("Page No : "+pageNo)

        try {
            // const response = await fetch(`http://localhost:5005/product/category/${eqi}/${pageNo}/${dataLimit}`);
            const response = await fetch(`${baseUrl}/product/category/${eqi}/${pageNo}/${dataLimit}`);


            let jsonproduct = await response.json();

            let apidata = [...data, ...jsonproduct];

            // listproduct = jsonproduct;
            setDataChart(apidata);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const getProductByProductId = async (productId) => {

        try {
            // const response = axios.get(`http://localhost:5005/product/productId/${productId}`).then(
            const response = await axios.get(`${baseUrl}/product/productId/${productId}`).then(
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
    // console.log(data)
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
            // startPayment(item1);
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
                        navigate('/checkoutsuccess')

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
    function initiateClientModule(data) {

        const script = document.createElement("script");
        script.src = `https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/KzHAQX87362223007289.js`;
        script.crossOrigin = `anonymous`;
        script.onload = () => {

            var config = {
                "root": "",
                "flow": "DEFAULT",
                "data": {
                    "orderId": data.orderId, /* update order id */
                    "token": data.body.txnToken, /* update token value */
                    "tokenType": "TXN_TOKEN",
                    "amount": data.amount/* update amount */
                },

                "merchant": {

                    mid: "KzHAQX87362223007289",
                    redirect: true
                },

                "handler": {
                    "notifyMerchant": function (eventName, data) {
                        console.log("notifyMerchant handler function called");
                        console.log("eventName => ", eventName);
                        console.log("data => ", data);
                    },
                    "transactionStatus": function (data) {
                        console.log("transaction completed")
                        console.log(data)

                        if (data.STATUS = "TXN_FAILURE") {
                            alert(data.RESPMSG)
                        } else if (data.STATUS == 'TXN_SUCCESS') {

                            toast.success(data.RESPMSG)
                            // alert(data.RESPMSG)
                            // checkout(cart);
                            // navigate('/checkoutsuccess')

                            // console.log("Cap : "+cart)
                            //capture api with data : call kar lo

                        } else {
                            alert("Something wend wrong while payment contact to admin!!")
                        }

                        window.Paytm.CheckoutJS.close();


                    }


                }
            };


            if (window.Paytm && window.Paytm.CheckoutJS) {
                window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
                    // initialze configuration using init method
                    window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                        // after successfully updating configuration, invoke JS Checkout
                        window.Paytm.CheckoutJS.invoke();
                    }).catch(function onError(error) {
                        console.log("error => ", error);
                    });
                });
            }

        }

        document.body.appendChild(script);


    }

    //start payment function
    async function startPayment(item) {
        //call api to start payment
        // const amount = document.querySelector("#user_amount").value
        console.log("Jan")

        // const baseUrl1 = "http://localhost:5004/order/start"

        // const response = await fetch(`http://localhost:5004/order/start`, {
        const response = await fetch(`${baseUrl}/order/start`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'amount': item.natePriceWithDiscount.toFixed(2) })
        })


        response.json().then(data => {
            //order is generated successfully
            console.log(data)


            initiateClientModule(data)


        }).catch(error => {
            console.log(error)
            alert("error in initiating payment")
        })


    }

    return (
        <div className='carasouldiv'>
            <Link to={'/equipments'} className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hovern lastbtn '>View all</Link>

            <div className="Header">
                <h3 className="Heading">Equipments</h3>
                <h5 className="Action" ></h5>
            </div>

            <hr style={{ paddingTop: 1, background: '#a70cef', marginLeft: '10px' }}/>
            <Carousel autoPlay responsive={responsive}>
                
                {data.map(item => (
                    <>


                        <Link to={'/productDetails/' + item.productId} className="col text-decoration-none">

                            <div className="" key={item.id} >
                                {
                                    (item.imagePath != "No") ? (
                                        <div>
                                            <img className="productImage" src={item.imagePath} alt="...." />

                                        </div>
                                    ) : (<><div>
                                        <img className="productImage" src='productImage.png' alt="...." />
                                    </div>
                                    </>)
                                }

                                <div className='card-body'>
                                    <p className='productName' >{
                                        item.productName.length >= 10 ? (<>{item.productName.toUpperCase().slice(0, 10)} ....</>) : (<>{item.productName.toUpperCase()}</>)
                                    }</p>
                                    <p className='off'>{item.discountPercentage} % off</p>
                                    <p className='natePriceWithDiscount'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.natePriceWithDiscount}</p>
                                    <p className='brandName'>{item.brandName}</p>
                                    <p className='individualProductPrice'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.individualProductPrice}</p>
                                    {/* <p className='' >{item.productName}</p>
                                            <p className=''><p className=''>{item.discountPercentage} % off</p></p>
                                            <p className=''>Rs {item.natePriceWithDiscount}</p>
                                            <p className=''>{item.brandName}</p> */}


                                    {
                                        (isLoggedIn) ? (
                                            <div >
                                                <Link onClick={() => addToCart(item)}><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link onClick={() => checkout(item)}><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </div>
                                        ) : (
                                            <>
                                                <Link to={'/login'} className="cart-btn"><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link to={'/login'} className="cart-btn"><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </Link>
                    </>
                )
                )

                }
            </Carousel>
            <Link to={'/instruments'} className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hovern lastbtn '>View all</Link>
                
            <div className="Header">
                <h3 className="Heading">Instruments</h3>
                <h5 className="Action" ></h5>
            </div>

            <hr style={{ paddingTop: 1, background: '#a70cef', marginLeft: '10px' }}/>

            <Carousel autoPlay responsive={responsive}>
                {dataInst.map(item => (
                    <>


                        <Link to={'/productDetails/' + item.productId} className="col text-decoration-none">

                            <div className="" key={item.id} >
                                {
                                    (item.imagePath != "No") ? (
                                        <div>
                                            <img className="productImage" src={item.imagePath} alt="...." />

                                        </div>
                                    ) : (<><div>
                                        <img className="productImage" src='productImage.png' alt="...." />
                                    </div>
                                    </>)
                                }

                                <div className='card-body'>
                                    <p className='productName' >{
                                        item.productName.length >= 10 ? (<>{item.productName.toUpperCase().slice(0, 10)} ....</>) : (<div className="productName2">{item.productName.toUpperCase()}</div>)
                                    }</p>
                                    <p className='off'>{item.discountPercentage} % off</p>
                                    <p className='natePriceWithDiscount'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.natePriceWithDiscount}</p>
                                    <p className='brandName'>{item.brandName}</p>
                                    <p className='individualProductPrice'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.individualProductPrice}</p>
                                    {/* <p className='' >{item.productName}</p>
                                            <p className=''><p className=''>{item.discountPercentage} % off</p></p>
                                            <p className=''>Rs {item.natePriceWithDiscount}</p>
                                            <p className=''>{item.brandName}</p> */}


                                    {
                                        (isLoggedIn) ? (
                                            <div >
                                                <Link onClick={() => addToCart(item)}><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link onClick={() => checkout(item)}><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </div>
                                        ) : (
                                            <>
                                                <Link to={'/login'} className="cart-btn"><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link to={'/login'} className="cart-btn"><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </Link>
                    </>
                )
                )

                }
            </Carousel>
            <Link to={'/plasticWare'} className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hovern lastbtn '>View all</Link>

            <div className="Header">
                <h3 className="Heading">Plastic Ware</h3>
                <h5 className="Action" ></h5>
            </div>

            <hr style={{ paddingTop: 1, background: '#a70cef', marginLeft: '10px' }}/>
            <Carousel autoPlay responsive={responsive}>
                {dataPlastic.map(item => (
                    <>


                        <Link to={'/productDetails/' + item.productId} className="col text-decoration-none">

                            <div className="" key={item.id} >
                                {
                                    (item.imagePath != "No") ? (
                                        <div>
                                            <img className="productImage" src={item.imagePath} alt="...." />

                                        </div>
                                    ) : (<><div>
                                        <img className="productImage" src='productImage.png' alt="...." />
                                    </div>
                                    </>)
                                }

                                <div className='card-body'>
                                    <p className='productName' >{
                                        item.productName.length >= 10 ? (<>{item.productName.toUpperCase().slice(0, 10)} ....</>) : (<>{item.productName.toUpperCase()}</>)
                                    }</p>
                                    <p className='off'>{item.discountPercentage} % off</p>
                                    <p className='natePriceWithDiscount'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.natePriceWithDiscount}</p>
                                    <p className='brandName'>{item.brandName}</p>
                                    <p className='individualProductPrice'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.individualProductPrice}</p>
                                    {/* <p className='' >{item.productName}</p>
                                            <p className=''><p className=''>{item.discountPercentage} % off</p></p>
                                            <p className=''>Rs {item.natePriceWithDiscount}</p>
                                            <p className=''>{item.brandName}</p> */}


                                    {
                                        (isLoggedIn) ? (
                                            <div >
                                                <Link onClick={() => addToCart(item)}><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link onClick={() => checkout(item)}><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </div>
                                        ) : (
                                            <>
                                                <Link to={'/login'} className="cart-btn"><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link to={'/login'} className="cart-btn"><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </Link>
                    </>
                )
                )

                }
            </Carousel>
            <Link to={'/glassWare'} className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hovern lastbtn '>View all</Link>

            <div className="Header">
                <h3 className="Heading">Glass Ware</h3>
                <h5 className="Action" ></h5>
            </div>

            <hr style={{ paddingTop: 1, background: '#a70cef', marginLeft: '10px' }}/>

            <Carousel autoPlay responsive={responsive}>
                {dataGlass.map(item => (
                    <>


                        <Link to={'/productDetails/' + item.productId} className="col text-decoration-none">

                            <div className="" key={item.id} >
                                {
                                    (item.imagePath != "No") ? (
                                        <div>
                                            <img className="productImage" src={item.imagePath} alt="...." />

                                        </div>
                                    ) : (<><div>
                                        <img className="productImage" src='productImage.png' alt="...." />
                                    </div>
                                    </>)
                                }

                                <div className='card-body'>
                                    <p className='productName' >{
                                        item.productName.length >= 10 ? (<>{item.productName.toUpperCase().slice(0, 10)} ....</>) : (<>{item.productName.toUpperCase()}</>)
                                    }</p>
                                    <p className='off'>{item.discountPercentage} % off</p>
                                    <p className='natePriceWithDiscount'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.natePriceWithDiscount}</p>
                                    <p className='brandName'>{item.brandName}</p>
                                    <p className='individualProductPrice'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.individualProductPrice}</p>
                                    {/* <p className='' >{item.productName}</p>
                                            <p className=''><p className=''>{item.discountPercentage} % off</p></p>
                                            <p className=''>Rs {item.natePriceWithDiscount}</p>
                                            <p className=''>{item.brandName}</p> */}


                                    {
                                        (isLoggedIn) ? (
                                            <div >
                                                <Link onClick={() => addToCart(item)}><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link onClick={() => checkout(item)}><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </div>
                                        ) : (
                                            <>
                                                <Link to={'/login'} className="cart-btn"><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link to={'/login'} className="cart-btn"><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </Link>
                    </>
                )
                )

                }
            </Carousel>
            <Link to={'/chemicals'} className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hovern lastbtn '>View all</Link>

            <div className="Header">
                <h3 className="Heading">Chemicals</h3>
                <h5 className="Action" ></h5>
            </div>

            <hr style={{ paddingTop: 1, background: '#a70cef', marginLeft: '10px' }}/>
            <Carousel autoPlay responsive={responsive}>
                {dataChemical.map(item => (
                    <>


                        <Link to={'/productDetails/' + item.productId} className="col text-decoration-none">

                            <div className="" key={item.id} >
                                {
                                    (item.imagePath != "No") ? (
                                        <div>
                                            <img className="productImage" src={item.imagePath} alt="...." />

                                        </div>
                                    ) : (<><div>
                                        <img className="productImage" src='productImage.png' alt="...." />
                                    </div>
                                    </>)
                                }

                                <div className='card-body'>
                                    <p className='productName' >{
                                        item.productName.length >= 10 ? (<>{item.productName.toUpperCase().slice(0, 10)} ....</>) : (<>{item.productName.toUpperCase()}</>)
                                    }</p>
                                    <p className='off'>{item.discountPercentage} % off</p>
                                    <p className='natePriceWithDiscount'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.natePriceWithDiscount}</p>
                                    <p className='brandName'>{item.brandName}</p>
                                    <p className='individualProductPrice'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.individualProductPrice}</p>
                                    {/* <p className='' >{item.productName}</p>
                                            <p className=''><p className=''>{item.discountPercentage} % off</p></p>
                                            <p className=''>Rs {item.natePriceWithDiscount}</p>
                                            <p className=''>{item.brandName}</p> */}


                                    {
                                        (isLoggedIn) ? (
                                            <div >
                                                <Link onClick={() => addToCart(item)}><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link onClick={() => checkout(item)}><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </div>
                                        ) : (
                                            <>
                                                <Link to={'/login'} className="cart-btn"><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link to={'/login'} className="cart-btn"><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </Link>
                    </>
                )
                )

                }
            </Carousel>
            <Link to={'/chart'} className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hovern lastbtn '>View all</Link>

            <div className="Header">
                <h3 className="Heading">Chart & Model</h3>
                <h5 className="Action" ></h5>
            </div>

            <hr style={{ paddingTop: 1, background: '#a70cef', marginLeft: '10px' }}/>

            <Carousel autoPlay responsive={responsive}>
                {dataChart.map(item => (
                    <>


                        <Link to={'/productDetails/' + item.productId} className="col text-decoration-none">

                            <div className="" key={item.id} >
                                {
                                    (item.imagePath != "No") ? (
                                        <div>
                                            <img className="productImage" src={item.imagePath} alt="...." />

                                        </div>
                                    ) : (<><div>
                                        <img className="productImage" src='productImage.png' alt="...." />
                                    </div>
                                    </>)
                                }

                                <div className='card-body'>
                                    <p className='productName' >{
                                        item.productName.length >= 10 ? (<>{item.productName.toUpperCase().slice(0, 10)} ....</>) : (<>{item.productName.toUpperCase()}</>)
                                    }</p>
                                    <p className='off'>{item.discountPercentage} % off</p>
                                    <p className='natePriceWithDiscount'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.natePriceWithDiscount}</p>
                                    <p className='brandName'>{item.brandName}</p>
                                    <p className='individualProductPrice'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.individualProductPrice}</p>
                                    {/* <p className='' >{item.productName}</p>
                                            <p className=''><p className=''>{item.discountPercentage} % off</p></p>
                                            <p className=''>Rs {item.natePriceWithDiscount}</p>
                                            <p className=''>{item.brandName}</p> */}


                                    {
                                        (isLoggedIn) ? (
                                            <div >
                                                <Link onClick={() => addToCart(item)}><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link onClick={() => checkout(item)}><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </div>
                                        ) : (
                                            <>
                                                <Link to={'/login'} className="cart-btn"><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link to={'/login'} className="cart-btn"><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </Link>
                    </>
                )
                )

                }
            </Carousel>

        </div>
    )
}

export default HomeSlider
