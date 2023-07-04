import React, { useEffect, useState } from "react"
import '../css/Cart.css'
import baseUrl from '../../helper/helper';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from "react-toastify";


function Cart() {

    const deliveryCharge = 500;
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [finalTotal, setFinalTotal] = useState(0);
    const userData = JSON.parse(localStorage.getItem('userData'))
    const [cart, setCart] = useState([]);
    const [tempCart, setTempCart] = useState([]);
    const navigate = useNavigate();
    const currentItems = [...cart];
    // const total1=[...totalPrice];


    const increaseCount = (index) => {


        const price = currentItems[index].natePriceWithDiscount / currentItems[index].productQuantity
        currentItems[index].productQuantity += 1;
        currentItems[index].natePriceWithDiscount = currentItems[index].productQuantity * price

        setCart(currentItems);
        // let total = 0;
        // cart.map((items) => {
        //     total += items.natePriceWithDiscount;
        // });
        // console.log('Total Price : ' + total)
        // setTotalPrice(total);





    };
    const decreaseCount = (index) => {
        // const currentItems = [...cart];
        if (currentItems[index].productQuantity > 1) {
            const price = currentItems[index].natePriceWithDiscount / currentItems[index].productQuantity
            currentItems[index].productQuantity -= 1;
            currentItems[index].natePriceWithDiscount = currentItems[index].productQuantity * price
            setCart(currentItems);

        }

    };

    var isLoggedIn = localStorage.getItem('isLoggedIn');

    const cart2 =
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

    const [dataInst, setDataInst] = useState([]);
    const fetchDataInst = async () => {
        let eqi = 'Instruments'
        try {
            const response = await axios.get(`${baseUrl}/product/category/${eqi}`);


            const jsonData = await response.data;

            setDataInst(jsonData);
        } catch (error) {
            console.log('Error:', error);
        }
    };




    useEffect(() => {

        calculateTotalPrice();

    },);
    useEffect(() => {

        fetchCart();


    }, []);


    async function callCheckoutApi(data) {
        axios.post(`${baseUrl}/order/`, data).then(
            (response) => {
                console.log(response.data);
                if (response.status == 200) {
                    // toast.success('Order has been Created')
                    return response.data
                }

            }).catch((error) => {
                // toast.error("Unable to confirmed")
                console.log(error)
            })
    }


    const checkout = async (item) => {
        try {
            startPayment();
            const response = null;
            // const formData = new FormData();
            // formData.append('images', images);
            // formData.append('products',JSON.stringify(products));
            await item.map((items) => {
                // total += items.totalProductPrice;
                let cart1 = JSON.stringify(items)
                console.log('Item : ' + JSON.stringify(items))
                let item1 = JSON.parse(cart1);
                cart2.productId = item1.productId;
                cart2.vendorId = item1.vendorId;
                cart2.email = userData.email;
                cart2.phone = userData.phone;
                cart2.address = userData.address;
                cart2.vendorName = item1.vendorName;
                cart2.vendorEmail = item1.vendorEmail;
                cart2.productName = item1.productName;
                cart2.productDescription = item1.productDescription;
                cart2.category = item1.category;
                cart2.brandName = item1.brandName;
                cart2.productQuantity = item1.productQuantity;
                cart2.individualProductPrice = item1.individualProductPrice;
                cart2.natePriceWithDiscount = item1.natePriceWithDiscount;
                cart2.discountPercentage = item1.discountPercentage;
                cart2.imageName = item1.imageName;
                cart2.imagePath = item1.imagePath;
                cart2.bulkCode = item1.bulkCode;
                cart2.variationName = item1.variationName;
                cart2.variationId = item1.variationId;
                cart2.gst = item1.gst;
                cart2.hsn = item1.hsn;
                cart.status = "New Shipments";
                cart.action = "Edit";
                cart2.isVerified = item1.isVerified;
                cart2.tierNo = item1.tierNo;
                cart2.containLiquid = item1.containLiquid;
                cart2.totalProductPrice = item1.totalProductPrice;

                const data = callCheckoutApi(cart2);

                // axios.post(`${baseUrl}/order/`, cart2).then(
                //     (response) => {
                //         console.log(response.data);
                //         if (response.status == 200) {
                //             toast.success('Order has been Created')

                //         }

                //     }).catch((error)=> {
                //         toast.error("Unable to confirmed")
                //         console.log(error)
                //     })

            });



        } catch (error) {
            // console.error(error);

        }

    }

    const fetchCart = async () => {

        try {
            const response = await fetch(`${baseUrl}/order/cart/emailId/${userData.email}`);


            const jsonproduct = await response.json();
            // listproduct = jsonproduct;
            setCart(jsonproduct);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    const removeCart = async (orderId) => {
        try {
            // const response = await axios.delete(`http://localhost:5004/order/cart/${orderId}`);
            const response = await axios.delete(`${baseUrl}/order/cart/${orderId}`).then(response => {
                // Handle the response data
                console.log(response.data);
                const jsonProduct = response.data;
                // listproduct = jsonproduct;


                toast.success('Removed Successfully')
                fetchCart();



            })
                .catch(error => {
                    // Handle the error

                    toast.error('Unable to Remove')
                    console.error(error);
                });


        } catch (error) {
            toast.error('Unable to Remove')
            console.log('Error:', error);
        }
    };
    const removeAllCart = async (email) => {
        try {

            const response = await axios.delete(`${baseUrl}/order/cart/email/${email.trim()}`).then(response => {
                // Handle the response data
                console.log(response.data);


                toast.success('Removed All Cart items Successfully')
                fetchCart();


            })
                .catch(error => {
                    // Handle the error

                    toast.error(' Unable to Removed All Cart items')
                    console.error(error);
                });

        } catch (error) {
            toast.error(' Unable to Removed All Cart items')
            console.log('Error:', error);
        }
    };
    console.log(cart)
    var date;


    const calculateTotalPrice = async () => {
        let total = 0;
        
        cart.map((items) => {
            
            total += items.natePriceWithDiscount;
            
        });
        // console.log('Total Price : ' + total)
        setTotalPrice(total);
        setFinalTotal((totalPrice * ((cart[0].gst) / 100)+totalPrice+deliveryCharge).toFixed(0));
        return finalTotal;
    };

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
    async function startPayment() {
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
            body: JSON.stringify({ 'amount': (totalPrice+(18/100)*totalPrice+deliveryCharge).toFixed(0) })
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
        <>

            <>
                <div class="list-group ">
                    <div className="Header">
                        <h3 className="Heading">Shopping Cart</h3>
                        {
                            (cart.length === 0) ? (
                                <>

                                </>
                            ) : (
                                <>
                                    {/* <h5 className="Action" onClick={() => removeAllCart(userData.email)}>Remove all</h5> */}
                                </>
                            )
                        }

                    </div>
                    {
                        cart.map((items, index) => (
                            <a class="list-group-item list-group-item-action rounded cartBody">
                                <div className="Cart-Items">
                                    <div className="col-2 image-box">
                                        {
                                            (items.imagePath != "No") ? (
                                                <div>
                                                    <img className="img9" src={items.imagePath} alt="...." />

                                                </div>
                                            ) : (<><div>
                                                <img className="img9" src='productImage.png' alt="...." />
                                            </div>
                                            </>)
                                        }
                                    </div>
                                    <div className="about">
                                        <h1 className="title">{items.productName} X {items.containLiquid}</h1>
                                        <h3 className="col productDis">{items.productDescription}</h3>
                                        <h3 className="subtitle">{items.brandName}</h3>
                                        <h3 className="subtitle"></h3>
                                    </div>
                                    <div className="counter">
                                        <div className="btnCart" onClick={() => decreaseCount(index)} >-</div>
                                        <div className="count">{items.productQuantity}</div>
                                        <div className="btnCart" onClick={() => increaseCount(index)} >+</div>
                                    </div>
                                    <div className="prices">
                                        <div className="amount">
                                            <span className="material-symbols-outlined">
                                                currency_rupee
                                            </span> {items.natePriceWithDiscount.toFixed(2)}
                                        </div>
                                        {/* <div className="save"><u>Save for later</u></div> */}
                                        <div className="remove" onClick={() => removeCart(items.orderId)}><u >Remove</u></div>
                                    </div>


                                </div >
                            </a>


                        ))
                    }

                    <a class="list-group-item list-group-item-action">
                        {
                            cart.length == 0 ? (
                                <>
                                    {/* <p>No items in the cart.</p> */}
                                </>

                            ) : (
                                <>
                                    <div className="row">
                                        <div className="col-12">

                                    <hr className="hr"></hr>
                                        </div>
                                    </div>
                                    {/* <div className="bg-success float-end mr-5"> */}
                                    <div className="row">

                                        <div className="col-8">
                                            <p></p>
                                        </div>
                                        <div className="col-1 float-end">
                                            <p>CGST  -</p>
                                        </div>
                                        <div className="col-3">
                                            <div className="total-amount">
                                                {/* CGST :- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                                                <span style={{fontSize:16}} className="material-symbols-outlined">
                                                currency_rupee
                                            </span>

                                                {(totalPrice * ((cart[0].gst / 2) / 100)).toFixed(2)} &nbsp; /-
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-8">
                                            <p></p>
                                        </div>
                                        <div className="col-1">
                                            <p>IGST  -</p>
                                        </div>
                                        <div className="col-3">
                                            <div className="total-amount">
                                                {/* CGST :- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                                                <span style={{fontSize:16}} className="material-symbols-outlined">
                                                currency_rupee
                                            </span>

                                                {(totalPrice * ((cart[0].gst / 2) / 100)).toFixed(2)} &nbsp; /-
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-7">
                                            <p></p>
                                        </div>
                                        <div className="col-2 float-end">
                                            <p> Delivery Charge  -</p>
                                        </div>
                                        <div className="col-3">
                                            <div className="total-amount">
                                                {/* CGST :- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                                                <span style={{fontSize:16}} className="material-symbols-outlined">
                                                currency_rupee
                                            </span>
                                                {deliveryCharge} &nbsp; /-
                                                {/* {(totalPrice * ((cart[0].gst / 2) / 100)).toFixed(0)} &nbsp; /- */}
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-6">
                                            <p></p>
                                        </div>
                                        <div className="col-6 float-end">
                                        <hr className="hr"></hr>
                                        </div>
                                        

                                    </div>
                                        
                                    <div className="row">

                                        <div className="col-7">
                                            <p></p>
                                        </div>
                                        <div className="col-2 float-end">
                                            <p> <b>Total Price  -</b></p>
                                        </div>
                                        <div className="col-3">
                                            <div className="total-amount">
                                               
                                                <span style={{fontSize:16}} className="material-symbols-outlined">
                                                currency_rupee
                                            </span>
                                                
                                                {(totalPrice * ((cart[0].gst) / 100)+totalPrice+deliveryCharge).toFixed(0)} &nbsp; /-
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-7">
                                            <p></p>
                                        </div>
                                        <div className="col-2 float-end">
                                            {/* <p> Delivery Charge  -</p> */}
                                        </div>
                                        <div className="col-3">
                                            <div className="total-amount">
                                            {/* <Link onClick={() => checkout(cart)}><div className='col-4 text-decoration-none cart-button1-category'>Buy now</div></Link> */}

                                            <button className="button" onClick={() => checkout(cart)}>Checkout</button>
                                            </div>

                                        </div>

                                    </div>

                                    {/* </div> */}


                                    {/* <div className="checkout">
                                        <div className="total">
                                            <div>
                                                <div className="Subtotal">Sub-Total</div>
                                                <div className="items">{cart.length}</div>
                                                
                                            </div>
                                            <div className="total-amount"><span className="material-symbols-outlined">
                                                currency_rupee
                                            </span>

                                                {totalPrice.toFixed(2)}
                                            </div>
                                        </div >
                                        <button className="button" onClick={() => checkout(cart)}>Checkout</button>
                                    </div > */}

                                </>
                            )
                        }
                    </a>

                </div>


            </>




            {/* <div className="body1">
                <div className="Cart-Container">
                    <div className="Header">
                        <h3 className="Heading">Shopping Cart</h3>
                        <h5 className="Action">Remove all</h5>
                    </div>
                    {
                        cart.map(items => (


                            <div className="Cart-Items">
                                <div className="image-box">
                                {
                                        (items.imagePath != "No") ? (
                                            <div>
                                                <img className="" src={items.imagePath} style={{ height: "120px" }}  alt="...." />

                                            </div>
                                        ) : (<><div>
                                            <img className="" src='productImage.png' alt="...."style={{ height: "120px" }}  />
                                            </div>
                                        </>)
                                    }
                                    </div>
                                <div className="about">
                                    <h1 className="title">{items.productName}</h1>
                                    <h3 className="subtitle">{items.productDescription}</h3>
                                    <h3 className="subtitle">{items.containLiquid}</h3>
                                   </div>
                                <div className="counter">
                                    <div className="btnCart" onClick={increaseCount}>+</div>
                                    <div className="count">{count}</div>
                                    <div className="btnCart" onClick={decreaseCount}>-</div>
                                </div>
                                <div className="prices">
                                    <div className="amount">
                                        <span className="material-symbols-outlined">
                                            currency_rupee
                                        </span> {items.natePriceWithDiscount}</div>
                                    <div className="save"><u>Save for later</u></div>
                                    <div className="remove" ><u onClick={() => removeCart(items.orderId)}>Remove</u></div>
                                </div>


                            </div >
                        )
                        )
                    }
                    {
                        cart.length ===0 ? (
                            <>
                                 <p>No items in the cart.</p>
                            </>

                        ) : (
                            <>
                                <hr></hr>
                                <div className="checkout">
                                    <div className="total">
                                        <div>
                                            <div className="Subtotal">Sub-Total</div>
                                            <div className="items">{cart.length}</div>
                                        </div>
                                        <div className="total-amount">Rs {totalPrice.toFixed(2)}</div>
                                    </div >
                                    <button className="button">Checkout</button>
                                </div >

                            </>
                        )
                    }

                </div >
            </div > */}



            {/* <div className="shopping-cart">

                <div className="title">
                    Shopping Bag
                </div>
                {
                    cart.map(items => (
                        <div className="item">
                            <div className="buttons">
                                <span className="delete-btn"></span>
                                <span className="like-btn"></span>
                            </div>

                            <div className="image">
                                <img src="https://eqipped.com/image/be70729b-b070-4033-a7cb-9376f7d4267etest tube.jpg" alt="" />
                            </div>

                            <div className="description">
                                <span>Common Projects</span>
                                <span>Bball High</span>
                                <span>White</span>
                            </div>

                            <div className="quantity">
                                <button className="plus-btn" type="button" name="button">
                                    +

                                </button>
                                <input type="text" name="name" value="1" />
                                <button className="minus-btn" type="button" name="button">
                                    -

                                </button>
                            </div>

                            <div className="total-price">$549</div>
                        </div>

                    )

                    )
                }




                <div className="item">
                    <div className="buttons">
                        <span className="delete-btn"></span>
                        <span className="like-btn"></span>
                    </div>

                    <div className="image">
                        <img src="https://eqipped.com/image/be70729b-b070-4033-a7cb-9376f7d4267etest tube.jpg" alt="" />
                    </div>

                    <div className="description">
                        <span>Maison Margiela</span>
                        <span>Future Sneakers</span>
                        <span>White</span>
                    </div>

                    <div className="quantity">
                        <button className="plus-btn" type="button" name="button">
                            <img src="plus.svg" alt="" />
                        </button>
                        <input type="text" name="name" value="1" />
                        <button className="minus-btn" type="button" name="button">
                            <img src="minus.svg" alt="" />
                        </button>
                    </div>

                    <div className="total-price">$870</div>
                </div>


                <div className="item">
                    <div className="buttons">
                        <span className="delete-btn"></span>
                        <span className="like-btn"></span>
                    </div>

                    <div className="image">
                        <img src="https://eqipped.com/image/be70729b-b070-4033-a7cb-9376f7d4267etest tube.jpg" alt="" />
                    </div>

                    <div className="description">
                        <span>Our Legacy</span>
                        <span>Brushed Scarf</span>
                        <span>Brown</span>
                    </div>

                    <div className="quantity">
                        <button className="plus-btn" type="button" name="button">
                            <img src="plus.svg" alt="" />
                        </button>
                        <input type="text" name="name" value="1" />
                        <button className="minus-btn" type="button" name="button">
                            <img src="minus.svg" alt="" />
                        </button>
                    </div>

                    <div className="total-price">$349</div>
                </div>
            </div> */}
            {/* <div className="col">


                <div className="row row-cols-1 row-cols-md-3 g-4">

                    <div className="col equimementscard">

                        


                        <div className='card-body'>
                            <p className='productImageCart'>This is leldd</p>
                            <p className="equimementscardprice">Rs 22</p>
                            <p className="fakeprice">Rs 84</p>
                            <p className="smallp" style={{ paddingLeft: 70, color: "green" }}>0 % off</p>
                            <p>This is product Description</p>
                            <Link to={'/cart'}><button>Remove from Cart</button></Link>
                        </div>
                    </div>


                </div>
            </div>
            <div className="col">
                hi
            </div> */}


            {/* <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">

                                    <div className="row">
2
                                        <div className="col-lg-7">
                                            <h5 className="mb-3"><a href="#!" className="text-body"><i
                                                className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                                            <hr />

                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have 4 items in your cart</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                                                        className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                                                </div>
                                            </div>

                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                                    className="img-fluid rounded-3" alt="Shopping item" style={{width: 65}} />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>Iphone 11 pro</h5>
                                                                <p className="small mb-0">256GB, Navy Blue</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{width: 50}}>
                                                                <h5 className="fw-normal mb-0">2</h5>
                                                            </div>
                                                            <div style={{width: 80}}>
                                                                <h5 className="mb-0">$900</h5>
                                                            </div>
                                                            <a href="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                                                    className="img-fluid rounded-3" alt="Shopping item" style={{width: 65}} />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>Samsung galaxy Note 10 </h5>
                                                                <p className="small mb-0">256GB, Navy Blue</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{width: 50}}>
                                                                <h5 className="fw-normal mb-0">2</h5>
                                                            </div>80
                                                            <div style={{width: 80}}>
                                                                <h5 className="mb-0">$900</h5>
                                                            </div>
                                                            <a href="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                                                    className="img-fluid rounded-3" alt="Shopping item" style={{width: 65}} />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>Canon EOS M50</h5>
                                                                <p className="small mb-0">Onyx Black</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{width: 50}}>
                                                                <h5 className="fw-normal mb-0">1</h5>
                                                            </div>
                                                            <div style={{width: 80}}>
                                                                <h5 className="mb-0">$1199</h5>
                                                            </div>
                                                            <a href="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3 mb-lg-0">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                                                    className="img-fluid rounded-3" alt="Shopping item" style={{width: 65}} />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>MacBook Pro</h5>
                                                                <p className="small mb-0">1TB, Graphite</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{width: 50}}>
                                                                <h5 className="fw-normal mb-0">1</h5>
                                                            </div>
                                                            <div style={{width: 80}}>
                                                                <h5 className="mb-0">$1799</h5>
                                                            </div>
                                                            <a href="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-5">

                                            <div className="card bg-primary text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Card details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                            className="img-fluid rounded-3" style={{width: 65}} alt="Avatar" />
                                                    </div>

                                                    <p className="small mb-2">Card type</p>
                                                    <a href="#!" type="submit" className="text-white"><i
                                                        className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" className="text-white"><i
                                                        className="fab fa-cc-visa fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" className="text-white"><i
                                                        className="fab fa-cc-amex fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                                                    <form className="mt-4">
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                                                placeholder="Cardholder's Name" />
                                                            <label className="form-label" for="typeName">Cardholder's Name</label>
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                                                placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                                                            <label className="form-label" for="typeText">Card Number</label>
                                                        </div>

                                                        <div className="row mb-4">
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="text" id="typeExp" className="form-control form-control-lg"
                                                                        placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                                                                    <label className="form-label" for="typeExp">Expiration</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="password" id="typeText" className="form-control form-control-lg"
                                                                        placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                                                    <label className="form-label" for="typeText">Cvv</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>

                                                    <hr className="my-4" />

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Subtotal</p>
                                                        <p className="mb-2">$4798.00</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Shipping</p>
                                                        <p className="mb-2">$20.00</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">$4818.00</p>
                                                    </div>

                                                    <button type="button" className="btn btn-info btn-block btn-lg">
                                                        <div className="d-flex justify-content-between">
                                                            <span>$4818.00</span>
                                                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </button>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


        </>
    )
}

export default Cart
