import React, { useState, useEffect } from 'react'
import '../css/DashboardGraph.css'
import baseUrl from '../../helper/helper';
import { Link } from 'react-router-dom'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
function VendorProduct() {


    const [product, setProduct] = useState([]);
    const [searchTermProduct, setSearchTermProduct] = useState("");
    const [temp, setTamp] = useState(true);
    const [listedProduct, setListedProduct] = useState(0);
    const [unListedProduct, setUnListedProduct] = useState(0);
    var userData = JSON.parse(localStorage.getItem('userData'))
    const handleSearchProductName = (event) => {
        setSearchTermProduct(event.target.value);
    };

    const filteredProductName = product.filter((item) =>
        item.productName.toLowerCase().indexOf(searchTermProduct.toLowerCase()) > -1,
    );

    useEffect(() => {

        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        // let dataLimit = 500;

        // let pageNo = Math.ceil(product.length / dataLimit) + 1
        // console.log("Page No : " + pageNo)

        try {
            // const response = await fetch(`http://localhost:5005/product/`);
            const response = await fetch(`${baseUrl}/product/vendorId/${userData.id}`);


            let jsonproduct = await response.json();

            // let apidata = [...product, ...jsonproduct];

            // listproduct = jsonproduct;
            setProduct(jsonproduct);
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
                            {
                                product.length == 0 ?
                                    (
                                        <>
                                            <h5 className='pt-4'>

                                                <img style={{ width: 40, height: 40 }} src='spinner.gif' />

                                            </h5>
                                        </>
                                    ) : (
                                        <>
                                        <p>{product.length} %</p>
                                            <h5>{product.length}</h5>
                                        </>
                                    )
                            }


                        </div>
                    </div>
                    <div className="orcard2 col">
                        <div className="card-body">
                            <h4 className="card-title">Listed Products</h4>
                            {
                                product.length == 0 ?
                                    (
                                        <>
                                            <h5 className='pt-4'>

                                                <img style={{ width: 40, height: 40 }} src='spinner.gif' />

                                            </h5>
                                        </>
                                    ) : (
                                        <>
                                        <p>{product.length} %</p>
                                            <h5>{product.length}</h5>
                                        </>
                                    )
                            }
                        </div>
                    </div>
                    <div className="orcard2 col">
                        <div className="card-body">
                            <h4 className="card-title">Unlisted Products</h4>
                            <p>0 %</p>
                            <h5>0 </h5>
                        </div>
                    </div>
                    <Link to={'/addproduct'} className="addproduct col ">
                        <div>
                            <div className="card-body">
                                <i style={{ marginRight: "26px" }} className="ri-add-line"></i>
                                <h4 className="card-title"> Add Product</h4>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/addproductinbulk'} className="addbulk col-3 ">
                        <div>
                            <div className="card-body">
                                <i style={{ marginRight: "26px" }} className="ri-add-line"></i>
                                <h4 className="card-title"> Add In Bulk</h4>
                            </div>
                        </div>
                    </Link>
                    {/* <Link to={'/addproductinbulk'} className="addproduct col">

                        <span className="material-symbols-outlined addIcon" style={{ fontSize: 60 }}>
                            add_circle
                        </span>
                        <p className="card-title addProducth4">Add bulk </p>

                    </Link> */}
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

                <div className=''><input type="email" class="form-control" id="floatingInputValue"
                    className='sear'
                    size="lg"
                    bordered
                    clearable
                    placeholder="Search Product Name ..."
                    value={searchTermProduct}
                    onChange={handleSearchProductName} />

                </div>
                <div className="col-md-12 container table-responsive">

                    <InfiniteScroll
                        dataLength={product.length}
                        next={fetchProduct}
                        hasMore={true}
                        loader={<div className='text-center loading1'>

                            <img style={{ width: 50, height: 50 }} src='spinner.gif' />

                        </div>}

                    >
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



                                {filteredProductName.map((item, index) => (
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
                                        <td><Link id="eml" to={'/editProduct/' + item.productId} className="nav-link inactive number"
                                            aria-current="page" >
                                            <span className="material-symbols-outlined">
                                                edit</span>&nbsp;Edit&nbsp;&nbsp;
                                        </Link></td>

                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </InfiniteScroll>
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

export default VendorProduct;
