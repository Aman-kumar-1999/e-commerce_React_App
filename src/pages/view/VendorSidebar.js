import React, { useEffect, useState } from 'react'
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';

export default function VendorSidebar() {

    // const clickActive = async (event) => {

    //     document.geElementById('butt').style.backgroundColor = 'red';

    // }
    // var [isLoggedIn, setIsLoggedIn] = useState(false);
    // var [userData, setUserData] = useState([])
    // const [data, setData] = useState([]);
    var isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    var userData = JSON.parse(localStorage.getItem('userData'))
    // useEffect(() => {)
    //     // fetchData();
    //     setIsLoggedIn = localStorage.getItem('isLoggedIn');
    //     setUserData = JSON.parse(localStorage.getItem('userData'));
    // }, []);

    // const jsonString1 = '{"key1":"value1","key2":"value2","key3":{"nestedKey1":"nestedValue1","nestedKey2":"nestedValue2"}}';

    // const obj = JSON.parse(jsonString1);

    // console.log('jsonString1'+typeof obj);
    // var jsonString = JSON.stringify(localStorage.getItem('userData'));

    // console.log('jsonString '+typeof jsonString)
    // var userData = JSON.parse(jsonString);


    // var userData = localStorage.getItem('userData');  
    // console.log('userData' + typeof userData)
    // console.log(userData);





    return (
        <>





            {
                isLoggedIn ?
                    <div className='sidenav '>

                        {/* <a data-bs-toggle="offcanvas" href="#offcanvasExampleUser" role="button" aria-controls="offcanvasExample">
                            <span className="material-symbols-outlined">
                                menu
                            </span>
                        </a> */}


                        <div className="offcanvas mar-gin side-body-vendor" id="offcanvasExampleVendor" aria-labelledby="offcanvasExampleLabel">
                            {/* <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div> */}
                            <div className="offcanvas-body">
                                <ul className="list-group">
                                    <li className="list-group-item sidebarProfile">

                                        <br />
                                        {
                                        (userData.imagePath != null || userData.imagePath != undefined) ? (
                                            <div >
                                                <img className='sidebarImg' src={userData.imagePath} alt='' />

                                            </div>
                                        ) : (<>
                                            
                                                <span className="material-symbols-outlined logoSideBar" >account_circle</span>

                                            
                                        </>)
                                        }

                                        <br />
                                        <div id='profile'>


                                            <Link className='' to={'/editUserImage'}><span className='material-symbols-outlined sidebarLogo' data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home">edit_square</span></Link>
                                        </div>
                                        <h6 id='name'>{userData.firstName}&nbsp;{userData.lastName}</h6>
                                        <h6 id='post'>{userData.profile}</h6>
                                        <h6 id='post'>{userData.role.roleName}</h6> 
                                    </li>
                                </ul>
                                {(userData.role.roleSideBarOptions.home === 'Yes') ? (
                                    <Link to={'/'} className='link'><li className="list-group-item sidebar " data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="pills-home" aria-selected="true"> <span className='material-symbols-outlined sidebarLogo'>home_app_logo</span>Home</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.profile === 'Yes') ? (
                                    <Link to={'/profile'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'><span className="material-symbols-outlined">badge</span></span>Profile</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.dashboard === 'Yes') ? (
                                    <Link to={'/dashboard'} className='link'><li className="list-group-item sidebar " data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"> <span className='material-symbols-outlined sidebarLogo'>empty_dashboard</span>Dashboard</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.order === 'Yes') ? (
                                    <Link to={'/orders'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'>fluid_med</span>Order</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.product === 'Yes') ? (
                                    <Link to={'/products'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'>science</span>Product</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.vendor === 'Yes') ? (
                                    <Link to={'/vendors'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'>diversity_3</span>Vendor</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.user === 'Yes') ? (
                                    <Link to={'/user'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'>person</span>User</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.notification === 'Yes') ? (
                                    <Link to={'/notifications'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'>notifications</span>Notifications</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.setting === 'Yes') ? (
                                    <Link to={'/setting'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'>settings</span>Settings</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.shipments === 'Yes') ? (
                                    <Link to={'/shipments'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'><span className="material-symbols-outlined">local_shipping</span></span>Shipments</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.myOder === 'Yes') ? (
                                    <Link to={'/myorders'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'><span className="material-symbols-outlined">list_alt</span></span>My Orders</li></Link>
                                ) : (<></>)}
                                {(userData.role.roleSideBarOptions.others === 'Yes') ? (
                                    <Link to={'/others'} className='link'><li className="list-group-item sidebar" data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"><span className='material-symbols-outlined sidebarLogo'><span className="material-symbols-outlined">settings_accessibility</span></span>Others</li></Link>
                                ) : (<></>)}</div>

                        </div>


                        {/* <Link to={'#'} className='link'><li className="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>k</span>k</li></Link>
               
                <Link to={'#'} className='link'><li className="list-group-item sidebar"><span className='material-symbols-outlined sidebarLogo'>settings</span>Settings</li></Link> */}

                    </div>
                    : (
                        <></>
                    )

            }

        </>
    )
}