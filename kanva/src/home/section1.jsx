import "../css/section1.css"
import small from '../assets/mockup.jpg'

const Section1 = () => {
    return (
        <>
        <section className="section-content-1">
            <h3 className="section1-desc">Kanva represents quiet luxury through thoughtful skincare. The experience comes first, with packaging designed to stay clean, minimal and unobstrusive.</h3>
            <div className="section1-line"></div>
            <div className="cover-small">
                <img src={small} className="product-small"></img>
            </div>
        </section>
        </>
    );
}

export default Section1
