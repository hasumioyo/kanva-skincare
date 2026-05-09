
import "../css/shop/section1.css";
import { useState } from "react";

const Section1 = () => {
    const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
    return (
        <>

            <div className="section-content-1-shop">
                <div className="shop-titles">
                <h2 className="filter-title-shop">Filter</h2>
                <h2 className="productline-title-shop">Product Line</h2>
                </div>
                <div className="shop-line"></div>
                <div className="price-section">
                    <h2 className="price-title-shop">Price</h2>
                    <h4 className="prices">Rp 0 - 1.000.000</h4>
                    <div className="container">
                        <input type="range" className="slider" id="slider-price" min="0" max="100" value={value} onChange={handleChange} style={{
                            background: `linear-gradient(to right, #56584E ${value}%, #d5d5d5 ${value}%)`}} />
                    </div>
                </div>
                <div className="shop-line"></div>
                <div className="options-shop">
                    <a href="" className="aa">All Products</a>
                    <a href="" className="aa">Pre-Order</a>
                    <a href="" className="aa">Bundle</a>
                    <a href="" className="aa">Available Stock</a>
                </div>
                <div className="shop-line"></div>
                <div className="rating-shop">
                <form>
                    <h2 className="rating-title-shop">Rating</h2>
                    <div className="stars-rate">
                        <input type="radio" id="rating" name="rating" value="All" checked/>
                        <label htmlFor="age1" className="label1">All</label><br />
                    </div>
                    <div className="stars-rate">

                        <input type="radio" id="rating" name="rating" value="All" />
                        <label htmlFor="age1">
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked "></i>
                            <i class="fa-solid fa-star checked"></i>
                        </label><br />
                    </div>
                    <div className="stars-rate">
                        <input type="radio" id="rating" name="rating" value="All" />
                        <label htmlFor="age1">
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star"></i>
                        </label><br />
                    </div>
                    <div className="stars-rate">
                        <input type="radio" id="rating" name="rating" value="All" />
                        <label htmlFor="age1">
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </label><br />
                    </div>
                    <div className="stars-rate">
                        <input type="radio" id="rating" name="rating" value="All" />
                        <label htmlFor="age1">
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </label><br />
                    </div>
                    <div className="stars-rate">
                        <input type="radio" id="rating" name="rating" value="All" />
                        <label htmlFor="age1">
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </label>
                    </div>
                </form>
                </div>
            </div>
        </>
    );
}

export default Section1;
