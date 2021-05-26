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
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" data-bs-dismiss="main-menu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="main-menu collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
                            <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                                <Link className="nav-link" to="/">HOME</Link></li>
                            <li className={`nav-item  ${props.location.pathname === "/Statistics" ? "active" : ""}`}>
                                <Link className="nav-link" to="/Statistics">CHECK AVAILABILITY</Link></li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="https://admin.cowin.gov.in/login">DEPARTMENT LOGIN</a> </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://app.cowin.gov.in/login" >VACCINATOR</a></li>    
                            <li className={`nav-item  ${props.location.pathname === "/faq" ? "active" : ""}`}>
                                <Link className="nav-link" to="/faq">VERIFY CERTIFICATE</Link></li>      
                            <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        HELP
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><a class="dropdown-item" href="#">Guidelines</a></li>
                                        <li><a class="dropdown-item" href="#">FAQ</a></li>
                                        <li><a class="dropdown-item" href="#">How to Register</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                    </ul>
                                </li>

                            <li className={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
                                <Link className="nav-link loginicon " to="/login"><a className="loginbtn btn " 
                                >LOGIN/REGISTER</a></Link></li>
                        </ul>                       
                    </div>
                </div>            
            </nav>            
            </div>
        </div>
    )
}

export default withRouter(Navbar);
