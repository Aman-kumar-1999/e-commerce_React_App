import React from 'react'
import '../css/Footer.css'
// import { Router, Route, Link, RouteOutlet } from 'react-router-dom';
const Footer = () => {

    return (
        <>

            <div className="container-fluid footer">
                <div className='row'>
                    <div className='col-1'>
                        <img className='eqippedFooterLogo1' src='https://eqipped.com/eqippedLogo.png' />
                    </div>
                    <div className='col-8'>

                    </div>
                    
                    
                    <div className='col-2 mb-3 '>
                        <ul className='list-unstyled'>

                            <li className="socil-media"><a className="anker socil-media" target="_blank" href="#" title="Facebook"><i className="icon fa fa-facebook"></i></a>
                            </li>

                            <li className="socil-media"><a className="anker socil-media" target="_blank" href="https://twitter.com/eqipped_" title="Twitter">
                                <i className="icon fa fa-twitter"></i></a></li>
                            
                            <li className="socil-media"><a className="anker socil-media" target="_blank" href="https://www.instagram.com/eqipped/" title="Instagram"><i
                                className="icon fa fa-instagram"></i></a></li>
                            
                        </ul>
                    </div>
                </div>
                <hr className='hrFooter' />
                <div className='row'>
                    <div className='col list-unstyled'>
                        <p>Company</p>
                        <li className="first">
                            <a className="anker" title="About us" href="#">
                                About us
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                Terms & Conditions
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                Privacy & Policy
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                Shipping & return
                            </a>
                        </li>




                    </div>
                    <div className='col'>
                        <p>Account</p>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                Account
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                Wishlist
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                Cart
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                My Orders
                            </a>
                        </li>
                    </div>
                    <div className='col'>
                        <p>Seller</p>
                        <li className="first">
                            <a className="anker" title="About us" href="#">
                                Seller Login
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                Seller Signup
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                Terms & Conditions
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                COVID19 Information
                            </a>
                        </li>
                    </div>
                    <div className='col'>
                        <p>Contact</p>
                        <li className="first">
                            <a className="anker" title="About us" href="#">
                                +91-9988776655
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                +91-9922334455
                            </a>
                        </li>
                        <li className="first">
                            <a className="anker" title="" href="#">
                                gearloose.lab@gmail.com
                            </a>
                        </li>

                    </div>

                </div>
                <div className='row'>
                    <div className="copyright-bar">
                    <div className="container-fluid">
                        <div style={{ display: 'inline' }} className="col col-sm-8 no-padding">
                            <p style={{ display: 'inline' }}>&copy; 2023 Eqipped, All Right Reserved.</p>
                        </div>
                        {/* <p ></p> */}
                        <div style={{ display: 'inline' }} className="col col-sm-4 no-padding">
                            <div style={{ display: 'inline' }} className="clearfix payment-methods">
                                <p style={{ display: 'inline' }}> Designed & Developed By:  Gearloose</p>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
                {/* <div className="">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h5 className="logoFoodpad"><img className="logoFooter" src="eqippedLogo.png" alt="#" /></h5>
                            </div>

                            <div className="module-body">

                                <ul className="toggle-footer">
                                    <li className="media">
                                        <div className="media-body">
                                            <p>About Eqipped: one of the fastest-growing E-commerce Market place to provide
                                                shoppers reliable and frictionless commerce ecosystem that creates life-changing
                                                experiences for buyers and sellers. eqipped.com was formed in 2023.</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-2">
                            <div className="module-heading">
                                <h5 className="module-title">Information</h5>
                            </div>


                            <div className="module-body">
                                <ul className='list-unstyled'>
                                    <li className="first"><a className="anker" title="About us" href="#">About
                                        us</a></li>

                                    <li className="first"><a className="anker" href="#"
                                        title="Terms & Conditions">Terms & Conditions</a></li>
                                    <li><a className="anker" href="#" title="Privacy Policy">Privacy
                                        Policy</a>
                                    </li>
                                    <li><a className="anker" href="#"
                                        title="Shipping & Return Policy">Shipping & Return Policy</a></li>
                                    <li><a className="anker" href="#"
                                        title="Return & Refunds Policy">Return & Refunds Policy</a></li>
                                    <li className="anker last"><a className="anker" href="#"
                                        title="Grievance">Grievance</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-2">
                            <div className="module-heading">
                                <h5 className="module-title">My Account</h5>
                            </div>

                            <div className="module-body">
                                <ul className='list-unstyled'>
                                    <li className="first"><a className="anker" title="My Account"
                                        href="#">My
                                        Account</a></li>
                                    <li><a className="anker" title="Wishlist" href="#">Wishlist</a>
                                    </li>
                                    <li><a className="anker" title="Shopping Cart" href="#">Shopping Cart</a>
                                    </li>
                                    <li><a className="anker" title="Order History" href="#">Order
                                        History</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2">
                            <div className="module-heading">
                                <h5 className="module-title">Seller</h5>
                            </div>
                            <div className="module-body">
                                <ul className='list-unstyled'>
                                    <li className="first"><a className="anker" target="_blank" title="Seller Login"
                                        href="#">Seller Login</a></li>
                                    <li><a className="anker" target="_blank" title="Seller Signup"
                                        href="#">Seller
                                        Signup</a></li>
                                    <li><a className="anker" title="Seller Terms & Conditions"
                                        href="#">Seller Terms & Conditions</a>
                                    </li>
                                    <li><a className="anker" title="Seller Privacy Policy"
                                        href="#">Seller
                                        Privacy Policy</a></li>
                                    <li><a className="anker" title="COVID19 Information"
                                        href="#">COVID19
                                        Information</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h5 className="module-title">More Details</h5>
                            </div>

                            <div className="module-body">

                                <ul className='list-unstyled'>

                                    <li className="socil-media"><a className="anker socil-media" target="_blank" href="#" title="Facebook"><i className="icon fa fa-facebook"></i></a>
                                    </li>

                                    <li className="socil-media"><a className="anker socil-media" target="_blank" href="https://twitter.com/eqipped_" title="Twitter">
                                        <i className="icon fa fa-twitter"></i></a></li>
                                    <li className="socil-media"><a className="anker socil-media" target="_blank" href="#" title="Youtube"><i
                                        className="icon fa fa-youtube-play"></i></a></li>
                                    <li className="socil-media"><a className="anker socil-media" target="_blank" href="#" title="GooglePlus"><i
                                        className="icon fa fa-google-plus"></i></a></li>
                                    <li className="socil-media"><a className="anker socil-media" target="_blank" href="https://www.instagram.com/eqipped/" title="Instagram"><i
                                        className="icon fa fa-instagram"></i></a></li>
                                    <li className="socil-media"><a className="anker socil-media" target="_blank" href="#" title="Pinterest"><i
                                        className="icon fa fa-pinterest"></i></a></li>
                                </ul>
                                <h4>Payment</h4>
                                <ul className='list-unstyled'>
                                    <li className="socil-media anker"><img src="1.png" alt="" /></li>
                                    <li className="socil-media anker"><img src="2.png" alt="" /></li>
                                    <li className="socil-media anker"><img src="3.png" alt="" /></li>
                                    <li className="socil-media anker"><img src="4.png" alt="" /></li>
                                </ul>
                                <h4>Newsletter</h4>
                                <ul>

                                    <form id="newsletter_form" method="POST" data-parsley-validate>
                                        <div className="row">
                                            <div className="col-md-5" style={{ padding: 0}}>
                                                <input style={{width:150}} type="email" name="email" title="Your Email" placeholder="Your Email"
                                                    data-parsley-required="true" />
                                            </div>
                                            <div className="col-1" >
                                                <a>
                                                    <button style={{ marginLeft: 15, marginTop: 18 }} className="btn search-button"><span className="material-symbols-outlined">mail</span></button>
                                                </a>
                                            </div>
                                        </div>

                                    </form>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div> */}

                {/* <div className="copyright-bar">
                    <div className="container-fluid">
                        <div style={{ display: 'inline' }} className="col-xs-12 col-sm-8 no-padding">
                            <p style={{ display: 'inline' }}>&copy; 2023 Eqipped, All Right Reserved.</p>
                        </div>
                        <p style={{ display: 'inline', paddingLeft: 150 }}></p>
                        <div style={{ display: 'inline' }} className="col-xs-12 col-sm-4 no-padding">
                            <div style={{ display: 'inline' }} className="clearfix payment-methods">
                                <p style={{ display: 'inline' }}> Designed & Developed By:  Gearloose</p>
                            </div>

                        </div>
                    </div>
                </div> */}
            </div>
            {/* </footer> */}

        </>
    )

}
export default Footer;