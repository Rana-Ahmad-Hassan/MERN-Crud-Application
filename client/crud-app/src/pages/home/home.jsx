import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    
    return (
        <>
            <div className='vh-100 border'>
                <div className="container mt-5 h-100">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xxl-10 col-xl-12 col-lg-8 col-md-12 col-sm-12 col-12 text-center mt-5 pt-5">
                            <h1 className='fw-bold display-4 text-primary'>Welcome to the CRUD_APPLICATION</h1>

                            <p className='fs-5 '>You can add delete edit or Read your employess over here</p>
                            <NavLink to={"/create"}>
                            <button className='btn btn-primary btn-lg my-5'>Add Employee</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home