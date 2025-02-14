import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import EmployeeServices from '../services/EmployeeServices'
function CreateEmployeeComponent() {
    let navigate=useNavigate();
    const cancelHandle=(e)=>
    {
        e.preventDefault();
        navigate("/employees");
    }
    const [employee,setState]=useState({
        firstName:"",
        lastName:"",
        email:""
    })
    const handleChange=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setState({...employee,[name]:value})
    }
    const saveHandle=(e)=>
    {
        e.preventDefault();
        console.log(JSON.stringify(employee))
        EmployeeServices.addEmployees(employee).then((res)=>
        {
            navigate("/employees")
        }
        )
    }
  return (
    <div className='container'>
            <div className='row mt-2'>
                <div className='col-6 offset-md-3'>
                    <div className='card p-5'>
                        <h3 className='text-center'>Add Employee</h3>
                        <form>
                            <div className='form-group'>
                                <label className='my-3'>First Name:</label>
                                <input type="text" name="firstName" id="firstName" className='form-control' value={employee.firstName}
                                onChange={handleChange}/>

                                <label className='my-3'>Last Name:</label>
                                <input type="text" name="lastName" id="lastName" className='form-control' value={employee.secondName}
                                onChange={handleChange}/>

                                <label className='my-3'> Email:</label>
                                <input type="text" name="email" id="email" className='form-control' value={employee.email}
                                onChange={handleChange}/>

                                <button className='btn btn-danger mt-5' onClick={cancelHandle}>cancel</button>
                                <button className='btn btn-success mt-5 ms-3' onClick={saveHandle}>save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}
export default CreateEmployeeComponent
