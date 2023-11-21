import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
)
