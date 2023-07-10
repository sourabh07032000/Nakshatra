
import React from 'react'

const Kundali_form = () => {
  return (
    <>
      {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadscrumb-contain">
                        <h2>Kundli</h2>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Fresh Vegetable Section Start --> */}
    <section className="fresh-vegetable-section section-lg-space">
        <div className="container-fluid-lg">
            <div className="title" style={{padding: "5px"}}>
                <div className="row">
                    <div  className="col-lg-3">
                   
                <img className="img2" src="../assets/images/logo/kun.jpg" alt="aries" width="170" height="170"/></div>
                <div  className="col-lg-9">
                <h2>Kundli</h2>
                <p >Kundli is an astrological chart which shows the exact position of heavenly bodies and planets at a particular time. Janam Kundli or Horoscope is a similar astrological chart that is constructed by Vedic astrologers on the basis of the exact birthdate, birthplace and birth time of an individual.</p>
            </div>
                </div>
            </div>

        </div>
    </section>
    {/* <!-- Fresh Vegetable Section End --> */}

    {/* <!-- Client Section Start --> */}
    <section className="client-section section-lg-space">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="about-us-title text-center">
                        
                        <h2 className="center">Get Your free Janam Kundli</h2>
                    </div>

                      <div className="col-lg-12">
                    
                    <div className="right-sidebar-box">
                        <div className="row">
                            <div className="col-xxl-6 col-lg-6 col-sm-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput" className="form-label">Name</label>
                                    <div className="custom-input">
                                        <input type="text" className="form-control" id="exampleFormControlInput"
                                            placeholder="Enter Your Name"/>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-6 col-sm-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput1" className="form-label">Gender</label>
                                    <div className="custom-input">
                                        <select className="form-control" id="exampleFormControlInput1">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-6 col-sm-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput2" className="form-label">Date of Birth</label>
                                    <div className="custom-input">
                                        <div style={{width: "100%"}}>
                                        <select style={{width: "32%", height: "45px"}}><option>Date</option></select>
                                        <select style={{width: "32%", height: "45px"}}><option>Month</option></select>
                                        <select style={{width: "32%", height: "45px"}}><option>Year</option></select>
                                    
                                        
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-6 col-sm-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput3" className="form-label">Birth Time</label>
                                    <div className="custom-input">
                                        <div style={{width: "100%"}}>
                                        <select style={{width: "32%", height: "45px"}}><option>Hour</option></select>
                                        <select style={{width: "32%", height: "45px"}}><option>Minute</option></select>
                                        <select style={{width: "32%", height: "45px"}}><option>AM</option><option>PM</option></select>
                                    
                                        
                                        
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-6 col-sm-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput" className="form-label">Birth Place</label>
                                    <div className="custom-input">
                                        <input type="text" className="form-control" id="exampleFormControlInput"
                                            placeholder="Enter Place of birth"/>
                                        
                                    </div>
                                </div>
                            </div>
                             <div className="col-xxl-6 col-lg-6 col-sm-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    
                                    <div className="custom-input">
                                       <button className="btn btn-animation btn-md fw-bold ms-auto">Get Your Kundli</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Client Section End --> */}

    </>
  )
}

export default Kundali_form