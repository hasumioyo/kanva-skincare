// import { forwardRef } from "react";
import { Link } from 'react-router-dom';
import './css/navbar.css'


const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className='nav-2'>
                <div className="navbar-brand">
                    <a href="#logo" className='logo-title'>kanva</a>
                </div>
                <div className="navbar-nav">
                    <p className="nav-text">Home</p>
                    <p className="nav-text">Products</p>
                    <p className="nav-text">Blog</p>
                    <p className="nav-text">About Us</p>
                </div>
            </div>
            <div className='nav-1'>
                <div className="navbar-icons">
                    <p className='nav-icons'><i class="fa-solid fa-cart-shopping"></i></p>
                    <p className='nav-icons'><i class="fa-regular fa-heart"></i></p>
                    
                </div>
                <div className='navbar-sign'>
                    <p className='nav-signbutton-1'>Sign In</p>
                    <p className='nav-signbutton-2'>Sign Up</p>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;