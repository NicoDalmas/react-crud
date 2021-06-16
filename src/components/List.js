import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Nicolas</td>
                    <td>ndalmas9@gmail.com</td>
                </tr>
            </tbody>
        </table>);
    }
}
 
export default List;