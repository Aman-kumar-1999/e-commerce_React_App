import React, { useState, useEffect } from 'react'
import '../css/DashboardGraph.css'
import baseUrl from '../../helper/helper';
import { Link, json } from 'react-router-dom'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactPaginate from 'react-paginate';
import { Pagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Edit } from '@mui/icons-material';



function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

function VendorProduct() {





    const [product, setProduct] = useState([]);
    const [searchTermProduct, setSearchTermProduct] = useState(localStorage.getItem('productVendorSearch'));
    const [countData, setCountData] = useState(0);
    const [loading, setLoading] = useState(false);
    const [listedProduct, setListedProduct] = useState(0);
    const [unListedProduct, setUnListedProduct] = useState(0);
    const userData = JSON.parse(localStorage.getItem('userData'))

    // --------------------------------------------------------------------------------------






    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);

    const handleChangePage = async (event, newPage) => {
        setPage(newPage);
        setLoading(true)
        let tempVendorId;
        if (userData.subVendorId === 'No') {
            tempVendorId = userData.id;
        }
        else {
            tempVendorId = userData.subVendorId;
        }


        let dataLimit = 100;

        let pageNo = page;
        // Math.ceil(product.length / dataLimit) + 1
        console.log("Page No : " + pageNo)


        try {
            if (searchTermProduct != "") {
                // const response = await fetch(`http://localhost:5002/product/vendorIdProductNameOrBrandName/${tempVendorId}/${searchTermProduct}?pageNo=${pageNo}&dataLimit=${dataLimit}`);
                const response = await fetch(`${baseUrl}/product/vendorIdProductNameOrBrandName/${tempVendorId}/${searchTermProduct}?pageNo=${pageNo}&dataLimit=${dataLimit}`);

                let jsonproduct = await response.json();

                let apidata = [...product, ...jsonproduct];
                console.log("This is under if")

                // listproduct = jsonproduct;
                setProduct(apidata);
                setLoading(false)
            } else {

                // const response = await fetch(`http://localhost:5002/product/vendorIdProductNameOrBrandName/${tempVendorId}/Test${userData.id}?pageNo=${pageNo}&dataLimit=${dataLimit}`);
                const response = await fetch(`${baseUrl}/product/vendorId/${tempVendorId}?pageNo=${pageNo}&dataLimit=${dataLimit}`);

                let jsonproduct = await response.json();

                let apidata = [...product, ...jsonproduct];

                // listproduct = jsonproduct;
                console.log("This is under else")
                setProduct(apidata);
                setLoading(false)
            }



        } catch (error) {
            setLoading(false)
            console.log('Error:', error);
        }

    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const onSearchHandle = async (e) => {
        setLoading(true)
        let tempVendorId;
        if (userData.subVendorId === 'No') {
            tempVendorId = userData.id;
        }
        else {
            tempVendorId = userData.subVendorId;
        }


        let dataLimit = 100;

        let pageNo = page;
        // Math.ceil(product.length / dataLimit) + 1
        console.log("Page No : " + pageNo)

        try {
            // const response = await fetch(`http://localhost:5002/product/vendorIdProductNameOrBrandName/${tempVendorId}/${e}?pageNo=${pageNo}&dataLimit=${dataLimit}`);
            const response = await fetch(`${baseUrl}/product/vendorIdProductNameOrBrandName/${tempVendorId}/${e}?pageNo=${pageNo}&dataLimit=${dataLimit}`);


            let jsonproduct = await response.json();
            const arr = [];
            for (let s of jsonproduct) {
                arr.push(JSON.parse(JSON.stringify(s)));
            }

            // let apidata = [...product, ...jsonproduct];

            // listproduct = jsonproduct;

            setProduct(arr);


            console.log(" Product  : " + jsonproduct.type);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('Error:', error);
        }

    }




    // --------------------------------------------------------------------------------------


    const handleSearchProductName = (event) => {

         // setSearchTermProduct(event.target.value);
        localStorage.setItem('productVendorSearch',event.target.value)
        setSearchTermProduct(localStorage.getItem('productVendorSearch'));
    // onSearchHandle(localStorage.getItem('productVendorSearch'));
    
        onSearchHandle(localStorage.getItem('productVendorSearch'));
        if (event.target.value == "") {
            //setSearchTermProduct();
            setProduct([]);
            localStorage.productVendorSearch.clear();
            //alert("Product : "+product.length)
            fetchProduct();
            //window.location.reload();
        }

    };

    // const filteredProductName = product.filter((item) =>
    //     item.productName.toLowerCase().indexOf(searchTermProduct.toLowerCase()) > -1,
    // );

    useEffect(() => {
        countProduct();
        // if(searchTermProduct !== '')
        // {
        //     onSearchHandle(searchTermProduct);
        // }else{

        //     fetchProduct();
        // }
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        setLoading(true)
        let tempVendorId;
        if (userData.subVendorId === 'No') {
            tempVendorId = userData.id;
        }
        else {
            tempVendorId = userData.subVendorId;
        }


        let dataLimit = 100;

        let pageNo = page;
        // Math.ceil(product.length / dataLimit) + 1
        console.log("Page No : " + pageNo)


        try {

            if(searchTermProduct){
                const response = await fetch(`${baseUrl}/product/vendorIdProductNameOrBrandName/${tempVendorId}/${searchTermProduct}?pageNo=${pageNo}&dataLimit=${dataLimit}`);


            let jsonproduct = await response.json();
            const arr = [];
            for (let s of jsonproduct) {
                arr.push(JSON.parse(JSON.stringify(s)));
            }

            // let apidata = [...product, ...jsonproduct];

            // listproduct = jsonproduct;

            setProduct(arr);


            console.log(" Product  : " + jsonproduct.type);
            setLoading(false)
            }else{

                // const response = await fetch(`http://localhost:5002/product/vendorIdProductNameOrBrandName/${tempVendorId}/${searchTermProduct}?pageNo=${pageNo}&dataLimit=${dataLimit}`);
                const response = await fetch(`${baseUrl}/product/vendorId/${tempVendorId}?pageNo=${pageNo}&dataLimit=${dataLimit}`);
    
    
    
                let jsonproduct = await response.json();
    
                //let apidata = [...product, ...jsonproduct];
    
                // listproduct = jsonproduct;
                setProduct(jsonproduct);
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            console.log('Error:', error);
        }

    };

    const countProduct = async () => {
        let tempVendorId;
        if (userData.subVendorId === 'No') {
            tempVendorId = userData.id;
        }
        else {
            tempVendorId = userData.subVendorId;
        }


        try {

            const response = await fetch(`${baseUrl}/product/countAllVendorId/${tempVendorId}`);

            const jsonproduct = await response.json();


            // listproduct = jsonproduct;
            setCountData(jsonproduct);
            console.log("Count : " + jsonproduct)
            console.log("Json : " + countData);
        } catch (error) {
            console.log('Error:', error);
        }

    };

    console.log(product)
    var date;

    const columns = [

        { id: 'index', label: 'No.', align: 'center', minWidth: 170 },

        {
            id: 'action',
            label: 'Action',
            minWidth: 10,
            align: 'center',
            // format: (value) => value.toFixed(2),
        },
        { id: 'productId', label: 'Product Id', align: 'center', minWidth: 100 },

        {
            id: 'vendorName',
            label: 'Vendor Name',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'brandName',
            label: 'Brand Name',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'productName',
            label: 'Product Name',
            minWidth: 270,
            align: 'center',
            // format: (value) => value.toFixed(2),
        },
        {
            id: 'category',
            label: 'Product Type',
            minWidth: 170,
            align: 'center',
            // format: (value) => value.toFixed(2),
        },

        {
            id: `date`,
            label: 'Date',
            minWidth: 170,
            align: 'center',
            // date : new Date(value).toDateString(),
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'productQuantity',
            label: 'Quantity',
            minWidth: 170,
            align: 'center',
            // format: (value) => value.toFixed(2),
        },
        {
            id: 'discountPercentage',
            label: 'Discount ( % )',
            minWidth: 170,
            align: 'center',
            // format: (value) => value.toFixed(2),
        },
        {
            id: 'natePriceWithDiscount',
            label: 'Price ( Rs )',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'totalProductPrice',
            label: 'Total Price ( Rs )',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'status',
            label: 'Status',
            minWidth: 170,
            align: 'center',
            // format: (value) => value.toFixed(2),
        },

    ];


    return (
        <div>
            <>
                <div className='container row'>
                    <div className="orcard2 col">
                        <div className="card-body">
                            <h4 className="card-title">Recent Products</h4>
                            {
                                countData == 0 ?
                                    (
                                        <>
                                            <h5 className='pt-4'>

                                                <img style={{ width: 40, height: 40 }} src='spinner.gif' />

                                            </h5>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <p>{countData}</p>
                                            <h5></h5>
                                        </>
                                    )
                            }


                        </div>
                    </div>
                    <div className="orcard2 col">
                        <div className="card-body">
                            <h4 className="card-title">Listed Products</h4>
                            {
                                countData == 0 ?
                                    (
                                        <>
                                            <h5 className='pt-4'>

                                                <img style={{ width: 40, height: 40 }} src='spinner.gif' />

                                            </h5>
                                        </>
                                    ) : (
                                        <>
                                            <p>{countData} </p>
                                            <h5></h5>
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

                    {(userData.subVendorId != 'No') ?
                        (<>
                            <Link to={'/products'} className="sellerproduct">
                                <div>
                                    <div className="card-body">
                                        <i style={{ marginRight: "26px" }} className="ri-add-line"></i>
                                        <h4 className="card-title">Seller Product</h4>
                                    </div>
                                </div>
                            </Link>
                        </>)
                        : (<>
                            <Link to={'/addproduct'} className="addproduct col ">
                                <div>
                                    <div className="card-body">
                                        <i style={{ marginRight: "26px" }} className="ri-add-line"></i>
                                        <h4 className="card-title"> Add Product</h4>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/products'} className="sellerproduct">
                                <div>
                                    <div className="card-body">
                                        <i style={{ marginRight: "26px" }} className="ri-add-line"></i>
                                        <h4 className="card-title">Seller Product</h4>
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
                        </>)
                    }


                    {/* <Link to={'/addproductinbulk'} className="addproduct col">

                        <span className="material-symbols-outlined addIcon" style={{ fontSize: 60 }}>
                            add_circle
                        </span>
                        <p className="card-title addProducth4">Add bulk </p>

                    </Link> */}
                </div>
                <div className=' longdiv1'>
                    <h5>Your Products</h5>
                    {/* <h5 className='float-end mr-4' style={{ fontFamily: "cursive", color: "#ffff" }}>{product.length}</h5> */}
                    {/* <select className="form" id="floatingSelect" aria-label="Floating label select example">
                        <option >All</option>
                        <option >Today</option>
                        <option className='a1'>Weekly</option>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                        <option>Monthly</option>

                    </select> */}

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

                <Paper style={{ background: 'azure' }} sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead className='zIndexTablecell'>
                                <TableRow >
                                    {columns.map((column) => (
                                        <TableCell
                                            className='bg-dark text-light'
                                            
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loading ? (<>
                                    <div className='text-center loadingProduct'>

                                        <img style={{ width: 50, height: 50 }} src='spinner.gif' />

                                    </div>
                                </>) : (<>
                                    {product
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (<>

                                                            {
                                                                column.id === 'action' ? (<>
                                                                    {((userData.subVendorId != 'No')) ?
                                                                        (<>
                                                                            <TableCell key={column.id} align={column.align}>
                                                                                {/* <Link id="eml" to={'/editSubVendorProduct/' + row.productId} className="nav-link inactive"
                                                                                aria-current="page" >
                                                                                <span className="material-symbols-outlined">
                                                                                    edit</span>&nbsp;Edit&nbsp;&nbsp;
                                                                            </Link> */}
                                                                                <Link className='navAccountResponsive float-end  float-end' to={'/editSubVendorProduct/' + row.productId}>
                                                                                    <span id='logoutIcon' class="material-symbols-outlined">edit</span>&nbsp;<p className='navAccountText'>Edit</p>
                                                                                </Link>
                                                                            </TableCell>
                                                                        </>)
                                                                        : (<>
                                                                            <TableCell key={column.id} align={column.align}>
                                                                                {/* <Link id="eml" to={'/editProduct/' + row.productId} className="nav-link inactive"
                                                                            aria-current="page" >
                                                                                <Edit/> Edit
                                                                           
                                                                        </Link> */}
                                                                                <Link className='navAccountResponsive float-end float-end' to={'/editProduct/' + row.productId}>
                                                                                    <span id='logoutIcon' class="material-symbols-outlined">edit</span>&nbsp;<p className='navAccountText'>Edit</p>
                                                                                </Link>
                                                                            </TableCell>
                                                                        </>)
                                                                    }
                                                                </>) : (<>
                                                                    {column.id === 'index' ? (<>
                                                                        <TableCell key={column.id} align={column.align}>{index + 1}</TableCell>

                                                                    </>) : (<>
                                                                        <TableCell key={column.id} align={column.align}>
                                                                            {column.format && typeof value === 'number'
                                                                                ? column.format(value)
                                                                                : value}

                                                                        </TableCell>
                                                                    </>)}

                                                                </>)
                                                            }
                                                        </>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </>)
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[100]}
                        component="div"
                        count={countData}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>




                {/* <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={10}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    >
                        

                    </ReactPaginate> */}

                {/* <div className="col-md-12 container table-responsive">

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
                                        <td className='ml-1'>{index + 1}</td>
                                        <td>{item.productId}</td>
                                        <td>{date = new Date(item.date).toDateString()}</td>
                                        <td>{item.vendorName}</td>
                                        <td>{item.category}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.productQuantity}</td>
                                        <td>{item.natePriceWithDiscount}</td>
                                        <td>{item.totalProductPrice}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            {(userData.subVendorId != 'No') ?
                                                (<>
                                                    <Link id="eml" to={'/editSubVendorProduct/' + item.productId} className="nav-link inactive number"
                                                        aria-current="page" >
                                                        <span className="material-symbols-outlined">
                                                            edit</span>&nbsp;Edit&nbsp;&nbsp;
                                                    </Link>
                                                </>)
                                                : (<>
                                                    <Link id="eml" to={'/editProduct/' + item.productId} className="nav-link inactive number"
                                                        aria-current="page" >
                                                        <span className="material-symbols-outlined">
                                                            edit</span>&nbsp;Edit&nbsp;&nbsp;
                                                    </Link>
                                                </>)
                                            }


                                        </td>

                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </InfiniteScroll>
                </div> */}




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
