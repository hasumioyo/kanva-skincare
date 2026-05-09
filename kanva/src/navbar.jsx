// import { forwardRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import './css/navbar.css';
import { useEffect, useRef } from 'react';
import Header from "./home/header";
import Emptybox from "./shop/emptybox"
import Shop from './pages/shop';


const Navbar = () => {
    const navbarRef = useRef(null);
    const headerRef = useRef(null);
    const shopRef = useRef(null);
    const locations = useLocation();

    useEffect(() => {
        const navbar = navbarRef.current;
        const SectionOne = headerRef.current;
        const SectionShop = shopRef.current;
    
        const options = {
            rootMargin: "-200px 0px 0px 0px",
            "/": "-200px 0px 0px 0px",
            "/shop": "-50px 0px 0px 0px",
        }

        const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry) => {
            console.log(entry.target);
            if(!entry.isIntersecting) {
                navbar.classList.add("navbar-scrolldown");
                
            } else {
                navbar.classList.remove("navbar-scrolldown");
            }
        });
        
    }, options);
        if (SectionOne) {
            observer.observe(SectionOne);
        };

        if (SectionShop) {
            observer.observe(SectionShop);
        };

        return () => {
            if (SectionOne) {
                observer.unobserve(SectionOne);
            };
            if (SectionShop) {
                observer.unobserve(SectionShop);
            }
        };

        

    }, [locations.pathname]);

    const navbarsrunning = () => {
        if (locations.pathname === "/") {
            return <Header ref={headerRef}/>;
        }
        if (locations.pathname === "/shop") {
            return <Emptybox ref={shopRef}/>; //supaya tidak double
            // const colornavbar = document.querySelector('.navbar-scrolldown');
            
            
            // if(colornavbar) {
            //     colornavbar.classList.add('whitening')
            
            // }
            // return <Header ref={headerRef}/>;
            
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
                    <Link to="/" className="nav-text"><p>Home</p></Link>
                    <Link to="/shop" className="nav-text"><p>Products</p></Link>
                    <Link to="/blog" className="nav-text"><p>Blog</p></Link>
                    <Link to="/about-us" className="nav-text"><p>About Us</p></Link>
                </div>
            </div>
            <div className='nav-1'>
                <div className="navbar-icons">
                    <p className='nav-icons'><i class="fa-solid fa-cart-shopping"></i></p>
                    <p className='nav-icons'><i class="fa-regular fa-heart"></i></p>
                    
                </div>
                <div className='navbar-sign'>
                    <p className='nav-icons'><i class="fa-regular fa-user"></i></p>
                    <p className='nav-signbutton-1'>Sign In</p>
                    {/* <p className='nav-signbutton-2'>Sign Up</p> */}
                </div>
            </div>
        </nav>
        {navbarsrunning()}
        </>
    );
}

export default Navbar;  