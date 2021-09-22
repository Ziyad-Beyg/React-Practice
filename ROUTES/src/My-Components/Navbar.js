import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div>
            <Link to="/">HOME</Link> &nbsp;
            <Link to="/about">ABOUT</Link>&nbsp;
            <Link to="/products">PRODUCTS</Link>&nbsp;
            <Link to="/signin">LOGIN</Link>&nbsp;
        </div>
    )
}

export default Nav