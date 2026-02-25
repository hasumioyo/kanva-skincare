import "../css/footer.css"

const Footer = () => {
    return (
        <>
            <footer className="home-footer">
                <div className="sub-footer1">
                    <div className="footer-emails">
                        <h3 className="footer-latest">Latest launches, insdider news & exclusive collaborations</h3>
                        <div className="enter-email">
                            <input type="email" id="email" placeholder="Enter Email" />
                        <button className="send-email"><i class="fa-solid fa-arrow-down"></i></button> <br />
                        </div>
                        
                    </div>
                    <div className="sub-footer1-mini">
                        <div className="footer-support">
                            <p className="support-title">Support</p>
                            <p className="sub-support">Shipping & Features</p>
                            <p className="sub-support">Help & FAQ</p>
                            <p className="sub-support">Careers</p>
                        </div>
                        <div className="footer-follow">
                            <p className="follow-title">Follow Us</p>
                            <p className="sub-follow">INSTAGRAM</p>
                            <p className="sub-follow">TIKTOK</p>
                            <p className="sub-follow">FACEBOOK</p>
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <p className="contact-title">Contact Us</p>
                    <p className="sub-contact">+62 123-456-789</p>
                    <p className="sub-contact">kanvastore@gmail.com</p>
                </div>
                <div className="sub-footer2">
                    <p className="copy">&copy;  2025 kanva. All rights reserved</p>
                    <div className="settings">
                        <a href="#" className="set">Privacy Policy</a>
                        <a href="#" className="set">Terms of Service</a>
                        <a href="#" className="set">Cookies Settings</a>  
                    </div>
                </div>
                {/* <div className="home-footer2">
                    <h1>KANVA</h1>
                </div> */}
            </footer>
        </>
    );
}

export default Footer;
