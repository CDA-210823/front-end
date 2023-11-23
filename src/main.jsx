import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Login from './views/Login/Login.jsx';
import Product from './views/Product/Product.jsx';
import Logout from './views/Logout/Logout.jsx';
import Registration from './views/Registration/Registration.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    </Router>
)
