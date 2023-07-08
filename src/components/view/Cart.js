import React, { useEffect, useState } from "react"
import '../css/Cart.css'
import baseUrl from '../../helper/helper';
import { Link, useNavigate } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2';
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
            // startPayment();
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
                cart2.totalProductPrice = (totalPrice + (18 / 100) * totalPrice + deliveryCharge).toFixed(0)

                const data = callCheckoutApi(cart2);
                navigate('/checkoutsuccess');
                toast.success('Order has been Created')

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
        setFinalTotal((totalPrice * ((cart[0].gst) / 100) + totalPrice + deliveryCharge).toFixed(0));
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
            body: JSON.stringify({ 'amount': (totalPrice + (18 / 100) * totalPrice + deliveryCharge).toFixed(0) })
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

                <div class="container mt-2 text-center border border-info rounded-3">
                    {/* <Scrollbars style={{ height: 400 }}> */}
                    <div className="Header sticky-top mb-2">
                        <h3 className="Heading">Shopping Cart</h3>
                        {
                            (cart.length === 0) ? (
                                <>

                                </>
                            ) : (
                                <>

                                </>
                            )
                        }

                    </div>
                    {
                        cart.map((items, index) => (
                            <>
                                <div className="row mb-2">
                                    <div className="col m-2">
                                        <div className="">
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

                                    </div>
                                    <div className="col ml-5">
                                        <h4 className="title float-start">{items.productName} ({items.containLiquid})</h4>
                                        <p className=" productDis float-start">{items.productDescription}</p>
                                        <p className="float-start">{items.brandName}</p>
                                        {/* <p className=""></p> */}

                                    </div>
                                    <div className="col">


                                        <div className="counter position-relative mt-5 start-50 translate-middle ">
                                            <div className="btnCart mt-5 p-3" onClick={() => decreaseCount(index)} >-</div>
                                            <div className="count mt-5 p-3">{items.productQuantity}</div>
                                            <div className="btnCart mt-5 p-3" onClick={() => increaseCount(index)} >+</div>
                                        </div>


                                    </div><br/>
                                    <div className="col mr-5">
                                        <div className="amount">
                                            <span className="material-symbols-outlined">
                                                currency_rupee
                                            </span> {items.natePriceWithDiscount.toFixed(2)}
                                        </div>

                                        <div className="remove" onClick={() => removeCart(items.orderId)}><u >Remove</u></div>

                                    </div>

                                </div>
                            </>

                            // <a class="list-group-item list-group-item-action rounded cartBody">
                            //     <div className="Cart-Items">
                            //         <div className="col-2 image-box">
                            //             {
                            //                 (items.imagePath != "No") ? (
                            //                     <div>
                            //                         <img className="img9" src={items.imagePath} alt="...." />

                            //                     </div>
                            //                 ) : (<><div>
                            //                     <img className="img9" src='productImage.png' alt="...." />
                            //                 </div>
                            //                 </>)
                            //             }
                            //         </div>
                            //         <div className=" about">
                            //             <h1 className="title">{items.productName} X {items.containLiquid}</h1>
                            //             <h3 className="col productDis">{items.productDescription}</h3>
                            //             <h3 className="subtitle">{items.brandName}</h3>
                            //             <h3 className="subtitle"></h3>
                            //         </div>
                            //         <div className=" counter">
                            //             <div className="btnCart" onClick={() => decreaseCount(index)} >-</div>
                            //             <div className="count">{items.productQuantity}</div>
                            //             <div className="btnCart" onClick={() => increaseCount(index)} >+</div>
                            //         </div>
                            //         <div className="prices">
                            //             <div className="amount">
                            //                 <span className="material-symbols-outlined">
                            //                     currency_rupee
                            //                 </span> {items.natePriceWithDiscount.toFixed(2)}
                            //             </div>

                            //             <div className="remove" onClick={() => removeCart(items.orderId)}><u >Remove</u></div>
                            //         </div>


                            //     </div >
                            // </a>


                        ))
                    }

                    <a class="list-group-item list-group-item-action">
                        {
                            cart.length == 0 ? (
                                <>
                                   
                                </>

                            ) : (
                                <>
                                    <div className="row">
                                        <div className="col-12">

                                            <hr className="hr"></hr>
                                        </div>
                                    </div>
                                    
                                    <div className="row">

                                        <div className="col-8">
                                            <p></p>
                                        </div>
                                        <div className="col-1 float-end">
                                            <p>CGST  -</p>
                                        </div>
                                        <div className="col-3">
                                            <div className="total-amount">
                                                
                                                <span style={{ fontSize: 16 }} className="material-symbols-outlined">
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
                                               
                                                <span style={{ fontSize: 16 }} className="material-symbols-outlined">
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
                                                
                                                <span style={{ fontSize: 16 }} className="material-symbols-outlined">
                                                    currency_rupee
                                                </span>
                                                {deliveryCharge} &nbsp; /-
                                               
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

                                                <span style={{ fontSize: 16 }} className="material-symbols-outlined">
                                                    currency_rupee
                                                </span>

                                                {(totalPrice * ((cart[0].gst) / 100) + totalPrice + deliveryCharge).toFixed(0)} &nbsp; /-
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-7">
                                            <p></p>
                                        </div>
                                        <div className="col-2 float-end">
                                           
                                        </div>
                                        <div className="col-3">
                                            <div className="total-amount">
                                               
                                                <button className="button" onClick={() => checkout(cart)}>Checkout</button>
                                            </div>

                                        </div>

                                    </div>

                                    

                                </>
                            )
                        }
                    </a>
                    {/* </Scrollbars> */}

                </div>


            </>







        </>
    )
}

export default Cart
