import React from "react";

import { Routes, Route } from 'react-router-dom'

import Home from "./views/home";
import RegisterProduct from "./views/products/register";
import ProductsCatalog  from "./views/products/catalog";

export default () => {
    return (

        <Routes>
            <Route element={<RegisterProduct />} path="/register-products/:sku" />
            <Route element={<RegisterProduct />} path="/register-products" />
            <Route element={<ProductsCatalog />} path="/catalog" />
            <Route exact element={<Home />} path="/" />
        </Routes>

    );
}