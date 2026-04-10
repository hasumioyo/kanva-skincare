// import { forwardRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import './css/navbar.css';
import { useEffect, useRef } from 'react';
import Header from "./home/header";


const Navbar = () => {
    const navbarRef = useRef(null);
    const headerRef = useRef(null);
    const locations = useLocation();

    useEffect(() => {
        const navbar = navbarRef.current;
        const SectionOne = headerRef.current;

        const SectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px",
            "/": "-200px 0px 0px 0px",
            "/shop": "-100px 0px 0px 0px",
        }

        const SectionOneObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry) => {
            console.log(entry.target);
            if(!entry.isIntersecting) {
                navbar.classList.add("navbar-scrolldown");
            } else {
                navbar.classList.remove("navbar-scrolldown");
            }
        });
        
    }, SectionOneOptions);
        if (SectionOne) {
            SectionOneObserver.observe(SectionOne);
        };

        return () => {
            if (SectionOne) {
                SectionOneObserver.unobserve(SectionOne);
            }
        };
    }, [locations.pathname]);

    const navbarsrunning = () => {
        if (locations.pathname === "/") {
            return <Header ref={headerRef}/>;
        }
        if (locations.pathname === "/shop") {
            const colornavbar = document.querySelector('.navbar-scrolldown');
            if(colornavbar) {
                colornavbar.classList.add('whitening')
            }
            return <Header ref={headerRef}/>;
        }
        return null;
    };


    return (
        <>
        <nav className="navbar" ref={navbarRef}>
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
        {navbarsrunning()}
        </>
    );
}

export default Navbar;  