import React, { useState, useEffect } from 'react';
import baseUrl from '../../helper/helper';
import { Link } from 'react-router-dom';
import '../css/Cards.css';


function Setcards() {

    const [admin, setAdmin] = useState([]);
    // const listproduct = []

    useEffect(() => {
        fetchAdmin();
    }, []);

    const fetchAdmin = async () => {
        try {
            const response = await fetch(`${baseUrl}/user/filterUser/64548fb803361d235e13f848`);


            const jsonproduct = await response.json();
            // listproduct = jsonproduct;
            setAdmin(jsonproduct);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    console.log(admin)
    var date;

    return (
        <>
            <Link to={'/addadminuser'} >
                <div className='adduser'>
                    <i className="ri-add-line"></i>
                    <h4>Create Admin User</h4>
                </div>
            </Link>
            <div className=' longdiv1'>
                <h5>All Users</h5>
                <select className="form" id="floatingSelect" aria-label="Floating label select example">
                    <option >All</option>
                    <option >Developer</option>
                    <option className='a1'>Designer</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Associates</option>
                </select>
            </div>
            {/* <div className='newlongdiv'>
                <h5>All Admin Admin</h5>
                <nav>
                    <li className='a1'>All</li>
                    <li>Developer</li>
                    <li>Designer</li>
                    <li>Sales</li>
                    <li>Marketing</li>
                    <li>Associates</li>
                </nav>
            </div> */}
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
                            <th>Designation</th>
                            <th>Email</th>
                            <th>Documents-1</th>
                            {/* <th>Documents-2</th> */}
                            {/* <th>Status</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>


                    <tbody>
                        {admin.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                {/* <td>{item.productId}</td> */}
                                <td>{date = new Date(item.date).toDateString()}</td>
                                <td>{item.firstName} {item.lastName}</td>
                                <td>{item.city}</td>
                                <td>{item.phone}</td>
                                <td>{item.profile}</td>
                                <td>{item.email}</td>
                                <td>{item.document}</td>
                                {/* <td>{item.status}</td> */}
                                {/* <td>{item.action}</td> */}
                                <Link to={'/edit'}><td>Edit</td></Link>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Setcards
