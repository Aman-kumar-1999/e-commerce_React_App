import React from "react";
import '../css/Testimonial.css'
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>

            <Carousel
             autoPlay responsive={responsive}>
              
                    <>


                        <Link to={'/productDetails/'} className="col text-decoration-none ">

                            <div className="p-0 linkHover">
                               
                                        {/* <div>
                                            <img className="productImage" src='https://eqipped.com/image/2e7a8e73-f7d5-432f-990f-04366fbc29adAman.jpg' alt="...." />

                                        </div> */}
                                    

                                <div className='card-body'>
                                    {/* <p className='productName' >{
                                        item.productName.length >= 10 ? (<>{item.productName.toUpperCase().slice(0, 10)} ....</>) : (<div className="productName2">{item.productName.toUpperCase()}</div>)
                                    }</p>
                                    <p className='off'>{item.discountPercentage} % off</p>
                                    <p className='natePriceWithDiscount'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.natePriceWithDiscount}</p>
                                    <p className='brandName'>{item.brandName}</p>
                                    <p className='individualProductPrice'><span id='productIcon' className="material-symbols-outlined">
                                        currency_rupee
                                    </span> {item.individualProductPrice}</p> */}
                                    {/* <p className='' >{item.productName}</p>
                                            <p className=''><p className=''>{item.discountPercentage} % off</p></p>
                                            <p className=''>Rs {item.natePriceWithDiscount}</p>
                                            <p className=''>{item.brandName}</p> */}


                                   
                                            {/* <div >
                                                <Link ><div className='col-5 text-decoration-none cart-button'>Add to cart</div></Link>

                                                <Link ><div className='col-4 text-decoration-none cart-button1'>Buy now</div></Link>


                                            </div> */}
                                        

                                </div>
                            </div>
                        </Link>
                    </>
                
            </Carousel>
            {/* <div class="card">
    <img style={{width:'40%'}} src="https://eqipped.com/image/2e7a8e73-f7d5-432f-990f-04366fbc29adAman.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div> */}
            {/* <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div> */}
        {/* </div > */}

            


        </>
    )
}

export default Testimonial;