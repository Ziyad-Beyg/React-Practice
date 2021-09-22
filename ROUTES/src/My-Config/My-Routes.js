import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../My-Screens/My-Home";
import About from "../My-Screens/My-About";
import Nav from "../My-Components/Navbar";
import Products from "../My-Screens/My-Products";
import ProductsDetails from "../My-Screens/My-Products_details";
import Login from "../My-Screens/my-login";

function Routes(){
    return(
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
                <Route path="/product-details/:productId">
                    <ProductsDetails/>
                </Route>
                <Route path="/signin">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes