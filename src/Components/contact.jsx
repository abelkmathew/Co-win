import React from 'react'

function Contact() {
    return (
        <div>
            <div className="site-section contact">
              <div className="container">
                <div className="section-title"><h2>Contact Us</h2></div><br /><br />
                <div ><h6>Have something to convey</h6></div>
                <div className="Text-Bold"><h2>Feel free to contact us</h2></div>
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                  </div>
                  <div className="col-md-6">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                  </div> <br/>
                </div>
                <div className="col-md-12">
                  <br/><label>Phone Number:</label>
                  <input type="number" className="form-control" id="number" placeholder="Mobile number"/><br/>
                </div>
                <div className="col-md-12">
                  <label>Email Id:</label>
                  <input type="email" className="form-control" id="inputEmail3" placeholder="name@gmail.com"/><br/>
                </div>
                <div className="col--md-12">
                  <label>Message</label>
                  <textarea className="form-control" rows="5" id="" placeholder="Type a message..."></textarea> <br/>
                </div>
                <div className="col-md-12 button">
                  <button type="submit" className="btn btn-warning">Send Message</button><br /><br /><br />
                </div>
              </div>
          </div>
        </div>
    )
}

export default Contact
