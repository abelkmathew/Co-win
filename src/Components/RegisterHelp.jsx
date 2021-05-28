import React from 'react'


function RegisterHelp() {
    return (
        <div>
            <div className="site-section register-help">
                <div className="container">
                    <div className="section-title"><h2>How to Register ?</h2></div><br /><br />
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card" >
                                <div className="icons"><i className="fas fa-file-invoice"></i></div>
                                <div className="card-body"><br />
                                    <h5 className="card-title">REGISTER YOURSELF</h5><br />
                                    <p className="card-text">Register using your Mobile no. or Aadhar no. or any other identity docs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" >
                            <div className="icons"><i className="far fa-hospital"></i></div>
                                <div className="card-body"><br />
                                    <h5 className="card-title">CHOOSE VACCINE CENTER</h5><br />
                                    <p className="card-text">Select your Vaccine Center for vaccination</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" >
                            <div className="icons"><i className="fas fa-clipboard-check"></i></div>
                                <div className="card-body"><br />
                                    <h5 className="card-title">CONFIRM YOUR SLOT</h5><br />
                                    <p className="card-text">Book your slot to get Vaccine</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" >
                            <div className="icons"><i className="fas fa-question"></i></div>
                                <div className="card-body"><br />
                                    <h5 className="card-title">ANY QUESTIONS?</h5><br />
                                    <p className="card-text">Please check Frequently asked questions(<a href="#faq">FAQ</a>)</p>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><h3>Still confused !!!</h3><br />
                    <h4>Watch this video to get a better understanding</h4><br />
                    <div className="yt_video">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/io-oreIAuTM" title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div><br /><br />
                </div>
            </div>
        </div>
    )
}

export default RegisterHelp
