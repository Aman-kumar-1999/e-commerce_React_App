import React, { useState, useEffect } from 'react'
import '../css/Cards.css'
import baseUrl from '../../helper/helper';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Shipcards() {

  var userData = JSON.parse(localStorage.getItem('userData'))
    const [order, setOrder] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      // const response = await fetch(`http://localhost:5004/order/getVendorOrder/${userData.id}`);

      const response = await fetch(`${baseUrl}/order/getVendorOrder/${userData.id}`);


      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setOrder(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(order)
  const [newShipments, setNewShipments] = useState([]);
  // const listproduct = []
  
  useEffect(() => {
    fetchNewShipments();
  }, []);
  const [formNewShipments, setFormNewShipments] = useState({
    "status": "New Shipments",
    "vendorId": userData.id
  });
  const fetchNewShipments = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/getStatusVendorOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formNewShipments)
      });

      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setNewShipments(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(newShipments)
  const [deliveredShipments, setDeliveredShipments] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchDeliveredOrder();
  }, []);
  const [formDeliveredData, setFormDeliveredData] = useState({
    "status": "Delivered Shipments",
    "vendorId": userData.id
  });
  const fetchDeliveredOrder = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/getStatusVendorOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDeliveredData)
      });

      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setDeliveredShipments(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(deliveredShipments)
  const [replacementShipment, setReplacementShipment] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchReplacementShipment();
  }, []);
  const [formReplacementShipment, setFormReplacementShipment] = useState({
    "status": "Replacement Shipments",
    "vendorId": userData.id
  });
  const fetchReplacementShipment = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/getStatusVendorOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formReplacementShipment)
      });

      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setReplacementShipment(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(replacementShipment)
  const [cancelledShipment, setCancelledShipment] = useState([]);
  // const listproduct = []

  useEffect(() => {
    fetchCancelledShipments();
  }, []);
  const [formCancelledShipments, setCancelledFormShipments] = useState({
    "status": "Cancelled Shipments",
    "vendorId": userData.id
  });
  const fetchCancelledShipments = async () => {
    try {
      const response = await fetch(`${baseUrl}/order/getStatusVendorOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formCancelledShipments)
      });

      const jsonproduct = await response.json();
      // listproduct = jsonproduct;
      setCancelledShipment(jsonproduct);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(cancelledShipment)

  var date;

  const changeOrderStatus = async (event,items) => {
    try {
      items.status = event.target.value;
      const response = axios.put(`${baseUrl}/order/updateOrder`, items).then(
        (response) => {
          if (response.status == 200) {
            // console.log(response.data)
            // setOrder(response.data)
            toast.success(`${event.target.value} Success !.`);

          }
        }

      ).catch((error) => {
        toast.error('Order can not be changed Status.')
        console.log(error);

      })
    }
    catch (error) {
      console.log('Error : ', error);
    }
  }

    return (
        <div>
            <>
                <div className='container row'>
                    <div className="shipcard col">
                        <div className="card-body">
                            <h4 className="card-title ml-1">New Shipments</h4>
                            {newShipments.length==0 
                            ?(<><p>0 %</p>
                            <h5>0</h5></>)
                            :(<><p>{(newShipments.length) / (order.length) * 100} %</p>
                            <h5>{newShipments.length}</h5></>)}
                        </div>
                    </div>
                    <div className="shipcard col">
                        <div className="card-body">
                            <h4 className="card-title ml-1" >Delivered Shipments</h4>
                            {deliveredShipments.length==0 
                            ?(<><p>0 %</p>
                            <h5>0</h5></>)
                            :(<><p>{(deliveredShipments.length) / (order.length) * 100} %</p>
                            <h5>{deliveredShipments.length}</h5></>)}
                            
                        </div>
                    </div>
                    <div className="shipcard col">
                        <div className="card-body">
                            <h4 className="card-title ml-1" >Replacement Ship...</h4>
                            {replacementShipment.length==0 
                            ?(<><p>0 %</p>
                            <h5>0</h5></>)
                            :(<><p>{(replacementShipment.length) / (order.length) * 100} %</p>
                            <h5>{replacementShipment.length}</h5></>)}
                        </div>
                    </div>
                    <div className="shipcard col">
                        <div className="card-body">
                            <h4 className="card-title ml-1"> Cancelled Shipments </h4>
                            {cancelledShipment.length==0 
                            ?(<><p>0 %</p>
                            <h5>0</h5></>)
                            :(<><p>{(cancelledShipment.length) / (order.length) * 100} %</p>
                            <h5>{cancelledShipment.length}</h5></>)}
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
            {order.length && order.map((item, index) => (
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
                  <select onChange={event => changeOrderStatus(event,item)} className="btn-secondary" name="cars" id="cars">
                    <option value={item.status}>{item.status}</option>
                    <option value="New Shipments">New Shipments</option>
                    <option value="Delivered Shipments">Delivered Shipments</option>
                    <option value="Replacement shipments">Replacement shipments</option>
                    <option value="Cancelled Shipments">Cancelled Shipments</option>
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
