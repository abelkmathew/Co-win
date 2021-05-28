import React from 'react'
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {


    return (
        <div className="menu">
            <div className="site-header fixed-top ">
            <nav id='primary-navigation' className="navbar navbar-expand-lg navbar-light nav-pills nav-fill">
            
                <div className="container">
            
                    <div className="navbar-header navbar-brand">  
                        <div className="nav-item" >        
                            <a href="/home">C<span>o</span>-WIN</a> 
                            <p>Winning Over Covid-19</p>
                        </div>   
                    </div>

                    <div className="mobile-menu-icon">
                        <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" data-bs-dismiss="collapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="main-menu collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 " >
              
                            <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`} >
                                <Link className="nav-link" to="/">HOME</Link></li>
                            <li className={`nav-item  ${props.location.pathname === "/Statistics" ? "active" : ""}`} >
                                <Link className="nav-link" to="/Statistics">CHECK AVAILABILITY</Link></li>
                            
                            <li className="nav-item" > 
                                <a className="nav-link" href="https://admin.cowin.gov.in/login">DEPARTMENT LOGIN</a> </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="https://app.cowin.gov.in/login" >VACCINATOR</a></li>    
                            <li className="nav-item" >
                                <a className="nav-link" href="https://verify.cowin.gov.in/" >VERIFY CERTIFICATE</a></li>    
                            <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        HELP
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li className={`${props.location.pathname === "/faq" ? "active" : ""}`}>    
                                            <Link className="dropdown-item" to="/faq">GUIDELINES</Link></li>
                                        <li className={`${props.location.pathname === "/faq" ? "active" : ""}`}>    
                                            <Link className="dropdown-item" to="/faq">FAQ</Link></li>
                                        <li className={`${props.location.pathname === "/RegisterHelp" ? "active" : ""}`} >    
                                            <Link className="dropdown-item" to="/RegisterHelp">HOW TO REGISTER</Link></li>
                                        
                                        <li><hr class="dropdown-divider"/></li>
                                        <li className={`${props.location.pathname === "/Contact" ? "active" : ""}`} >    
                                            <Link className="dropdown-item" to="/Contact">CONTACT </Link></li>
                                    </ul>
                                </li>

                            <li className="nav-item">
                                <div className="nav-link loginicon ">
                                    <a className="loginbtn btn" href="https://selfregistration.cowin.gov.in/" >LOGIN/REGISTER</a>
                                    </div></li>
                        </ul>              
                    </div>
                </div>            
            </nav>            
            </div>
        </div>
    )
}

export default withRouter(Navbar);
