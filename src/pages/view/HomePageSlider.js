
import React from 'react'
import '../css/HomePageSlider.css'
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
      <div className='container-fluid'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {imgCollection.map(item => (
              <div className="carousel-item active" data-bs-interval="4000">

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
      </div>



    </>
  )

}
export default HomePageSlider;
