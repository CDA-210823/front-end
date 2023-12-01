import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './views/Home/Home.jsx';
import Login from './views/Login/Login.jsx';
import Logout from './views/Logout/Logout.jsx';
import Registration from './views/Registration/Registration.jsx';
import Product from './views/Product/Product.jsx';
import {ToastContainer} from 'react-toastify';
import Footer from './components/Footer/Footer.jsx';
import ShowProduct from "./components/Product/ShowProduct.jsx";
import Opinion from "./components/Opinion/Opinion.jsx";
import AddProduct from "./views/Admin/Product/AddProduct.jsx";
const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/show/:id" element={<ShowProduct/>}/>
                <Route path="/opinion" element={<Opinion/>}/>
                <Route path="/addProduct" element={<AddProduct/>}/>
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="dark"
            />
            <Footer />
        </Router>
    )
}
export default App;
