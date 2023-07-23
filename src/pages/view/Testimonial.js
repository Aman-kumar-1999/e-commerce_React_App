import React from "react";
import '../css/Testimonial.css'
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MDBIcon } from "mdb-react-ui-kit";
import ReactStars from 'react-rating-star-with-type'
import { useState } from "react";
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
  const [star, setStar] = useState(5);

  const onChange = (nextValue) => {
    setStar(nextValue)
  }

  return (
    <>
      <h4>Testimonial </h4>
      <Carousel autoPlay responsive={responsive} className='responsivCarosel'>
        <div class="col marginBox">
          <div class="card h-100 centerBody p-0 border rounded-3">
            <div className="boderBox">
              <img src="https://eqipped.com/image/2481df5a-69ad-47b1-b3d7-0eab60d9a0b9atharav.jpg" className="cicrleImage" alt="..." />
            </div>            
            <div class="card-body">
              <h5 class="card-title">Mr. Athrav Kumar</h5>
              <p >Project Manager</p>
              <p >Eqipped</p>
              <p class="card-text" >
                <div>
                  <Accordion>
                    <AccordionSummary style={{ backgroundColor: '#B9F6CA' }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="ml-1">To know about me (in short)</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#B9F6CA' }}>
                      <Typography >
                        Software Engineer with 10+ years of
                        experience in the IT industry. My range
                        of experience is to taken the responsibility 
                        for a Eqipped project within our organization. 
                        I have a charge of planning, 
                        budgeting, monitoring and reporting the project 
                        with the use of project management methodologies, 
                        such as blockchain and Lean Six Sigma.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </p>
            </div>
            <ReactStars 
              onChange={onChange}
              value={5}
              edit={true}
              activeColors={["orange", "orange", "red", "red", "green",]}
            />
            <div class="card-footer mt-2">
              <small class="text-body-secondary">
                <div>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='facebook-f' />
                  </a>
                  <a href='#' className='me-4 text-reset text-danger' target="_blank">
                    <MDBIcon color='' fab icon='twitter' />
                  </a>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='instagram' />
                  </a>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='linkedin' />
                  </a>
                  <a href='#' className='me-4 text-reset text-danger' target="_blank">
                    <MDBIcon color='' fab icon='github' />
                  </a>
                </div>
              </small>
            </div>
          </div>
        </div>      
        <div class="col marginBox">
          <div class="card h-100 centerBody p-0 border rounded-3">
            <div className="boderBox">
              <img src="https://eqipped.com/image/2e7a8e73-f7d5-432f-990f-04366fbc29adAman.jpg" className="cicrleImage" alt="..." />
            </div>            
            <div class="card-body">
              <h5 class="card-title">Engr. Aman Kumar</h5>
              <p >Tech Lead (M.Tech from Bits-Pilani)</p>
              <p >Eqipped</p>
              <p class="card-text" >
                <div>
                  <Accordion>
                    <AccordionSummary style={{ backgroundColor: '#B9F6CA' }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="ml-1">To know about me (in short)</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#B9F6CA' }}>
                      <Typography >
                        Software Engineer with 2+ years of
                        experience in the IT industry. My range
                        of experience includes developing applications
                        by implementing business logic to provide
                        required output/solutions.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </p>
            </div>
            <ReactStars 
              onChange={onChange}
              value={5}
              edit={true}
              activeColors={["orange", "orange", "red", "red", "green",]}
            />
            <div class="card-footer mt-2">
              <small class="text-body-secondary">
                <div>
                  <a href='https://www.facebook.com/profile.php?id=100013864566563' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='facebook-f' />
                  </a>
                  <a href='#' className='me-4 text-reset text-danger' target="_blank">
                    <MDBIcon color='' fab icon='twitter' />
                  </a>
                  <a href='https://www.instagram.com/aman__kr.09/' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='instagram' />
                  </a>
                  <a href='https://www.linkedin.com/in/aman-kumar-9050b3203/' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='linkedin' />
                  </a>
                  <a href='#' className='me-4 text-reset text-danger' target="_blank">
                    <MDBIcon color='' fab icon='github' />
                  </a>
                </div>
              </small>
            </div>
          </div>
        </div>      
        <div class="col marginBox">
          <div class="card h-100 centerBody p-0 border rounded-3">
            <div className="boderBox">
              <img src="https://eqipped.com/image/defaultProfileImage.png" className="cicrleImage" alt="..." />
            </div>            
            <div class="card-body">
              <h5 class="card-title">Ranchan Kumari</h5>
              <p >Mobile Apps Developer </p>
              <p >Eqipped</p>
              <p class="card-text" >
                <div>
                  <Accordion>
                    <AccordionSummary style={{ backgroundColor: '#B9F6CA' }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="ml-1">To know about me (in short)</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#B9F6CA' }}>
                      <Typography >
                        Software Engineer with 2+ years of
                        experience in the IT industry. My range
                        of experience includes developing mobile apps
                        by implementing business logic to provide
                        required output/solutions.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </p>
            </div>
            <ReactStars 
              onChange={onChange}
              value={4}
              edit={true}
              activeColors={["orange", "orange", "red", "red", "green",]}
            />
            <div class="card-footer mt-2">
              <small class="text-body-secondary">
                <div>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='facebook-f' />
                  </a>
                  <a href='#' className='me-4 text-reset text-danger' target="_blank">
                    <MDBIcon color='' fab icon='twitter' />
                  </a>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='instagram' />
                  </a>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='linkedin' />
                  </a>
                  <a href='#' className='me-4 text-reset text-danger' target="_blank">
                    <MDBIcon color='' fab icon='github' />
                  </a>
                </div>
              </small>
            </div>
          </div>
        </div>      
        <div class="col marginBox">
          <div class="card h-100 centerBody p-0 border rounded-3">
            <div className="boderBox">
              <img src="https://eqipped.com/image/defaultProfileImage.png" className="cicrleImage" alt="..." />
            </div>            
            <div class="card-body">
              <h5 class="card-title">Dilip Singh</h5>
              <p >Software Engineer (MCA)</p>
              <p >Eqipped</p>
              <p class="card-text" >
                <div>
                  <Accordion>
                    <AccordionSummary style={{ backgroundColor: '#B9F6CA' }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="ml-1">To know about me (in short)</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#B9F6CA' }}>
                      <Typography >
                        Software Engineer with 3 months of
                        experience in the IT industry. My range
                        of experience includes developing applications
                        by implementing business logic to provide
                        required output/solutions.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </p>
            </div>
            <ReactStars 
              onChange={onChange}
              value={3}
              edit={true}
              activeColors={["orange", "orange", "red", "red", "green",]}
            />
            <div class="card-footer mt-2">
              <small class="text-body-secondary">
                <div>
                  <a href='https://www.facebook.com/profile.php?id=100009640478225&mibextid=LQQJ4d' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='facebook-f' />
                  </a>
                  <a href='#' className='me-4 text-reset text-danger' target="_blank">
                    <MDBIcon color='' fab icon='twitter' />
                  </a>
                  <a href='https://www.instagram.com/dillipkrsingh/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='instagram' />
                  </a>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='linkedin' />
                  </a>
                  <a href='#' className='me-4 text-reset text-danger' target="_blank">
                    <MDBIcon color='' fab icon='github' />
                  </a>
                </div>
              </small>
            </div>
          </div>
        </div>      
        <div class="col marginBox">
          <div class="card h-100 centerBody p-0 border rounded-3">
            <div className="boderBox">
              <img src="https://eqipped.com/image/defaultProfileImage.png" className="cicrleImage" alt="..." />
            </div>            
            <div class="card-body">
              <h5 class="card-title">Aayushi Chaudhary</h5>
              <p >Support Engineer</p>
              <p >Eqipped</p>
              <p class="card-text" >
                <div>
                  <Accordion>
                    <AccordionSummary style={{ backgroundColor: '#B9F6CA' }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="ml-1">To know about me (in short)</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#B9F6CA' }}>
                      <Typography >
                        Support Engineer with 1 year of
                        experience in the IT industry. My range
                        of experience includes supporting applications
                        by implementing business logic to provide
                        required output/solutions.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </p>
            </div>
            <ReactStars 
              onChange={onChange}
              value={2}
              edit={true}
              activeColors={["orange", "orange", "red", "red", "green",]}
            />
            <div class="card-footer mt-2">
              <small class="text-body-secondary">
                <div>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='facebook-f' />
                  </a>
                  <a href='#' className='me-4 text-reset text-danger' target="_blank">
                    <MDBIcon color='' fab icon='twitter' />
                  </a>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='instagram' />
                  </a>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='linkedin' />
                  </a>
                  <a href='#' className='me-4 text-danger text-reset' target="_blank">
                    <MDBIcon color='' fab icon='github' />
                  </a>
                </div>
              </small>
            </div>
          </div>
        </div>      
            
      </Carousel>
    </>
  )
}

export default Testimonial;