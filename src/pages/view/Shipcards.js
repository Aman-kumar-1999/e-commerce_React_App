import React, { useState, useEffect } from 'react'
import '../css/Cards.css'
import baseUrl from '../../helper/helper';
import { Link } from 'react-router-dom';

function Shipcards() {


    const [order, setOrder] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/`);


      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setOrder(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(order)
  const [pendingOrder, setPendingOrder] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchPendingOrder();
  }, []);
  const [formPendingData, setPendingFormData] = useState({
    "status": "New Shipments"
  });
  const fetchPendingOrder = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/getStatusOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formPendingData)
      });

      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setPendingOrder(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(pendingOrder)
  const [recentOrder, setRecentOrder] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchRecentOrder();
  }, []);
  const [formRecentData, setRecentFormData] = useState({
    "status": "Delivered"
  });
  const fetchRecentOrder = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/getStatusOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formRecentData)
      });

      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setRecentOrder(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(recentOrder)
  const [confirmedOrder, setConfirmedOrder] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchConfirmedOrder();
  }, []);
  const [formConfirmedData, setConfirmedFormData] = useState({
    "status": "Replacement/Cancelled"
  });
  const fetchConfirmedOrder = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/getStatusOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formConfirmedData)
      });

      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setConfirmedOrder(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(confirmedOrder)
  const [cancelledOrder, setCancelledOrder] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchCancelledOrder();
  }, []);
  const [formCancelledData, setCancelledFormData] = useState({
    "status": "Cancelled Shipments"
  });
  const fetchCancelledOrder = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/getStatusOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formCancelledData)
      });

      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setCancelledOrder(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(cancelledOrder)

  var date;

    return (
        <div>
            <>
                <div className='container row'>
                    <div className="shipcard col">
                        <div className="card-body">
                            <h4 className="card-title">New Shipments</h4>
                            <p>+3.34%</p>
                            <h5>{order.length}</h5>
                        </div>
                    </div>
                    <div className="shipcard col">
                        <div className="card-body">
                            <h4 className="card-title newh" >Delivered</h4>
                            <p>+3.34%</p>
                            <h5>{order.length}</h5>
                        </div>
                    </div>
                    <div className="shipcard2 col">
                        <div className="card-body">
                            <h4 className="card-title newh" >Replacement/Cancelled</h4>
                            <h5>{order.length}</h5>
                        </div>
                    </div>
                    <div className="shipcard3 col">
                        <div className="card-body">
                            <h4 className="card-title newcancel"> Cancelled</h4>
                            <h5>{order.length}</h5>
                        </div>
                    </div>
                </div>
                <div className=' longdiv1'>
        <h5>Total Orders</h5>
        <select className="form" id="floatingSelect" aria-label="Floating label select example">
          <option >All</option>
          <option >Today</option>
          <option className='a1'>Weekly</option>
          <option>Monthly</option>

        </select>

      </div>
      <div className="col-md-12 container table-responsive">

        <table WIDTH="1300" HEIGHT="50">
          <thead>
            <tr>
              <th>No. </th>
              <th>Product Id</th>
              <th>Date</th>
              <th>Customer Email</th>
              <th>Place</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>


          <tbody>
            {order.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.productId}</td>
                <td>{date = new Date(item.date).toDateString()}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.productName}</td>
                <td>{item.productQuantity}</td>
                <td>{item.natePriceWithDiscount}</td>
                <td>
                  <select className="btn-secondary" name="cars" id="cars">
                    <option value={item.status}>{item.status}</option>
                    <option value="Cancelled Order">Cancelled Order</option>
                    <option value="Confirmed Order">Confirmed Order</option>
                    <option value="Pending Order">Pending Order</option>
                    <option value="Recent Order">Recent Order</option>
                  </select>
                </td>
                {/* <td><input type='text' value={item.status}></input></td> */}
                <td>
                  {/* <Link to={"/edit"}>{item.action}
                  </Link> */}
                  {item.action}
                </td>

              </tr>

            ))}
          </tbody>
        </table>
      </div>
            </>
        </div>
    )
}

export default Shipcards
