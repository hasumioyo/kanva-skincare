// import { forwardRef } from "react";
import { Link } from 'react-router-dom';
import './css/navbar.css'


const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="#logo" className='logo-title'>kanva</a>
            </div>
            <div className="navbar-nav">
                <p className="nav-text">Home</p>
                <p className="nav-text">Products</p>
                <p className="nav-text">Blog</p>
                <p className="nav-text">About Us</p>
            </div>
            <div className='navbar-sign'>
                <p className='nav-sign-button'>Sign Up</p>
                <p className='nav-sign-button'>Sign In</p>
            </div>
        </nav>
        </>
    );
}

export default Navbar;