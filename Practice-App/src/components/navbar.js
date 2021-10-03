import React from "react";
import {
    Link
} from "react-router-dom";


function Nav() {
    let marginBottom = {"margin-bottom": "0px"}

    return (
        <nav>
            <ul style={marginBottom}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/animal-api">Animal</Link>
                </li>
                <li>
                    <Link to="/snacks">Snacks</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
