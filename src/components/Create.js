import React from 'react';

import { Link } from "react-router-dom";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            email:""
         }
    }

    changeValue = (e) =>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
    }

    sendData = (e) =>{
        e.preventDefault();
        console.log("Submitted form");
        const{name, email}=this.state;
        console.log(name);
        console.log(email);

        var dataSend={name:name, email:email}

        fetch("https://localhost/employees/?insert=1", {
            method:"POST",
            body:JSON.stringify(dataSend)
        })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta);
            this.props.history.push("/");
        })

        .catch(console.log)
    }

    render() { 
        const{name, email}=this.state;
        return ( 
            <div className="card">
                <div className="card-header">
                    New Employee
                </div>
                <div className="card-body">
                    <form onSubmit={this.sendData}>
                        <div className="form-group">
                          <label htmlFor="">Name</label>
                          <input type="text" name="name" onChange={this.changeValue} value={name} id="name" className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Write the full name of the employee</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Email</label>
                          <input type="text" name="email" onChange={this.changeValue} value={email} id="email" className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Write the email of the employee</small>
                        </div>

                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Add new employee</button>
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