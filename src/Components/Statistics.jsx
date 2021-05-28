import React from 'react'

function Statistics() {


    return (
        <div>
            <div className="site-section">
                <div className="container">
                    <label htmlFor=""><h5>Search By Pin</h5></label><br /><br />
                    <input type="text" class="form-control" placeholder="Enter Pincode" maxlength="6" size="6"/><br />
                    <button type="submit" className="btn btn-warning ">Submit</button>
        
                    <br /><br />
                    <h5>Search by State</h5>
                    <div className="row">
                        <div className="col-md-4">
                            <h6>Select State</h6>
                            <select name="district" id="district">
                                <option value="Null state">Select State</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Api Call">Other States(API call)</option>
                            </select><br /><br />
                        </div>
                        <div className="col-md-4">
                                <h6>Select District</h6>
                            <select name="district" id="district">
                                <option value="Null district">Select District</option>
                                <option value="Api Call">Other District(API call)</option>
                            </select>
                        </div>
                    </div><br />
                    <button type="submit" className="btn btn-warning ">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Statistics
