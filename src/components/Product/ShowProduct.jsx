import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import ImgTest from '../../assets/images/imgTest.png';
import Axios from "../../services/AxiosService.jsx";
import { useSelector } from 'react-redux';
import {toast} from "react-toastify";
import ProductImage from "./ProductImage.jsx";
import product from "../../views/Product/Product.jsx";

const DetailsProduct = () => {
    const isConnected = useSelector((state) => state.auth.isLogged);
    const params = useParams();
    const [detailsProducts, setDetailsProducts] = useState([]);

    const verifyForCart = (product)=> {
        if (isConnected) {
            /*TODO change edit addToCart @Noah*/
            addToCart(product.id)
        } else {
            toast('Vous devez être connecté pour pouvoir ajouter au panier')
        }
    }

    useEffect(() => {
        Axios.get(`/product/show/${params.id}`)
            .then(data => {
                setDetailsProducts(data.data)
                console.log(detailsProducts.imageProduct)
            }
    )
    }, []);

    return (
        <div className='containerShowProduct'>
            <div className='containerDetailsProduct'>
                <span className='detailsProduct titleDescription'> {detailsProducts.name}</span>
                <span className='detailsProduct'> {detailsProducts.price} €</span>
                <p className='stockProduct'>{detailsProducts.stock > 0 ? 'En stock' : 'En rupture'}</p>
                <button
                    className='buttonAddCart'
                    onClick={()=> {
                        verifyForCart()
                    }}>
                    Ajouter au panier
                </button>
            </div>

            <div className='containerDescriptionProduct'>
                <h2 className='titleDescriptionProduct'>Description du Produit</h2>
                <div className='flex my-4 max-sm:block'>
                    {/*<ProductImage className='imageShowProduct' product={detailsProducts}/>*/}
                    {/*<img className='imageShowProduct' src={ImgTest} alt="image tel"/>*/}
                    <div className='ml-4 mt-4 family w-2/3'>{detailsProducts.description}</div>

                </div>
            </div>
        </div>
    )
}
export default DetailsProduct
