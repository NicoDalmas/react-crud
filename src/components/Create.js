import React from 'react';

import { Link } from "react-router-dom";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
                <div className="card-header">
                    New Employee
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                          <label htmlFor="">Name</label>
                          <input type="text" name="name" id="name" className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Write the full name of the employee</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Email</label>
                          <input type="text" name="email" id="email" className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Write the email of the employee</small>
                        </div>

                        <div className="btn-group" role="group" aria-label="">
                            <button type="button" className="btn btn-success">Add new employee</button>
                            <Link to={"/"} className="btn btn-cancel">Cancel</Link>
                        </div>
                    </form>

                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
         );
    }
}
 
export default Create;