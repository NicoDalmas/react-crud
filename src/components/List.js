import React from 'react';

import { Link } from "react-router-dom";

// https://jsonplaceholder.typicode.com/users
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadedData:false,
            employees: []
        }
    }

    loadData(){
        fetch("https://localhost/employees/")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta);
            this.setState({ loadedData:true, employees:datosRespuesta })
        })

        .catch(console.log)
    }

    componentDidMount(){
        this.loadData();
    }

    render() { 
        const{loadedData, employees}=this.state

        if(!loadedData){ return(<div>Cargando...</div>); }
        else{

            return (
                <div className="card">
                    <div className="card-header">
                        <Link className="btn btn-success" to={"/create"}>Create new employee</Link>
                    </div>
                    <div className="card-body">
                        <h4>Users List</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map(
                                    (employee)=>(
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                <Link className="btn btn-warning" to={"/edit"}>Edit</Link>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div> 
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">
                        Footer
                    </div>
                </div>
                );
        }
    }
}
 
export default List;