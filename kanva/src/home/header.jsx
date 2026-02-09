import { forwardRef } from "react"
import '../css/header.css'

const Header = forwardRef((props, ref) => {
    return (
        <>
            {/*Header*/}
            <header ref={ref} className='home-header'>
            </header>
        </>
    );
    
});

export default Header;