import Footer from "../home/footer";
import Section1 from "../shop/section1";
import Section2 from "../shop/section2";

import "../css/pages/shoppage.css"
import { forwardRef } from "react"

import { useEffect, useState } from "react";

const Shop = () => {
    return (
    <>
    <div className="shop-divider">
        <Section1/>
        <Section2/>
    </div>
    </>
    )
}

export default Shop;
