import React, { useState } from 'react';
import { addData } from '../../services/postData';

const Form = () => {
    const [employee, setEmployee] = useState({});

    const handleOnChangeData = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
        console.log(employee);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(employee) 
    };

    return (
        <div className="container vh-100 ">
            <div className="row d-flex justify-content-center mt-5 pt-5">
                <div className="col-xxl-8">
                    <p className='fs-2 my-5 text-primary'>Create Or Add Employee</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Employee Name</label>
                            <input type="text" name="name" onChange={handleOnChangeData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' onChange={handleOnChangeData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Employee_Id</label>
                            <input type="password" name='id' onChange={handleOnChangeData} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
