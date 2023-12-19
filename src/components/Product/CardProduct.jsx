import Truncate from "../Utils/Truncate.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {addToCart} from "../../services/cartService.jsx";
import {useState} from "react";


const CardProduct = ({ product }) => {
    // imageProduct[0] for get the main image product
    const imageLink = 'http://localhost:8000' + product.imageProduct[0].path + '.' + product.imageProduct[0].ext
    const isConnected = useSelector((state) => state.auth.isLogged);
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    function HandleClick (product, quantity) {
        if (isConnected) {
            addToCart({
                idProduct: product.id,
                idCart: 1,
                quantity: quantity
            }).then(() => toast('Produit ajouter au panier avec succès'))
        } else {
            toast('Vous devez être connecté pour pouvoir ajouter au panier');
        }
    }
    return (
        <div className="md:w-1/4  lg:w-23/100 lg:w-[22%] p-4 bg-card mb-10 rounded-lg shadow-boxShadow ">
            <div className="w-full p-4 bg-card ">
                <div className="w-full" >
                    <h3 className="text-3xl sm:text-lg lg:text-xl xl:text-2xl text-center mb-2">
                        <Truncate text={product.name} maxLength={10} />
                    </h3>
                </div>

                <img onClick={()=> {navigate(`/show/${product.id}`)}}  src={imageLink} alt="" className="w-full" />
                <div className="flex flex-col flex-wrap justify-between items-center align-middle mt-4">
                    <div className="md:w-full text-center">
                        <p className="md:text-xl md:text-center">{product.price}€</p>
                    </div>
                    <button
                        onClick={()=> {
                            HandleClick(product, quantity)
                        }}
                        className="buttonProduct">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
