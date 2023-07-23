
import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../css/HomePageSlider.css'
import { Link } from 'react-router-dom';

const HomePageSlider = () => {

  const imgCollection = [
    {
      image: 'eqippedImg3.png',

    }, {
      image: 'eqippedImg4.jpg',

    }, {
      image: 'Labequipment.png',

    }
  ];









  return (
    <>




      <div
        style={{ background: 'azure' }}
        className='navSlider'>



        <div className=''>
          <div className="text-content">
            <div className="name">Lab Equipments</div>
            <div className="job">
              <div className="job">
                <div className="">
                  <div> <span style={{color:'#3a665c'}}>Related to : </span>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Equipments',
                        3000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Instruments',
                        3000,
                        'Plastic Ware',
                        3000,
                        'Glass Ware',
                        3000,
                        'Chemicals',
                        3000,
                        'Chart & Models',
                        2000,
                        'Physics',
                        2000,
                        'Chemistry',
                        2000,
                        'Biology',
                        2000,
                      ]}
                      wrapper="span"
                      speed={0}
                      style={{ fontSize: '1em', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="buttons">
              <Link to={'/testimonial'}><button>About Us</button></Link>
              <button>Follow Us</button>
            </div> */}
          </div>
          <div className='landingPageMicroScop'>
            <img className='landingPageImage' src='microscope-3d-icon-png.png' />
            
          </div>
        </div>
      </div>

      {/* <div 
      style={{ background: 'azure' }}
      className='navSlider'
      class="slider">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
      </div> */}


      {/* <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        {imgCollection.map(item => (
              <div className="carousel-item active" data-bs-interval="4000">

                <img src={item.image} className="d-block w-100 imageSliderCSS" alt="..." />

              </div>
            ))}
          
        </div>
      </div> */}


      {/* <div className='container-fluid m-0'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide m-0" data-bs-ride="carousel">
          <div className="carousel-inner">
            {imgCollection.map(item => (
              <div className="carousel-item active" data-bs-interval="3000">

                <img src={item.image} className="d-block w-100 imageSliderCSS" alt="..." />

              </div>
            ))}

          </div>
          <button className="prevbutton" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon prevIcon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="nextbutton" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span style={{ width: 10, height: 15 }} className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}



    </>
  )

}
export default HomePageSlider;
