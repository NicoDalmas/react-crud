import React from 'react';

import { Link } from "react-router-dom";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadedData:false,
            employees: []
        }
    }

    loadData(){
        fetch("https://jsonplaceholder.typicode.com/users")
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
            return ( <table className="table">
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
            </table>);
        }
    }
}
 
export default List;