// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './views/Login/Login.jsx';
import Product from './views/Product/Product.jsx';
import Logout from './views/Logout/Logout.jsx';
import Registration from './views/Registration/Registration.jsx';
import './index.css';
import AddProduct from "./views/Admin/Product/AddProduct.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/product" element={<Product />} />
            <Route path="/admin/addProduct" element={<AddProduct />} />
        </Routes>
        <Footer/>
    </Router>
)
