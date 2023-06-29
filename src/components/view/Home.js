import React, { useEffect } from 'react'
import HomePageSlider from '../../pages/view/HomePageSlider';
import HomeCategory from '../../pages/view/HomeCategory';
import HomeSlider from '../../pages/view/HomeSlider';
import Suggestion from '../../pages/view/Suggestion';
import Brands from '../../pages/view/Brands';
const Home = () => {


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
    {/* <h1>The HomePage</h1> */}
      <HomeCategory/>      
      {/* <HomePageSlider/>      */}
      <HomeSlider />
      {/* <Suggestion /> */}
      {/* <Brands /> */}
    </>
  )

}
export default Home;
