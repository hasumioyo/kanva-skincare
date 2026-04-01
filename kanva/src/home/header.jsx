import { forwardRef } from "react"
import '../css/header.css'
import New from '../assets/New.png'

const Header = forwardRef((props, ref) => {
    return (
        <>
            {/* Header */}
            <header ref={ref} className='home-header'>
                <div className="headers">
                    <h1 className="header-title">
                        The Health of Your Skin
                    </h1>
                    <div className="header-button">
                        <p className="button-header-name">Explore More</p>
                        <button className="explore-icon">
                            <i class="fa-solid fa-arrow-down"></i>
                        </button>
                    </div>
                </div>
                <div className="new-product">
                    <img src= {New} className="new-products"></img>
                    <div className="desc-new">
                        <h2 className="new-pro-title">New Product Is Here</h2>
                        <p className="new-pro-desc">Kanva Hydrating Serum is formulated to support your skin’s natural balance. Lightweight, fast-absorbing, and suitable for daily use.</p>
                        <div className="buttons-right">
                            <button className="button-new-pro">Buy Now</button>
                        </div>
                    </div>
                </div>  
                <div className="social-media">
                    <button className="social"><i class="fa-brands fa-instagram"></i></button><br />
                    <button className="social"><i class="fa-brands fa-facebook-f"></i></button> <br />
                    <button className="social"><i class="fa-brands fa-tiktok"></i></button><br />
                    <div className="a-line"></div>
                </div>
            </header>
        </>
    );
    
});

export default Header;