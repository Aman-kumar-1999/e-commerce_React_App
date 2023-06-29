import React from 'react'
import '../css/Profile.css'
function Profilecards() {
  var isLoggedIn = localStorage.getItem('isLoggedIn');
  var userData = JSON.parse(localStorage.getItem('userData'));
  return (
    <>
      <article className="cssui-usercard">
        <div className="cssui-usercard__body">
          <header className="cssui-usercard__header">
            {/* <img className='sidebarImg' src='aman.jpg' alt='Aman' /> */}
            {(userData.imagePath != null || userData.imagePath != undefined) ? (
              <div>
                <img className='sidebarImg' src={userData.imagePath} alt='' />
                
              </div>
            ) : (<>
              <div >
              <span className="material-symbols-outlined logoSideBar" >account_circle</span>

              </div>
            </>)}
            <div className="cssui-usercard__header-info">
              <h3 className="cssui-usercard__name">{userData.firstName} {userData.lastName}</h3>
              <h5 className="">{userData.profile}</h5>
              <h5 className="">{userData.role.roleName}</h5>
            </div>
          </header>
          <div className="cssui-usercard__content">
            <div className="cssui-slider">



              <input id="slide1" type="radio" className="cssui-slider__switch cssui-usercard__switch" name="slider-controls" checked autofocus />
              <label for="slide1" className="cssui-slider__control cssui-usercard__control"></label>
              <input id="slide2" type="radio" className="cssui-slider__switch cssui-usercard__switch" name="slider-controls" />
              <label for="slide2" className="cssui-slider__control cssui-usercard__control"></label>


              <div className="cssui-slider__slides">



                <div className="cssui-slider__slide">
                  <h4 className="cssui-usercard__title">About me</h4>
                  <div className="cssui-usercard__stats">
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-earth"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Language</span>
                        <span className="cssui-stats__value">{userData.language}</span>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-location"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Hometown</span>
                        <span className="cssui-stats__value">{userData.city}</span>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-calendar"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Date of birth</span>
                        <span className="cssui-stats__value">{userData.dateOfBirth}</span>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-man-woman"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Relationship</span>
                        <span className="cssui-stats__value">{userData.relationship}</span>
                      </div>
                    </div>
                  </div>
                </div>







                <div className="cssui-slider__slide">
                  <h4 className="cssui-usercard__title">My Contacts</h4>
                  <div className="cssui-usercard__stats">
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-email"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">E-mail</span>
                        <a href="#0" className="cssui-stats__value">{userData.email}</a>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-phone"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Phone</span>
                        <a href="tel:79000000000" className="cssui-stats__value">{userData.phone}</a>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-whatsapp"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Address</span>
                        <span className="cssui-stats__value">{userData.address} {userData.city} {userData.state} {userData.country} - {userData.pincode}</span>
                      </div>
                    </div>
                    <div className="cssui-stats cssui-usercard__stats-item">
                      <i className="cssui-icon icon-skype"></i>
                      <div className="cssui-stats__info cssui-usercard__stats-info">
                        <span className="cssui-stats__name cssui-usercard__stats-name">Organization</span>
                        <span className="cssui-stats__value">{userData.institutionName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <footer className="cssui-usercard__footer">
              <a href="#0" className="cssui-social cssui-usercard__social">
                <i className="cssui-icon icon-twitter"></i>
                <span className="cssui-social__name">twitter</span>
              </a>
              <a href="#0" className="cssui-social cssui-usercard__social">
                <i className="cssui-icon icon-linkedin"></i>
                <span className="cssui-social__name">linkedin</span>
              </a>
              <a href="#0" className="cssui-social cssui-usercard__social">
                <i className="cssui-icon icon-codepen"></i>
                <span className="cssui-social__name">codepen</span>
              </a>
            </footer> */}
      </article>



    </>
  )
}

export default Profilecards
