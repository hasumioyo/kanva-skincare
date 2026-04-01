import "../css/section2.css"
import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"
import Image3 from "../assets/3.jpg"

const Section2 = () => {
    return (
        <>
        <section className="section-content-2">
            <h2 className="section2-title">Our Products</h2>
            <div className="section2-list-product">
                <div className="section2-product">
                    <div className="covers-product">
                        <img src= {Image1} className="image-product"></img>
                    </div>
                    <h3 className="section2-title-product">Kanva Hydrating Serum</h3>
                    <p className="section2-product-price">24$</p>
                    <p className="learn-more">Learn More</p>
                </div>
                <div className="section2-product">
                    <div className="covers-product">
                        <img src= {Image2} className="image-product"></img>
                    </div>
                    <h3 className="section2-title-product">Kanva Balancing Toner</h3>
                    <p className="section2-product-price">20$</p>
                    <p className="learn-more">Learn More</p>
                </div>
                <div className="section2-product">
                    <div className="covers-product">
                        <img src= {Image3} className="image-product"></img>
                    </div>
                    <h3 className="section2-title-product">Kanva Gentle Cleanser</h3>
                    <p className="section2-product-price">22$</p>
                    <p className="learn-more">Learn More</p>
                </div>
            </div>
        </section>
        </>
    );
}

export default Section2
