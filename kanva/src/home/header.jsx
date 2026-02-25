import { forwardRef } from "react"
import '../css/header.css'

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
                    <img src="/kanva/src/assets/New.png" alt="" />
                    <div className="desc-new">
                        <h2 className="new-pro-title">New Product Is Here</h2>
                        <p className="new-pro-desc">Kanva Hydrating Serum is formulated to support your skin’s natural balance. Lightweight, fast-absorbing, and suitable for daily use.</p>
                        <div className="buttons-right">
                            <button className="button-new-pro">Buy Now</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
    
});

export default Header;