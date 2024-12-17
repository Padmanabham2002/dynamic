import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg p-3 ">
            <div className="container-fluid fw-bold">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fw-bold" id="navbarNav">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item fw-bold">
                            <NavLink to='/' className='nav-link  ' >Home</NavLink>
                                  
                        </li>
                        <li className="nav-item">
                              <NavLink to='/about'className='nav-link ' >About</NavLink>
                        </li>
                        <li className="nav-item">
                               <NavLink to='/contact'className='nav-link' >Contact</NavLink>
                        </li>
                        <li className="nav-item">
                               <NavLink to='/products' className='nav-link' >Products</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar