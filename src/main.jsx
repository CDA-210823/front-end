// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './views/Login/Login.jsx';
import Product from './views/Product/Product.jsx';
import Logout from './views/Logout/Logout.jsx';
import Registration from './views/Registration/Registration.jsx';
import './index.css';
import {ToastContainer} from 'react-toastify';
import App from './App.jsx';
import {Provider} from 'react-redux';
import { store } from './store/store';
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
