import React from 'react'
import '../css/MyOrders.css'
function MyOrdercards() {
    return (
        <div>
            <h1 className='bigh1'>MY ORDERS</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    {/* <img src="..." className="img-fluid rounded-start" alt="..."/> */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className='order'>Order Id:</h5>
                            <h5 className='product'>Product Id:</h5>
                            <h5 className='date'>Date:</h5>
                            <h4 className='status'>Status</h4>
                            <button className='btn'>VIEW</button>
                            </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    {/* <img src="..." className="img-fluid rounded-start" alt="..."/> */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className='order'>Order Id:</h5>
                            <h5 className='product'>Product Id:</h5>
                            <h5 className='date'>Date:</h5>
                            <h4 className='status'>Status</h4>
                            <button className='btn'>VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    {/* <img src="..." className="img-fluid rounded-start" alt="..."/> */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className='order'>Order Id:</h5>
                            <h5 className='product'>Product Id:</h5>
                            <h5 className='date'>Date:</h5>
                            <h4 className='status'>Status</h4>
                            <button className='btn'>VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    {/* <img src="..." className="img-fluid rounded-start" alt="..."/> */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className='order'>Order Id:</h5>
                            <h5 className='product'>Product Id:</h5>
                            <h5 className='date'>Date:</h5>
                            <h4 className='status'>Status</h4>
                            <button className='btn'>VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrdercards
