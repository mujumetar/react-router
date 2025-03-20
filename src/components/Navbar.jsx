import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container py-2">
                    <a className="navbar-brand">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page">
                                    <Link to="/home" className='text-decoration-none text-white' >Home</Link > </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/product" className='text-decoration-none text-white'>Products</Link >
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"> <Link to="/about" className='text-decoration-none text-white' >About</Link ></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"> <Link to="/contact" className='text-decoration-none text-white'>Contact</Link ></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar