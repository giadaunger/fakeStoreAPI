import React from 'react';
import { Link } from 'react-router-dom'
import './cssComponents/Navbar.css'
import logo from '../components/logo.png'


function Navbar() {
    return(
        <header>
            <div>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <ul>
                <li>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>

                <li>
                    <Link to='/products' className='nav-link'>Products</Link>
                </li>

                <li>
                    <Link to='/login' className='nav-link'>Log in</Link>
                </li>

                <li>
                    <Link to='/cart' className='nav-link'>Cart</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;