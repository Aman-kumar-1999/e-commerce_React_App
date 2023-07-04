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
    <Brandname style={{width:40}} name={item.name} url={item.imageurl} />
  ))
  return (
    <div className='branddiv'>
      <div className="Header">
        <h3 className="Heading">Brand </h3>
        <h5 className="Action" ></h5>
      </div>

      <hr style={{ paddingTop: 1, background: '#a70cef', marginLeft: '10px' }} />
      <Carousel autoPlay responsive={responsive}>
        {
          brandData.map(item => (
            <img style={{width:"200px",height:"50px"}} name={item.name} src={item.imageurl} />
          ))
        }
        {/* {images} */}
      </Carousel>
    </div>
  )
}

export default Brands
