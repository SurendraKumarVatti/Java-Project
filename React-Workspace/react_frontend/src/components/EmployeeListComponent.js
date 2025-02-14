import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices';
import {Link} from 'react-router-dom'
export default class EmployeeListComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            employees:[]
        }
    }
    componentDidMount()
    {
        EmployeeServices.getAllEmployees().then((res)=>
        {
            this.setState({employees:res.data});
        }
        )
    }
    deleteEmployee=(employeeId)=>
    {
        EmployeeServices.deleteEmployee(employeeId).then((res)=>
        {
            EmployeeServices.getAllEmployees().then((res)=>
            {
                this.setState({employees:res.data})
            })
        })
        .catch(error=>
        {
            console.log(error)
        }
        )
    }
  render() {
    return (
      <div className='container mt-3'>
        <h4 className='text-center'>Employee List</h4>
        <div className='row mt-3'>
            <Link to="/add-employee" className='btn btn-primary mb-3'>Add Employees</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.employees.map((employee)=>
                    {
                        return <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link to={`/update-employee/${employee.id}`} className='btn btn-info'>Update</Link>
                                        <button className='btn btn-danger ms-3' onClick={()=>this.deleteEmployee(employee.id)}>Delete</button>
                                    </td>
                              </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
