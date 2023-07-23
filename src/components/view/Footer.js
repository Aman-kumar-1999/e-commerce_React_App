import React from 'react'
import '../css/Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import { Router, Route, Link, RouteOutlet } from 'react-router-dom';
const Footer = () => {

    return (
        <>
            <MDBFooter bgColor='#116D6E' className='text-center text-lg-start  footer'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>
                        Get connected with us on social networks:
                            {/* <img style={{width:"40%"}} src='https://eqipped.com/eqippedLogo.png' /> */}
                            
                            </span>
                    </div>

                    <div>
                        <a href='https://www.facebook.com/eqipped' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='facebook-f' />
                        </a>
                        <a href='https://twitter.com/eqipped_' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='twitter' />
                        </a>
                        <a href='https://eqipped.com' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='google' />
                        </a>
                        <a href='https://www.instagram.com/eqipped/' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='instagram' />
                        </a>
                        <a href='https://www.linkedin.com/company/gearloose-labs/' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='linkedin' />
                        </a>
                        <a href='' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='github' />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                <Link to={'/'} ><img style={{width:"80%"}} src='https://eqipped.com/E (8).png' /></Link>
                                Eqipped (Gearloose Labs Pvt)
                                    {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}

                                    
                                </h6>
                                <p className=''>
                                   is a one-stop E-commerce platform for chemicals and synthetics with an additinal product
                                   range of glassware, equipment, and tools for your lab.
                                </p><Link style={{color:"#aeaaaf"}} to={'/'} >view more</Link>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Terms & Conditions
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Privacy & Policy
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Shipping & return
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Team Members
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Careers
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Product</h6>
                                <p>
                                    <Link to={'equipments'} className='text-reset'>
                                        Equipments
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'instruments'} className='text-reset'>
                                    Instruments
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'plasticware'} className='text-reset'>
                                        Plastic Ware
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'glassware'} className='text-reset'>
                                        Glass Ware
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'chemicals'} className='text-reset'>
                                    Chemicals
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'chart'} className='text-reset'>
                                        Charts & Models
                                    </Link>
                                </p>
                                
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='' icon='location-dot' className='me-3' />
                                   B-122, HIG, Phase 2B, Shastripuram Yojna, Agra, 282007
                                </p>
                                <p>
                                    <MDBIcon color='' icon='envelope' className='me-3' />
                                    gearloose.lab@gmail.com
                                </p>
                                <p>
                                    {/* <MDBIcon color='' icon='phone' className='me-3' />+91 97909 10478 */}
                                </p>
                                {/* <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                                </p> */}
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    ©  &nbsp; &nbsp;
                    <a className='text-reset fw-bold' href='https://eqipped.com'>
                        Gearloose Labs 
                    </a>
                </div>
            </MDBFooter>
           

            {/* <div className="container-fluid footer"> */}
                {/* <div className='row'>
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
                            
                            <div style={{ display: 'inline' }} className="col col-sm-4 no-padding">
                                <div style={{ display: 'inline' }} className="clearfix payment-methods">
                                    <p style={{ display: 'inline' }}> Designed & Developed By:  Gearloose</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}
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
            {/* </div> */}
            {/* </footer> */}

        </>
    )

}
export default Footer;