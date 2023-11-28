import ImgTest from '../../assets/images/imgTest.png';
import Truncate from "../Utils/Truncate.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";


const CardProduct = ({ product }) => {
    const isConnected = useSelector((state) => state.auth.isLogged);
    const navigate = useNavigate();
    const verifyForCart = (product)=> {
        if (isConnected) {
            addToCart(product.id)
        } else {
            toast('Vous devez être connecté pour pouvoir ajouter au panier')
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

                <img onClick={()=> {
                    navigate(`/show/${product.id}`);
                }}  src={ImgTest} alt="" className="w-full" />
                <div className="flex flex-col flex-wrap justify-between items-center align-middle mt-4">
                    <div className="md:w-full text-center">
                        <p className="md:text-xl md:text-center">{product.price}€</p>
                    </div>
                    <button
                        onClick={()=> {
                            verifyForCart()
                        }}
                        className="bg-button text-white md:w-[80%] md:text-[60%] lg:text-[12px] px-1 py-2 rounded shadow-boxShadow mr-2  md:ml-4">

                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
