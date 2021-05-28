import React from 'react'

import aarogya_setu_logo from './assets/logos/aarogya_logo.png'
import DigiLocker_logo from './assets/logos/DigiLocker_logo.png'
import Umang_logo from './assets/logos/umang-logo-v1.png'
import cis_logo from './assets/logos/csclogo.jpeg'



import slider1 from './assets/slider1.jpg';
import slider2 from './assets/slider2.jpg';
import slider3 from './assets/slider3.jpg';
import slider4 from './assets/slider4.png';

function Home() {
    return (
        <div className="home">
            <div className="site-section hero">
                <div className="container">
                    <p><h1>Register for covid-19 <br></br>vaccination</h1></p>
                    <a href="#RegisterHelp" class="btn btn-outline-warning">
                      How to Register
                    </a>
                    <a href="https://selfregistration.cowin.gov.in/" class="btn btn-warning">
                      Register Now
                    </a>
                    
                </div>
            </div>

            <marquee  scrollamount="10"><h3>Register yourself for covid-19 vaccinaion</h3> </marquee>
                
            
            
            <div className="site-section symptoms">
              
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Covid-19 Symptoms</h2><br />
                            <div className="row ">
                                <div className="col-md-4 symptom-box">
                                <div className="fever">Fever</div>
                                </div>
                                <div className="col-md-4 symptom-box">
                                <div className="cough ">Cough</div>
                                </div>
                                <div className="col-md-4 symptom-box">
                                <div className="breathing-difficulty ">Breathing Difficulty</div>
                                </div>
                                <div className="col-md-4 symptom-box">
                                <div className="Tiredness">Tiredness</div>
                                </div>
                                <div className="col-md-4 symptom-box">
                                <p className="Taste-smell" style={{paddingTop:'4px' ,paddingLeft:'8px'}}>Loss of Taste & Smell</p>
                                </div>
                            </div><br /><br />                                                                                    
                        </div>   
                        
                        <div className="col-md-6">                            
                            <div class="contact-card">                                         
                                <div className="help">
                                    <p>If you experience any symptoms related to COVID-19</p>
                                    <h4>Call</h4>                                   
                                    <div className="tollfree-num"><h3><i class="fas fa-phone-alt"></i></h3><h1>1075</h1><br />
                                    <h6>(Toll Free)</h6>
                                    </div>
                                    
                                    <div className="helpline-num"><h6>Helpline Number : +91-11-23978046</h6></div>
                                </div>                               
                            </div>                            
                        </div>
                    </div><br /><br />
                </div>                                
            </div>


            <div className="site-section">
                <div className="container">
                    <div className="section-titl"><h3>We Advice you</h3></div><br /><br />
                    <div className="row">
              
                        <div className="col-md-6 col-sm-12">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={slider1} class="d-block w-100" alt="..."/>        
                                    </div>
                                    <div class="carousel-item">
                                    <img src={slider2} class="d-block w-100" alt="..."/>    
                                    </div>
                                    <div class="carousel-item">
                                    <img src={slider3} class="d-block w-100" alt="..."/> 
                                    </div>
                                    <div class="carousel-item">
                                    <img src={slider4} class="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>


                        <div className="col-md-6"><br /><br />
                            <div className="row advice">
                                <div className="col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                        <p class="card-text">Wash your hands regulary with soap and water</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                        <p class="card-text">Practice social distancing</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                        <p class="card-text">Wear proper face mask</p><br />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                        <p class="card-text">Take proper vaccine<br/></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                        <p class="card-text">Cover your mouth and nose while sneezing </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                        <p class="card-text">Follow the guidelines given by the health department</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        
                      

                        </div>
                    </div>
                </div>
            </div>
            
            
            
            <div className="site-section2 partners">
                <div className="container">
                    <div className="section-title"><h2>Meet Our Partners</h2></div><br /><br />
                    <div className="row">
                        <div className="col-md-3 col-sm-6 partner-logo">
                            <a href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu">
                                <img class="img-fluid" src={aarogya_setu_logo} alt="aarogya setu logo" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 partner-logo">
                            <a href="https://play.google.com/store/apps/details?id=com.digilocker.android">
                                <img class="img-fluid"  src={DigiLocker_logo} alt="DigiLocker logo" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 partner-logo">
                            <a href="https://web.umang.gov.in/web_new/login?redirect_to=department%3Furl%3Dcowin%2F%26dept_id%3D355%26dept_name%3DCo-WIN">
                                <img class="img-fluid Umang-logo"  src={Umang_logo} alt="Umang logo" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 partner-logo">
                            <a href="https://digitalseva.csc.gov.in/">
                                <img class="img-fluid cis-logo" src={cis_logo} alt="cis-logo" />
                            </a>
                        </div>

                    </div><br /><br />
                </div>


            
            
            
            
            
            
            
            </div>





        </div>
    )
}

export default Home
