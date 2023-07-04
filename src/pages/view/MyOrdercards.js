import React, { useEffect, useState } from 'react'
import baseUrl from '../../helper/helper'
import '../css/MyOrders.css'


function MyOrdercards() {

    const [myOrders, setMyOrders] = useState([]);

    var userData = JSON.parse(localStorage.getItem('userData'));




    useEffect(() => {
        fetchMyOrder();
    }, [])


    const fetchMyOrder = async () => {
        try {
            const response = await fetch(`${baseUrl}/order/emailId/${userData.email}`);


            const jsonproduct = await response.json();
            // listproduct = jsonproduct;
            setMyOrders(jsonproduct);
            console.log("MyOrder : " + JSON.stringify(myOrders));
        } catch (error) {
            console.log('Error:', error);
        }

    }

    var date;

    return (
        <div>

            <div class="container mt-5">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        <div class="rounded">
                            <h4>Order Details</h4>
                            <div class="table-responsive table-borderless">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="text-center">
                                                <div class="toggle-btn">
                                                    <div class="inner-circle">
                                                        Image
                                                    </div>
                                                </div>
                                            </th>
                                            <th>Order Id</th>
                                            <th>Product Name</th>
                                            <th>Brand Name</th>
                                            <th>status</th>
                                            <th>Total Price</th>
                                            <th>Created</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-body">
                                        {
                                            myOrders.length && myOrders.map(item =>
                                                <>
                                                    <tr class="cell-1">

                                                        <td class="text-center">
                                                            <div class="toggle-btn">
                                                                <div class="inner-circle">
                                                                    {
                                                                        item.imagePath == 'No' ? (<>
                                                                            <img style={{ width: '100px', height: '100px' }} src='https://eqipped.com/productImage.png' alt='...' />
                                                                        </>) : (<>
                                                                            <img style={{ width: '100px', height: '100px' }} src={item.imagePath} alt='...' />
                                                                        </>)
                                                                    }

                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{item.orderId}</td>
                                                        <td>{item.productName}</td>
                                                        <td>{item.brandName}</td>

                                                        <td><span class="badge badge-success">{item.status}</span></td>
                                                        <td>{item.natePriceWithDiscount}</td>
                                                        <td>{date = new Date(item.date).toDateString()}</td>

                                                    </tr>
                                                </>
                                            )
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <h1 className='bigh1'>MY ORDERS</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                   
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className='order'>Order Id:</h5>
                            <h5 className='product'>Product Id:</h5>
                            <h5 className='date'>Date:</h5>
                            <h4 className='status'>Status</h4>
                            <button className='btn'>VIEW</button>
                            </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default MyOrdercards
