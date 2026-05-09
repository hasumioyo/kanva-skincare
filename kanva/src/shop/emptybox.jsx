import { forwardRef } from "react";
import "../css/shop/emptybox.css"

const Emptybox = forwardRef ((props, ref) => {
    return(
        <>
        <div ref={ref} className="boxes">
            <div className="empty-box"></div>
        </div>
        </>
    )
});

export default Emptybox;