import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"
import Image3 from "../assets/3.jpg"
import "../css/shop/section2.css"


const Section2 = () => {
    return (
        <>
            <div className="section-content-2-shop">
                <div className="a-line"></div>
                <div className="product-shop">
                    <div className="section2-product-shop">
                        <div className="covers-product-shop">
                            <img src= {Image1} className="image-product-shop"></img>
                        </div>
                            <h3 className="section2-title-product-shop">Hydrating Serum</h3>
                            <p className="section2-product-price-shop">24$</p>
                            <p className="see-pro-shop">See Product</p>
                    </div>
                    <div className="section2-product-shop">
                        <div className="covers-product-shop">
                            <img src= {Image2} className="image-product-shop"></img>
                        </div>
                            <h3 className="section2-title-product-shop">Balancing Toner</h3>
                            <p className="section2-product-price-shop">24$</p>
                            <p className="see-pro-shop">See Product</p>
                    </div>
                    <div className="section2-product-shop">
                        <div className="covers-product-shop">
                            <img src= {Image3} className="image-product-shop"></img>
                        </div>
                            <h3 className="section2-title-product-shop">Gentle Cleanser</h3>
                            <p className="section2-product-price-shop">24$</p>
                            <p className="see-pro-shop">See Product</p>
                    </div>
                    <div className="section2-product-shop">
                        <div className="covers-product-shop">
                            <img src= {Image1} className="image-product-shop"></img>
                        </div>
                            <h3 className="section2-title-product-shop">Hydrating Serum</h3>
                            <p className="section2-product-price-shop">24$</p>
                            <p className="see-pro-shop">See Product</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2;