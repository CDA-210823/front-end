// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home.jsx";
import Product from "./views/Product/Product.jsx";
import Header from "./components/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    </Router>
)
