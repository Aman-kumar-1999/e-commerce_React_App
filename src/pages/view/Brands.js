import React from 'react'
import '../css/Brands.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Brandname from './Brandname';

function Brands() {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 1024 },
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

  const brandData = [
    {
      id: 1,
      imageurl: "Brand1.png"
    },
    {
      id: 2,
      imageurl: "Brand3.png"
    },
    {
      id: 3,
      imageurl: "Brand4.png"
    },
    {
      id: 4,
      imageurl: "Brand5.png"
    }
    , {
      id: 5,
      imageurl: "Brand6.png"
    },
    {
      id: 6,
      imageurl: "Brand7.png"
    },
    {
      id: 7,
      imageurl: "Brand9.png"
    }
  ]

 const images = brandData.map(item => (
    <Brandname name={item.name} url={item.imageurl} /> 
  ))
  return (
    <div className='branddiv'>
      <h1>CHOOSE FROM BRANDS</h1>
      <Carousel responsive={responsive}>
        {images}
      </Carousel>
    </div>
  )
}

export default Brands
