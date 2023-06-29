import React, { useState, useEffect } from 'react'
import baseUrl from '../../helper/helper';
import { Link } from 'react-router-dom'
import '../css/Cards.css'

function Vrcards() {
    const [vendor, setVendor] = useState([]);
    // const listproduct = []

    useEffect(() => {
        fetchVendor();
    }, []);

    const fetchVendor = async () => {
        try {
            const response = await fetch(`${baseUrl}/user/filterUser/64548fe503361d235e13f849`);


            const jsonproduct = await response.json();
            // listproduct = jsonproduct;
            setVendor(jsonproduct);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    console.log(vendor)
    var verified = 0;
    var isNotVerivied = 0;
    vendor.map((items) => {

        if (items.isverified == 'No') {
            isNotVerivied = isNotVerivied + 1;
        } else if (items.isverified == 'Yes') {
            verified = verified + 1;
        }
    }
    );
    var date;
    return (

        <>
            <div className='container row'>
                <div className="orcard1 col">
                    <div className="card-body">
                        <h4 className="card-title">Recent Vendors</h4>
                        <p>{vendor.length} %</p>
                        <h5>{vendor.length}</h5>
                    </div>
                </div>
                <div className="orcard2 col">
                    <div className="card-body">
                        <h4 className="card-title">Verified Vendors</h4>
                        <p>{((verified / vendor.length)*100).toFixed(2)} %</p>
                        <h5>{verified}</h5>
                    </div>
                </div>
                <div className="orcard2 col">
                    <div className="card-body">
                        <h4 className="card-title">Unverified Vendors</h4>
                        <p>{((isNotVerivied / vendor.length)*100).toFixed(2)} %</p>
                        <h5>{isNotVerivied}</h5>
                    </div>
                </div>
                <Link to={'/addvendor'} className="addproduct col"><div>
                    <div className="card-body">
                        <i className="ri-add-line"></i>
                        <h4 className="card-title"> Add Vendor</h4>
                    </div>
                </div>
                </Link>
            </div>
            <div className=' longdiv1'>
                <h5>All Vendors</h5>
                <select className="form" id="floatingSelect" aria-label="Floating label select example">
                    <option >All</option>
                    <option >Today</option>
                    <option className='a1'>Weekly</option>
                    <option>Monthly</option>
                </select>
            </div>
            <div className="col-md-12 container table-responsive">

                <table WIDTH="1300" HEIGHT="50">
                    <thead>
                        <tr>
                            <th>No.</th>
                            {/* <th>Product ID</th> */}
                            <th>Date</th>
                            <th>Vendor Name</th>
                            <th>Place</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Documents-1</th>
                            {/* <th>Documents-2</th> */}
                            {/* <th>Status</th>
                <li>Action</li> */}
                        </tr>
                    </thead>


                    <tbody>
                        {vendor.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                {/* <td>{item.productId}</td> */}
                                <td>{date = new Date(item.date).toDateString()}</td>
                                <td>{item.firstName} {item.lastName}</td>
                                <td>{item.city}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.document}</td>
                                {/* <td>{item.status}</td>
                                <td>{item.action}</td> */}

                            </tr>

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
                    <li>Place</li>
                    <li>Contact</li>
                    <li>Email</li>
                    <li>Documents-1</li>
                    <li>Documents-2</li>
                    <li>Status</li>
                <li>Action</li>
                </nav>
            </div> */}
        </>
    )
}

export default Vrcards
