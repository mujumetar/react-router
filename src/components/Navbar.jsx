import React from 'react'

import { Link, useNavigate, NavLink } from "react-router-dom"

const Navbar = ({ login, setLogin }) => {


    const navigate = useNavigate()

    console.log(login)
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">

            <div class="container">
                <h1 class="navbar-brand">React-Router</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        JSON.parse(sessionStorage.getItem("login")) ? (
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link"  >
                                        <NavLink className={({ isActive }) => isActive ? "text-danger text-decoration-none fw-bold" : "text-decoration-none text-dark"} to='/home'> Home </NavLink>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link" >
                                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-danger text-decoration-none fw-bold" : "text-decoration-none text-dark"}>About</NavLink>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link " >
                                        <NavLink to='/product' className={({ isActive }) => isActive ? "text-danger text-decoration-none fw-bold" : "text-decoration-none text-dark"}>Products</NavLink>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link text-decoration-none" >
                                        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-danger text-decoration-none fw-bold" : "text-decoration-none text-dark"}>contact</NavLink>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <button onClick={() => { sessionStorage.setItem("login", JSON.stringify(false)); navigate('/') }} className='btn btn-danger btn-sm ms-auto'>Log-out 👤</button>
                                </li>
                            </ul>
                        ) : (
                            <button className='btn btn-secondary ms-auto'>Login 👤</button>
                        )
                    }


                </div>
            </div>
        </nav>

    )
}

export default Navbar