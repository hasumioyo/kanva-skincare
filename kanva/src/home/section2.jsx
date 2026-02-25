import "../css/section2.css"

const Section2 = () => {
    return (
        <>
        <section className="section-content-2">
            <h2 className="section2-title">Our Products</h2>
            <div className="section2-list-product">
                <div className="section2-product">
                    <img src="/kanva/src/assets/1.jpg" className="image-product"></img>
                    <h3 className="section2-title-product">Kanva Hydrating Serum</h3>
                    <p className="section2-product-price">24$</p>
                    <p className="learn-more">Learn More</p>
                </div>
                <div className="section2-product">
                    <img src="../assets/2.jpg" className="image-product"></img>
                    <h3 className="section2-title-product">Kanva Balancing Toner</h3>
                    <p className="section2-product-price">20$</p>
                    <p className="learn-more">Learn More</p>
                </div>
                <div className="section2-product">
                    <img src="../assets/3.jpg" className="image-product"></img>
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
