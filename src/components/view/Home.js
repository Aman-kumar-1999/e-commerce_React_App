import React, { useEffect, useState } from 'react'
import HomePageSlider from '../../pages/view/HomePageSlider';
import HomeCategory from '../../pages/view/HomeCategory';
import HomeSlider from '../../pages/view/HomeSlider';

import Suggestion from '../../pages/view/Suggestion';
import Brands from '../../pages/view/Brands';
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import axios from 'axios';
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
// import { Box, FormControl, InputLabel, LinearProgress, OutlinedInput } from '@mui/material';
import SearchSection from './SearchBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


import Testimonial from '../../pages/view/Testimonial';
import { FilterList, Search } from '@mui/icons-material';


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

  const [searchData, setSearchData] = useState(localStorage.getItem('homeSearch'));
  const [product, setProduct] = useState([]);
  const [searchNeeded, setSearchNeeded] = useState(false);
  const [changeData, setChangeData] = useState(false);

  const userData = JSON.parse(localStorage.getItem('userData'))
  var isLoggedIn = localStorage.getItem('isLoggedIn');

  const [loading, setLoading] = useState(false);



  const cart =
  {
    "productId": '',
    "vendorId": '',
    "customerName": '',
    "vendorName": null,
    "vendorEmail": null,
    "productName": null,
    "productDescription": null,
    "category": null,
    "brandName": null,
    "productQuantity": null,
    "individualProductPrice": 0.0,
    "natePriceWithDiscount": 0.0,
    "discountPercentage": 0.0,
    "status": null,
    "action": null,
    "imageName": null,
    "imagePath": null,
    "bulkCode": null,
    "variationName": null,
    "variationId": null,
    "gst": null,
    "hsn": null,
    "isVerified": null,
    "tierNo": null,
    "containLiquid": null,
    "totalProductPrice": 0.0

  }

  useEffect(() => {
    localStorage.removeItem("homeSearch")
    // fetchProductData();
    //console.log('Search Data : '+searchData.length)
    if (searchData) {
      window.scrollTo(100, 200);
      setSearchNeeded(true);
    } else {
      setSearchNeeded(false);
    }

  }, [])

  const handleSearchInputChange = (event) => {
    setSearchNeeded(true)
    localStorage.setItem('homeSearch', event.target.value)
    setSearchData(localStorage.getItem('homeSearch'));
    onSearchHandle(localStorage.getItem('homeSearch'));
    if (event.target.value == "")
      setSearchNeeded(false)
  }

  // const filteredProductName = product.filter((item) =>
  //     item.productName.toLowerCase().includes(searchData.toLowerCase())

  // );

  // ----------Start Search--------------------------------------------------------------------

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge((event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  // ----------End Search------------------------------------------------------------------------

  const onSearchHandle = async (e) => {

    let dataLimit = 10;

    let pageNo = Math.ceil(product.length / dataLimit) + 1
    console.log("Page No : " + pageNo)

    try {
      // const response = await fetch(`http://localhost:5005/product/?pageNo=${pageNo}&dataLimit=${dataLimit}`);
      const response = await fetch(`${baseUrl}/product/productNameOrBrandName/${e}?pageNo=${pageNo}&dataLimit=${dataLimit}`);


      let jsonproduct = await response.json();
      const arr = [];
      for (let s of jsonproduct) {
        arr.push(JSON.parse(JSON.stringify(s)));
      }

      // let apidata = [...product, ...jsonproduct];

      // listproduct = jsonproduct;

      setProduct(arr);


      console.log(" Product  : " + jsonproduct.type);
    } catch (error) {
      console.log('Error:', error);
    }

  }


  const fetchProductData = async () => {

    let dataLimit = 10;

    let pageNo = Math.ceil(product.length / dataLimit) + 1
    console.log("Page No : " + pageNo)

    try {
      // const response = await fetch(`http://localhost:5005/product/?pageNo=${pageNo}&dataLimit=${dataLimit}`);
      const response = await fetch(`${baseUrl}/product/productNameOrBrandName/${searchData}?pageNo=${pageNo}&dataLimit=${dataLimit}`);


      let jsonproduct = await response.json();

      let apidata = [...product, ...jsonproduct];

      // listproduct = jsonproduct;
      setProduct(apidata);
      console.log(apidata);
    } catch (error) {
      console.log('Error:', error);
    }

  }



  const getProductByProductId = async (productId) => {

    try {
      // const response = axios.get(`http://localhost:5005/product/productId/${productId}`).then(
      const response = await fetch(`${baseUrl}/product/productId/${productId}`);

      return response.json();

    } catch (error) {
      console.error(error);
      // toast.error('Server is down !')
    }
  }
  const addToCart = async (item) => {
    try {
      let cart1 = JSON.stringify(item)
      console.log('Item : ' + JSON.stringify(item))
      let item1 = JSON.parse(cart1);
      cart.productId = item1.productId;
      cart.vendorId = item1.vendorId;
      cart.customerName = userData.firstName + " " + userData.lastName;
      cart.email = userData.email;
      cart.phone = userData.phone;
      cart.address = userData.address;
      cart.vendorName = item1.vendorName;
      cart.vendorEmail = item1.vendorEmail;
      cart.productName = item1.productName;
      cart.productDescription = item1.productDescription;
      cart.category = item1.category;
      cart.brandName = item1.brandName;
      cart.productQuantity = item1.productQuantity;
      cart.individualProductPrice = item1.individualProductPrice;
      cart.natePriceWithDiscount = item1.natePriceWithDiscount;
      cart.discountPercentage = item1.discountPercentage;
      cart.imageName = item1.imageName;
      cart.imagePath = item1.imagePath;
      cart.bulkCode = item1.bulkCode;
      cart.variationName = item1.variationName;
      cart.variationId = item1.variationId;
      cart.gst = item1.gst;
      cart.hsn = item1.hsn;
      cart.status = "New Shipments";
      cart.action = "Edit";
      cart.isVerified = item1.isVerified;
      cart.tierNo = item1.tierNo;
      cart.containLiquid = item1.containLiquid;
      cart.totalProductPrice = item1.totalProductPrice;
      console.log("ProductId : " + cart.productId);



      const response = await axios.post(`${baseUrl}/order/cart`, cart)

        .then(response => {

          console.log(response.data);


          toast.success('Added on cart')


        })
        .catch(error => {


          toast.error('Unable to add on cart')
          console.error(error);
        });


    } catch (error) {
      console.error(error);

    }
  };
  // console.log(data)
  const navigate = useNavigate();
  const checkout = async (items1) => {
    try {
      console.log("item : " + items1)
      const items = await getProductByProductId(items1.productId)
      console.log("Product Id  : " + JSON.stringify(items))
      const response = null;
      let cart1 = JSON.stringify(items)
      console.log('Item : ' + JSON.stringify(items))
      let item1 = JSON.parse(cart1);
      // startPayment(item1);
      cart.productId = item1.productId;
      cart.vendorId = item1.vendorId;
      cart.customerName = userData.firstName + " " + userData.lastName;
      cart.email = userData.email;
      cart.phone = userData.phone;
      cart.address = userData.address;
      cart.vendorName = item1.vendorName;
      cart.vendorEmail = item1.vendorEmail;
      cart.productName = item1.productName;
      cart.productDescription = item1.productDescription;
      cart.category = item1.category;
      cart.brandName = item1.brandName;
      cart.productQuantity = item1.productQuantity;
      cart.individualProductPrice = item1.individualProductPrice;
      cart.natePriceWithDiscount = item1.natePriceWithDiscount;
      cart.discountPercentage = item1.discountPercentage;
      cart.imageName = item1.imageName;
      cart.imagePath = item1.imagePath;
      cart.bulkCode = item1.bulkCode;
      cart.variationName = item1.variationName;
      cart.variationId = item1.variationId;
      cart.gst = item1.gst;
      cart.hsn = item1.hsn;
      cart.status = "New Shipments";
      cart.action = "Edit";
      cart.isVerified = item1.isVerified;
      cart.tierNo = item1.tierNo;
      cart.containLiquid = item1.containLiquid;
      cart.totalProductPrice = item1.totalProductPrice;
      // console.log("ProductId : " + cart.productId);


      response = axios.post(`${baseUrl}/order/`, cart).then(
        (response) => {
          if (response.status == 200) {
            //console.log(response.data)
            if (response.data.Email_STATUS === 'Failed') {
              console.log(response.data)
              toast.warning(`Order has been Created. But Email Sent : ${response.data.Email_STATUS}`);
            }
            if (response.data.WhatsApp_STATUS === 'Failed') {
              console.log(response.data)
              toast.warning(`Order has been Created. But WhatsApp Msg Sent : ${response.data.WhatsApp_STATUS}`);
            }
            if (response.data.WhatsApp_STATUS === 'Success.' || response.data.Email_STATUS === 'Success.') {
              console.log(response.data)
              toast.success(`Order has been Created. Sent Email : ${response.data.Email_STATUS} & Sent WhatsApp : ${response.data.WhatsApp_STATUS}`)
            }
            else {
              console.log(response.data)
              toast.warning(`Order has been Created. Sent Email : ${response.data.Email_STATUS} & Sent WhatsApp : ${response.data.WhatsApp_STATUS}`)
            } navigate('/checkoutsuccess')

          }
        }

      ).catch((error) => {
        toast.error('Order can not be created.')
        console.log(error);

      })
      // const response = await axios.post(`http://localhost:5005/product/`,formData);



    } catch (error) {
      // toast.error('Order can not be created.')
      // console.error(error);

    }

  }
  function initiateClientModule(data) {

    const script = document.createElement("script");
    script.src = `https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/KzHAQX87362223007289.js`;
    script.crossOrigin = `anonymous`;
    script.onload = () => {

      var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
          "orderId": data.orderId, /* update order id */
          "token": data.body.txnToken, /* update token value */
          "tokenType": "TXN_TOKEN",
          "amount": data.amount/* update amount */
        },

        "merchant": {

          mid: "KzHAQX87362223007289",
          redirect: true
        },

        "handler": {
          "notifyMerchant": function (eventName, data) {
            console.log("notifyMerchant handler function called");
            console.log("eventName => ", eventName);
            console.log("data => ", data);
          },
          "transactionStatus": function (data) {
            console.log("transaction completed")
            console.log(data)

            if (data.STATUS = "TXN_FAILURE") {
              alert(data.RESPMSG)
            } else if (data.STATUS == 'TXN_SUCCESS') {

              toast.success(data.RESPMSG)
              // alert(data.RESPMSG)
              // checkout(cart);
              // navigate('/checkoutsuccess')

              // console.log("Cap : "+cart)
              //capture api with data : call kar lo

            } else {
              alert("Something wend wrong while payment contact to admin!!")
            }

            window.Paytm.CheckoutJS.close();


          }


        }
      };


      if (window.Paytm && window.Paytm.CheckoutJS) {
        window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
          // initialze configuration using init method
          window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
            // after successfully updating configuration, invoke JS Checkout
            window.Paytm.CheckoutJS.invoke();
          }).catch(function onError(error) {
            console.log("error => ", error);
          });
        });
      }

    }

    document.body.appendChild(script);


  }

  //start payment function
  async function startPayment(item) {
    //call api to start payment
    // const amount = document.querySelector("#user_amount").value
    console.log("Jan")

    // const baseUrl1 = "http://localhost:5004/order/start"

    // const response = await fetch(`http://localhost:5004/order/start`, {
    const response = await fetch(`${baseUrl}/order/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'amount': item.natePriceWithDiscount.toFixed(2) })
    })


    response.json().then(data => {
      //order is generated successfully
      console.log(data)


      initiateClientModule(data)


    }).catch(error => {
      console.log(error)
      alert("error in initiating payment")
    })


  }



  return (
    <>






      <HomePageSlider />


      <div id='home-search-div' className='searchBoxCSS sticky-top'>
        <FormControl variant="filled" fullWidth sx={{ mt: 3 }} className='home-search'>
          {/* <InputLabel className='ml-5' htmlFor="outlined-adornment-amount">Search Product Name ...</InputLabel> */}
          <OutlinedInput className='m-0 searchBoxImputNavbar'

            required name="recipient"
            size='small'
            value={searchData} onChange={handleSearchInputChange}
            id="outlined-adornment-amount"
            endAdornment={<Search />}
            startAdornment={
              // <Link><FilterList /></Link>
              <div>
                {/* <Button onClick={handleClickOpen}> */}
                <Link><FilterList onClick={handleClickOpen}/></Link>
                  {/* </Button> */}
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                  <DialogTitle>Select one</DialogTitle>
                  <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="demo-dialog-native">Filter</InputLabel>
                        <Select
                          native
                          value={age}
                          onChange={handleChange}
                          input={<OutlinedInput label="Age" id="demo-dialog-native" />}
                        >
                          <option aria-label="None" value="" />
                          <option value="Product Name">Product Name</option>
                          <option value="Brand Name">Brand Name</option>                          
                        </Select>
                      </FormControl>
                      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                        <Select
                          labelId="demo-dialog-select-label"
                          id="demo-dialog-select"
                          value={age}
                          onChange={handleChange}
                          input={<OutlinedInput label="Age" />}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl> */}
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                  </DialogActions>
                </Dialog>
              </div>

            }
          // label="Search Product Name ..."
          />
        </FormControl>
        {/* <input id='home-search' type="" style={{ border: "1px solid black" }} className='searchBoxImputNavbar' size="lg"
          bordered
          clearable
          placeholder="Search Product Name ..."
          value={searchData} onChange={handleSearchInputChange} /> */}
      </div>



      {searchNeeded ? (<>

        <div id='home-div-scrollbody' className="row row-cols-1 row-cols-md-7 g-8">
          <InfiniteScroll
            dataLength={product.length}
            next={fetchProductData}
            hasMore={true}
            loader={<div id='home-infinity-scroll-loading' className='text-center loading1'>

              <img id='home-infinity-scroll-loading-img' style={{ width: 50, height: 50 }} src='spinner.gif' />

            </div>}

          >
            {
              (product.length == 0) ? (<>


              </>) : (
                <>
                  <div id='home-infinity-scroll-div-body' className="row row-cols-1 ">
                    {product.map((item, index) => (
                      <>



                        <Link id='home-infinity-scroll-link' to={'/productDetails/' + item.productId} className="col text-decoration-none linkHover">

                          <div className="" key={index} >
                            {
                              (item.imagePath != "No") ? (
                                <div>
                                  <img id='home-infinity-scroll-Link-img' className="productImage" src={item.imagePath} alt="...." />

                                </div>
                              ) : (<><div>
                                <img id='home-infinity-scroll-Link-img' className="productImage" src='productImage.png' alt="...." />
                              </div>
                              </>)
                            }

                            <div className='card-body'>
                              <p className='productName' >{
                                item.productName.length >= 10 ? (<>{item.productName.toUpperCase().slice(0, 10)} ....</>) : (<>{item.productName.toUpperCase()}</>)
                              }</p>
                              <p className='offCategory'>{item.discountPercentage} % off</p>
                              <p className='natePriceWithDiscount'><span id='productIcon' className="material-symbols-outlined">
                                currency_rupee
                              </span> {item.natePriceWithDiscount.toFixed(0)}</p>
                              <p className='brandName'>{item.brandName}</p>
                              <p className='individualProductPrice'><span id='productIcon' className="material-symbols-outlined">
                                currency_rupee
                              </span> {item.individualProductPrice}</p>



                              {
                                (isLoggedIn) ? (
                                  <div >
                                    <Link id='home-infinity-scroll-add-to-cart' onClick={() => addToCart(item)}><div className='col-5 text-decoration-none cart-button-category'>Add to cart</div></Link>

                                    <Link id='home-infinity-scroll-buy-now' onClick={() => checkout(item)}><div className='col-4 text-decoration-none cart-button1-category'>Buy now</div></Link>


                                  </div>
                                ) : (
                                  <>
                                    <Link id='home-infinity-scroll-add-to-cart' to={'/login'} className="cart-btn"><div className='col-5 text-decoration-none cart-button-category'>Add to cart</div></Link>

                                    <Link id='home-infinity-scroll-buy-now' to={'/login'} className="cart-btn"><div className='col-4 text-decoration-none cart-button1-category'>Buy now</div></Link>


                                  </>
                                )
                              }
                            </div>
                          </div>
                        </Link>
                      </>
                    )
                    )

                    }

                  </div>

                </>
              )
            }

          </InfiniteScroll>

        </div>

      </>) : (<>

        <HomeCategory />

        <HomeSlider />

        <Brands />
        <Testimonial />



      </>)


      }





    </>
  )

}
export default Home;
