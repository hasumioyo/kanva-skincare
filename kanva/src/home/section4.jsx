import "../css/section4.css"
import Image4 from "../assets/4.png"
import Image5 from "../assets/5.png"
import Image6 from "../assets/6.png"

const Section4 = () => {
    return (
        <>
            <div className="section-content-4">
                <h3 className="section4-title">
                    How to Apply Your Skincare Routine
                </h3>
                <div className="section4-divider"></div>
                <div className="section4-list-tips">
                    <div className="section4-tips">
                        <div className="covers-tips">
                            <img src= {Image4} alt="" className="image-tips"/>
                        </div>
                        <h5 className="tips-head">1 - Cleanse</h5>
                        <p className="tips-desc">Gently cleanse the skin to remove impurities and prepare it for treatment.</p>
                    </div>
                    <div className="section4-tips">
                        <div className="covers-tips">
                            <img src= {Image5} alt="" className="image-tips"/>
                        </div>
                        <h5 className="tips-head">2 - Treat</h5>
                        <p className="tips-desc">Apply serum or treatment to address your skin’s needs and support daily care.</p>
                    </div>
                    <div className="section4-tips">
                        <div className="covers-tips">
                            <img src= {Image6} alt="" className="image-tips"/>
                        </div>
                        <h5 className="tips-head">3 - Moisturize</h5>
                        <p className="tips-desc">Finish with moisturizer to maintain hydration and protect the skin barrier.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section4
