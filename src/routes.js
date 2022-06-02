import React from "react";

import { Routes, Route } from 'react-router-dom'

import Home from "./views/home";
import RegisterProduct, { RegisterProductParam } from "./views/products/register";
import ProductsCatalog  from "./views/products/catalog";

export default () => {
    return (

        <Routes>
            <Route exact element={<RegisterProductParam />} path="/register-products/:sku" />
            <Route exact element={<RegisterProduct />} path="/register-products" />
            <Route exact element={<ProductsCatalog />} path="/catalog" />
            <Route exact element={<Home />} path="/" />
        </Routes>

    );
} 