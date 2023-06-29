import React, { useState } from 'react';
import '../css/AddVendors.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';

function Adduser() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        profile: "",
        registerAs: "Web Apps",
        institutionName: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
        isuploded: "",
        isverified: "",
        isemailverified: "",
        documentNumber: "",
        address: "",
        avatar: "",
        document: "",
      });
    
    
    
      const navigate = useNavigate();
    
      const createUser = async (event) => {
        event.preventDefault();
        try {
          if (formData.username == null || formData.username == '') {
            toast('Kindly Enter Your Username', {
              position: 'top-center'
            });
          }
          else if (formData.password == null || formData.password == '') {
            toast('Kindly Enter Your Password', {
              position: 'top-center'
            });
          }
          else if (formData.firstName == null || formData.firstName == '') {
            toast('Kindly Enter Your First Name', {
              position: 'top-center'
            });
          }
    
          else if (formData.lastName == null || formData.lastName == '') {
            toast('Kindly Enter Your Last Name', {
              position: 'top-center'
            });
          }
    
          else if (formData.email == null || formData.email == '') {
            toast('Kindly Enter Your E-mail', {
              position: 'top-center'
            });
          }
    
          else if (formData.phone == null || formData.phone == '') {
            toast('Kindly Enter Your Phone Number', {
              position: 'top-center'
            });
          }
    
          else if (formData.profile == null || formData.profile == '') {
            toast('Kindly Enter Your Profile', {
              position: 'top-center'
            });
          }
    
          else if (formData.institutionName == null || formData.institutionName == '') {
            toast('Kindly Enter Your Institution Name', {
              position: 'top-center'
            });
          }
    
          else if (formData.pincode == null || formData.pincode == '') {
            toast('Kindly Enter Your Pincode', {
              position: 'top-center'
            });
          }
    
          else if (formData.city == null || formData.city == '') {
            toast('Kindly Enter Your City', {
              position: 'top-center'
            });
          }
    
          else if (formData.state == null || formData.state == '') {
            toast('Kindly Enter Your State', {
              position: 'top-center'
            });
          }
    
          else if (formData.country == null || formData.country == '') {
            toast('Kindly Enter Your Country', {
              position: 'top-center'
            });
          }
    
          else if (formData.isuploded == null || formData.isuploded == '') {
            toast('Kindly check for Upload', {
              position: 'top-center'
            });
          }
          else if (formData.isverified == null || formData.isverified == '') {
            toast('Kindly check for Verification', {
              position: 'top-center'
            });
          }
    
          else if (formData.isemailverified == null || formData.isemailverified == '') {
            toast('Kindly check is your E-mail Verified', {
              position: 'top-center'
            });
          }
    
          else if (formData.documentNumber == null || formData.documentNumber == '') {
            toast('Kindly Enter Your Document Number', {
              position: 'top-center'
            });
          }
    
          else if (formData.address == null || formData.address == '') {
            toast('Kindly Enter Your Address', {
              position: 'top-center'
            });
          }
          // else if (formData.avatar == null || formData.avatar == '') {
          //   toast('Kindly Enter Your Avatar', {
          //     position: 'top-center'
          //   });
          // }
          else if (formData.document == null || formData.document == '') {
            toast('Kindly Enter Your Document', {
              position: 'top-center'
            });
          }
          else {
    
            const response = await fetch(`${baseUrl}/user/user`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
            if (response.status == 503) {
              toast('Server is down', {
                position: 'top-center'
              });
            } else if (response.status == 500) {
              toast('Email is already present kindly use another Email', {
                position: 'top-center'
              });
            }
            else if (response.ok) {
    
              const jsonData = await response.json();
    
    
              console.log(jsonData);
              toast('User has been Created')


            } else {
    
              throw new Error('Failed to Create');
            }
          }
        } catch (err) {
          // Handle error
          toast('Server is down', {
            position: 'top-center'
          });
          console.error(err);
        }
      }
    
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      }
      return (
        <>
          <ToastContainer />
          <div className='add'>
            <form className='container'>
              <h4>Create User</h4>
              {/* <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Username' onChange={handleInputChange} value={formData.email} name="username" required />
              </div> */}
              <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Id' onChange={handleInputChange} value={formData.email} name="email" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' onChange={handleInputChange} value={formData.password} name='password' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First Name' onChange={handleInputChange} value={formData.firstName} name='firstName' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Last Name' onChange={handleInputChange} value={formData.lastName} name='lastName' required />
              </div>
              <div className="mb-3">
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone' onChange={handleInputChange} value={formData.phone} name='phone' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Profile' onChange={handleInputChange} value={formData.profile} name='profile' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Institution Name' onChange={handleInputChange} value={formData.institutionName} name='institutionName' required />
              </div>
              <div className="mb-3">
                <input type="number" className="form-control" id="exampleInputPassword1" placeholder='Pincode' onChange={handleInputChange} value={formData.pincode} name='pincode' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='City' onChange={handleInputChange} value={formData.city} name='city' required />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='State' className="form-control" id="exampleInputPassword1" onChange={handleInputChange} value={formData.state} name='state' required />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Country' className="form-control" id="exampleInputPassword1" onChange={handleInputChange} value={formData.country} name='country' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Is Uploaded' id="exampleInputPassword1" onChange={handleInputChange} value={formData.isuploded} name='isuploded' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Is Verified' id="exampleInputPassword1" onChange={handleInputChange} value={formData.isverified} name='isverified' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Is Mail Verifiised' id="exampleInputPassword1" onChange={handleInputChange} value={formData.isemailverified} name='isemailverified' required />
              </div>
              <div className="mb-3">
                <input type="number" className="form-control" placeholder='Document Number' id="exampleInputPassword1" onChange={handleInputChange} value={formData.documentNumber} name='documentNumber' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Address' id="exampleInputPassword1" onChange={handleInputChange} value={formData.address} name='address' required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder='Document' id="exampleInputPassword1" onChange={handleInputChange} value={formData.document} name='document' required />
              </div>
              <div>
                <button type="submit" className="form-label  btn2" onClick={createUser}>CREATE</button>
              </div>
            </form>
          </div>
        </>
      )
}

export default Adduser
