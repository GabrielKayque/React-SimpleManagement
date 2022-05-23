import React from "react";

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./views/home";
import RegisterProduct from "./views/products/register";

export default () => {
    return (
        
            <Router>
                <Routes>
                    <Route exact element={<RegisterProduct/>} path="/register-products" />
                    <Route exact element={<Home/>} path="/" />
                </Routes>
            </Router>
    );
}