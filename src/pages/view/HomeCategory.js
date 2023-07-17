import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HomeCategory.css'
import HomePageSlider from './HomePageSlider'
import Carousel from 'react-multi-carousel'
export default function HomeCategory() {

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
        <div className=''>
            {/* <Carousel autoPlay responsive={responsive}> */}
            <div className='row'>
                <Link to={'/equipments'} className='col categoryGrid'>
                    <img style={{ width: 40 }} src='microscope.png' />
                    <p>Equipment</p>
                </Link>
                <Link to={'/instruments'} className='col categoryGrid'>
                    <img style={{ width: 40 }} src='loupe.png' />
                    <p>Instruments</p>
                </Link>
                <Link to={'/plasticWare'} className='col categoryGrid'>
                    <img style={{ width: 40 }} src='beaker.png' />
                    <p className=''>PlasticWare</p>
                </Link>
                <Link to={'/glassWare'} className='col categoryGrid'>
                    <img style={{ width: 40 }} src='test_tube.png' />
                    <p>GlassWare</p>
                </Link>
                <Link to={'/chemicals'} className='col categoryGrid'>
                    <img style={{ width: 40 }} src='flask.png' />
                    <p>Chemicals</p>
                </Link>
                <Link to={'/chart'} className='col categoryGrid'>
                    <img style={{ width: 40 }} src='smiling-skeleton.png' />
                    <p>Chart</p>
                </Link>
                <Link to={'/physics'} className='col categoryGrid'>
                    <img style={{ width: 40 }} src='physics.png' />
                    <p>Physics</p>
                </Link>
                <Link to={'/chemistry'} className='col categoryGrid'>
                    <img style={{ width: 40 }} src='chemistory.png' />
                    <p>Chemistry</p>
                </Link>
                <Link to={'/biology'} className='col categoryGrid'>
                    <img style={{ width: 40 }} src='biology.png' />
                    <p>Biology</p>
                </Link>

            </div>

            {/* <div className='row'>
                <div className='col categoryResponsive'>
                    <div className='row responsiveCategory'>
                        <Link  to={'/equipments'} className='col categoryGrid'>
                            <img style={{ width: 40 }} src='microscope.png' />
                            <p>Equipment</p>

                        </Link>
                        <Link to={'/instruments'}  className='col categoryGrid'>
                            <img style={{ width: 40 }} src='loupe.png' />
                            <p>Instruments</p>
                        </Link>
                        <Link  to={'/plasticWare'} className='col categoryGrid '>
                            <img style={{ width: 40 }} src='beaker.png' />
                            <p className='categoryPlasticWare'>PlasticWare</p>
                        </Link>

                    </div>
                    <div className='row responsiveCategory'>
                        <Link  to={'/glassWare'} className='col categoryGrid'>
                            <img style={{ width: 40 }} src='test_tube.png' />
                            <p>GlassWare</p>
                        </Link>
                        <Link  to={'/chemicals'} className='col categoryGrid'>
                            <img style={{ width: 40 }} src='flask.png' />
                            <p>Chemicals</p>
                        </Link>
                        <Link  to={'/chart'} className='col categoryGrid'>
                            <img style={{ width: 40 }} src='smiling-skeleton.png' /> 
                            <p>Chart</p>
                        </Link>
                    </div>
                </div>
                <div className='col homeSidebar'>
                    <div className='row'>
                        <HomePageSlider/>

                    </div>
                </div>


            </div> */}

            {/* <div className="container text-center">
                <div className="row">
                    <div className="col" >
                        <div className="" >
                            <Link className='link' to={'/equipments'}>
                                <div className="card-body">
                                    <img src="microscope.png" style={{ width: 80 }} className="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6 className="card-title">Equipments</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="" >
                            <Link className='link' to={'/instruments'}>
                                <div className="card-body">
                                    <img src="Magnifying-Glass-Transparent.png" style={{ width: 94 }} className="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6 className="card-title">Instruments</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col" >
                        <div className="" >
                            <Link className='link' to={'/plasticWare'}>
                                <div className="card-body">
                                    <img src="beaker.png" style={{ width: 80 }} className="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6 className="card-title ">Plastic Ware</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="" >
                            <Link className='link' to={'/glassWare'}>
                                <div className="card-body">
                                    <img src="test-tube.png" style={{ width: 80 }} className="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6 className="card-title">Glass Ware</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="" >
                            <Link className='link' to={'/chemicals'}>
                                <div className="card-body">
                                    <span style={{ fontSize: 73 }} className="material-symbols-outlined">science</span>
                                    <br /><br />
                                    <h6 className="card-title">Chemicals</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="" >
                            <Link className='link chart' to={'/chart'}>
                                <div className="">
                                    <img src="human-skeleton.png" style={{ width: 80 }} className="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6  className="card-title">Chart</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* </Carousel> */}
        </div>
    )
}
