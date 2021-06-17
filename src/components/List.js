import React from 'react';

import { Link } from "react-router-dom";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    loadData(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{console.log(datosRespuesta)})
        .catch(console.log)
    }

    componentDidMount(){
        this.loadData();
    }

    render() { 
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
                <tr>
                    <td >1</td>
                    <td>Nicolas</td>
                    <td>ndalmas9@gmail.com</td>
                    <td>
                       <div className="btn-group" role="group" aria-label="">
                           <Link className="btn btn-warning" to={"/edit"}>Edit</Link>
                           <button type="button" className="btn btn-danger">Delete</button>
                       </div> 
                    </td>
                </tr>
            </tbody>
        </table>);
    }
}
 
export default List;