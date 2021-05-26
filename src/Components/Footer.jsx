import React from "react";
import logo1 from './assets/logos/undp-logo-white.png'
import logo2 from './assets/logos/digital-india-logo1.png'
import logo3 from './assets/logos/data-gov-logo2.png'
import logo4 from './assets/logos/india-gov-logo3.png'
import logo5 from './assets/logos/meity_logo4.png'
import logo6 from './assets/logos/pm-india-logo5.png'
import logo7 from './assets/logos/esampark6.png'
import logo8 from './assets/logos/mygov-footerlogo7.png'

function Footer() {
  return (
    <div className="footer ">
        <div className="container"><br />
          <h5>Useful links:</h5><br />
          <div className="row">
            <div className="col-md-1  logos">
                <a href="#">
                  <img src={logo1} alt="digital-india-logo" />
                </a>
            </div>
            <div className="col-md-1  logos">
                <a href="https://digitalindia.gov.in/">
                  <img src={logo2} alt="digital-india-logo" />
                </a>
            </div>
            <div className="col-md-1  logos">
                <a href="https://data.gov.in/">
                  <img src={logo3} alt="data-gov-logo" />
                </a>
            </div>
            <div className="col-md-1  logos">
                <a href="https://www.india.gov.in/">
                  <img src={logo4} alt="india-gov-logo" />
                </a>
            </div>
            <div className="col-md-1 logos">
                <a href="https://www.meity.gov.in/">
                  <img src={logo5} alt="meirty-logo" />
                </a>
            </div>
            <div className="col-md-1 logos">
                <a href="https://www.pmindia.gov.in/en/">
                  <img src={logo6} alt="india-gov-logo" />
                </a>
            </div>
            <div className="col-md-1 logos">
                <a href="https://www.india.gov.in/">
                  <img src={logo7} alt="india-gov-logo" />
                </a>
            </div>
            <div className="col-md-1 logos">
                <a href="https://www.india.gov.in/">
                  <img src={logo8} alt="india-gov-logo" />
                </a>
            </div>
          </div>


          <hr/>
          <div className="row footer2">
              Ministry of Health and Family Welfare, Govt. of India <br /><br />
          </div>

        </div>
    </div>
  );
}

export default Footer;