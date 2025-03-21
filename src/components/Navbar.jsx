import React from 'react'

import { Link, useNavigate } from "react-router-dom"

const Navbar = ({ login, setLogin }) => {


    const navigate = useNavigate()

    console.log(login)
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">

            <div class="container">
                <a class="navbar-brand" href="#">React-Router</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        JSON.parse(sessionStorage.getItem("login")) ? (
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active"  >
                                        <Link to='/home' className='text-decoration-none text-dark'> Home </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link" >
                                        <Link to='/about' className='text-decoration-none text-dark'>About</Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link " >
                                        <Link to='/product' className='text-decoration-none text-dark'>Products</Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link text-decoration-none" >
                                        <Link to='/contact' className='text-decoration-none text-dark'>contact</Link>
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