import React from 'react'
import axios from 'axios'
import {useState} from 'react'

function Statistics() {
const [state,setState] = useState([])

    return (
        <div>
            <div className="site-section">
                <div className="container">
                    <label htmlFor="">Search By Pin</label><br /><br />
                    <input type="text" class="form-control" placeholder="Enter Pincode" maxlength="6" size="6"/><br />
                    <button onClick={()=>{
                        axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states').then((response)=>{
                            console.log(response.data)
                            setState(response.data)
                        })
                    }} type="submit" className="btn btn-warning ">Submit</button>
                    {
                        state.map((obj,index)=>{
                            return(
                                <div>
                                    <h1>{index}</h1>
                                    <h4>{obj.state}</h4>
                                </div>
                            )
                        })
                    }
        
                    <br /><br />
                    <label htmlFor="">Search By District</label><br /><br />
                    <input type="text" class="form-control" placeholder="Enter Pincode"/>
                </div>
            </div>
        </div>
    )
}
export default Statistics
