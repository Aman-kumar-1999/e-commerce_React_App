import React, { useState, useEffect } from 'react'
import '../css/DashboardGraph.css'
import baseUrl from '../../helper/helper';
import { Link } from 'react-router-dom'
import axios from 'axios';
function Prcards() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`${baseUrl}/product/`);


            const jsonProduct = await response.data;
            // listproduct = jsonproduct;
            setProduct(jsonProduct);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    console.log(product)
    var date;
    return (
        <div>
            <>
                <div className='container row'>
                    <div className="orcard2 col">
                        <div className="card-body">
                            <h4 className="card-title">Recent Products</h4>
                            <p>{product.length} %</p>
                            <h5>{product.length}</h5>
                        </div>
                    </div>
                    <div className="orcard2 col">
                        <div className="card-body">
                            <h4 className="card-title">Listed Products</h4>
                            <p>+2.34%</p>
                            <h5>34</h5>
                        </div>
                    </div>
                    <div className="orcard2 col">
                        <div className="card-body">
                            <h4 className="card-title">Unlisted Products</h4>
                            <p>+3.34%</p>
                            <h5>22</h5>
                        </div>
                    </div>
                    <Link to={'/addproduct'} className="addproduct col">
                        <div>
                            <div className="card-body">
                                <i className="ri-add-line"></i>
                                <h4 className="card-title"> Add Product</h4>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/addproductinbulk'} className="addproduct col">

                        <span className="material-symbols-outlined addIcon" style={{ fontSize: 60 }}>
                            add_circle
                        </span>
                        <p className="card-title addProducth4">Add bulk </p>

                    </Link>
                </div>
                <div className=' longdiv1'>
                    <h5>All Products</h5>
                    <select className="form" id="floatingSelect" aria-label="Floating label select example">
                        <option >All</option>
                        <option >Today</option>
                        <option className='a1'>Weekly</option>
                        <option>Monthly</option>

                    </select>

                </div>

                <div className="col-md-12 container table-responsive">

                    <table WIDTH="1300" HEIGHT="10">
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
                                <>
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
                                        <td HEIGHT='10'>
                                            {/* <Link id="eml" to={'/editProduct/'+
                                            item.productId+'/'+
                                            item.productName+'/'+
                                            item.brandName+'/'+
                                            item.productDescription+'/'+
                                            item.category+'/'+
                                            item.individualProductPrice+'/'+
                                            item.status+'/'+
                                            item.productQuantity+'/'+
                                            item.discountPercentage
                                            } 
                                            className="nav-link inactive number" 
                                            aria-current="page" >
                                                <span className="material-symbols-outlined">
                                                    edit</span>&nbsp;Edit&nbsp;&nbsp;
                                                    </Link> */}

                                            <Link id="eml" to={'/editProduct/'+item.productId} className="nav-link inactive number" 
                                            aria-current="page" >
                                                <span className="material-symbols-outlined">
                                                    edit</span>&nbsp;Edit&nbsp;&nbsp;
                                                    </Link>

                                        </td>

                                    </tr>
                                </>

                            ))}
                        </tbody>
                    </table>
                </div>

                {/* <div className='largediv1'>
                    <nav className='navdiv'>
                        <li>No.</li>
                        <li>Product ID</li>
                        <li>Date</li>
                        <li>Vendor Name</li>
                        <li>Product Type</li>
                        <li>Category</li>
                        <li>Quantity</li>
                        <li>Price</li>
                        <li>Total Price</li>
                        <li>Status</li>
                        <li>Action</li>
                    </nav>
                </div> */}
            </>
        </div>
    )
}

export default Prcards
