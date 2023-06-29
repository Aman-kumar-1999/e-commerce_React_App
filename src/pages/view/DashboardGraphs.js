import React, { useState, useEffect } from 'react'
import '../css/DashboardGraph.css'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts'
import { PieChart, Pie, Sector, Cell } from 'recharts';
import baseUrl from '../../helper/helper';


const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];
function DashboardGraph() {

    const [order, setOrder] = useState([]);
    // const listproduct = []

    useEffect(() => {
        fetchOrder();
    }, []);

    const fetchOrder = async () => {
        try {
            const response = await fetch(`${baseUrl}/order/`);


            const jsonproduct = await response.json();
            // listproduct = jsonproduct;
            setOrder(jsonproduct);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    // console.log(order)
    // console.log("Listproduct : "+listproduct)
    const [product, setProduct] = useState([]);
    // const listproduct = []

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`${baseUrl}/product/`);


            const jsonproduct = await response.json();
            // listproduct = jsonproduct;
            setProduct(jsonproduct);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    // console.log(product)
    const Array = [
        {
            name: 'Jan',
            price: order.length,
        },
        {
            name: 'Feb',
            price: order.length,
        },
        {
            name: 'Mar',
            price: order.length,
        },
        {
            name: 'Apr',
            price: order.length,
        },
        {
            name: 'May',
            price: order.length,
        },
        {
            name: 'Jun',
            price: order.length,
        },
        {
            name: 'Jul',
            price: order.length,
        },
        {
            name: 'Aug',
            price: order.length,
        },
        {
            name: 'Sep',
            price: order.length,
        }, {
            name: 'Oct',
            price: order.length,
        },
        {
            name: 'Nov',
            price: order.length,
        }
    ];
    var date;
    //     var string_date = '2014-07-21T16:50:34.144Z'
    // var date = new Date(string_date);


    return (
        <div className='container '>
            <div className='graphborder className="col-md-12 container table-responsive"'>

                {/* <div className='row'>
                    <div className='adiv col-2'>
                        <h5>Total Orders</h5>
                        <p>+3.34%</p>
                        <h4>{order.length}</h4>
                    </div>
                    <div className=' adiv2 col-2'>
                        <h5>Earnings</h5>
                        <p>+12.34%</p>
                        <h4>Rs.75000</h4>
                    </div>
                    <div className='adiv3 col-2'>
                        <h5>Revenue</h5>
                        <p>+12.34%</p>
                        <h4>Rs.43000</h4>
                    </div>

                    <div className=' holder col-2'>
                        <li>
                            <a>All</a>
                            <a>1D</a>
                            <a>1M</a>
                            <a>6M</a>
                            <a>1Y</a>
                        </li>
                    </div>
                </div> */}
                <ResponsiveContainer width="85%" aspect={2.5} className='graph'>
                    <BarChart data={Array} width={100} height={400}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="price" fill='#116D6E' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <div className=' longdiv1'>
                <h5>Recent Orders</h5>
                <select className="form" id="floatingSelect" aria-label="Floating label select example">
                    <option >All</option>
                    <option >Today</option>
                    <option className='a1'>Weekly</option>
                    <option>Monthly</option>

                </select>

            </div>


            {/* <div className='longdiv'>
                <h5>Recent Orders</h5>
                <nav>
                    <li>Today</li>
                    <li className='a1'>Weekly</li>
                    <li>Monthly</li>
                </nav>
            </div> */}
            <div className="col-md-12 container table-responsive scrollable-table">

                <table WIDTH="1300" HEIGHT="10">
                    <thead>
                        <tr>
                            <th>No. </th>
                            <th>Product Id</th>
                            <th>Date</th>
                            <th>Customer Email </th>
                            <th>Place</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    <tbody>
                        {order.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.productId}</td>
                                <td>{date = new Date(item.date).toDateString()}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.productName}</td>
                                <td>{item.productQuantity}</td>

                                <td> <span id='productIcon' className="material-symbols-outlined">
                                                    currency_rupee
                                                </span> &nbsp;{item.natePriceWithDiscount}</td>
                                
                                <td>{item.status}</td>
                                <td>{item.action}</td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <div className=' longdiv1'>
                <h5>Recent Product Listed</h5>
                <select className="form" id="floatingSelect" aria-label="Floating label select example">
                    <option >All</option>
                    <option >Today</option>
                    <option className='a1'>Weekly</option>
                    <option>Monthly</option>

                </select>

            </div>


            {/* <div className='longdiv'>
                <h5 className='newh5'>Recent Product Listed</h5>
                <nav>
                    <li>Today</li>
                    <li className='a1'>Weekly</li>
                    <li>Monthly</li>
                </nav>
            </div> */}
            <div className="col-md-12 container table-responsive">

                <table WIDTH="1300" HEIGHT="50">
                    <thead>
                        <tr>
                            <th>No. </th>
                            <th>Product Id</th>
                            <th>Date</th>
                            <th>Vendor Name</th>
                            <th>Product Type</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    <tbody>
                        {product.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.productId}</td>
                                <td>{date = new Date(item.date).toDateString()}</td>
                                <td>{item.vendorName}</td>
                                <td>{item.category}</td>
                                <td>{item.productName}</td>
                                <td>{item.productQuantity}</td>
                                <td>{item.natePriceWithDiscount}</td>
                                <td>{item.totalProductPrice}</td>
                                <td>{item.status}</td>
                                <td>{item.action}</td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

            {/* <div className='largediv'>
                <nav className='newspace'>
                    <li>No.</li>
                    <li>Product ID</li>
                    <li>Date</li>
                    <li>Vendor Name</li>
                    <li>Product Type</li>
                    <li>Quantity</li>
                    <li>Price(each)</li>
                    <li>Total Price</li>
                    <li>Status</li>
                    <li>Action</li>
                </nav>
            </div> */}

            <div className='row' >
                <div className='bigcard col-7'>
                    <h5>Recent Reviews:</h5>
                </div>
                <div className='longcard col-4'>
                    <h5>Sales By Traffic Source</h5>
                    <ResponsiveContainer width="100%" height="70%">
                        <PieChart width={400} height={400}>
                            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#fff" />
                            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="orange" label />
                        </PieChart>
                    </ResponsiveContainer>
                    <nav>
                        <li>Source</li>
                        <li>Orders</li>
                        <li>Amount</li>
                    </nav>
                </div>
            </div>

        </div >
    )
}

export default DashboardGraph