import React from 'react'
import { useState, useEffect } from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';
function UpdateEmployeeComponent() {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const {id}=useParams();
    const navigate=useNavigate();
    const cancelHandle=(e)=>
    {
        e.preventDefault();
        navigate("/employees");
    }
    const updateHandle=(e)=>
    {
        e.preventDefault();
        const employee={firstName,lastName,email};
        if(id)
        {
            EmployeeServices.updateEmployee(id,employee).then((res)=>
            {
                navigate("/employees");
            })
        }
        else
        {
            EmployeeServices.addEmployees(employee).then((res)=>
            {
                navigate("/employees");
            })
        }
    }
    useEffect(()=>{
        EmployeeServices.getEmployee(id).then((res)=>
        {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
        })
    },[])
  return (
    <div className='container'>
            <div className='row mt-2'>
                <div className='col-6 offset-md-3'>
                    <div className='card p-5'>
                        <h3 className='text-center'>Update Employee</h3>
                        <form>
                            <div className='form-group'>
                                <label className='my-3'>First Name:</label>
                                <input type="text" name="firstName" id="firstName" className='form-control' value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}/>

                                <label className='my-3'>Last Name:</label>
                                <input type="text" name="lastName" id="lastName" className='form-control' value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}/>

                                <label className='my-3'> Email:</label>
                                <input type="text" name="email" id="email" className='form-control' value={email}
                                onChange={(e)=>setEmail(e.target.value)}/>

                                <button className='btn btn-danger mt-5' onClick={cancelHandle}>cancel</button>
                                <button className='btn btn-success mt-5 ms-3' onClick={updateHandle}>save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default UpdateEmployeeComponent
