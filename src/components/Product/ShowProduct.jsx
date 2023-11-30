import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useSelector} from 'react-redux';
import {toast} from "react-toastify";
import ProductImage from "./ProductImage.jsx";
import {getDetailsProduct} from "../../services/ProductService.jsx";

const ShowProduct = () => {
    const isConnected = useSelector((state) => state.auth.isLogged);
    const params = useParams();
    const [detailsProducts, setDetailsProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // const verifyForCart = (product) => {
    //     if (isConnected) {
    //         /*TODO change edit addToCart @Noah*/
    //         addToCart(product.id)
    //     } else {
    //         toast('Vous devez être connecté pour pouvoir ajouter au panier')
    //     }
    // }

    useEffect(() => {
        getDetailsProduct(params.id)
            .then(data => {
                    setDetailsProducts(data.data)
                    setLoading(false)
                }
            )
    }, []);

    return (
        <>
            {loading ? <h1>Loading</h1> :
                <div className='containerShowProduct'>
                    <div className='containerDetailsProduct'>
                        <span className='detailsProduct titleDescription'> {detailsProducts.name}</span>
                        <span className='detailsProduct'> {detailsProducts.price} €</span>
                        <p className='stockProduct'>{detailsProducts.stock > 0 ? 'En stock' : 'En rupture'}</p>
                        <button className='buttonProduct'
                                onClick={() => {
                                    // verifyForCart()
                                }}>
                            Ajouter au panier
                        </button>
                    </div>

                    <div className='containerDescriptionProduct'>
                        <h2 className='titleDescriptionProduct'>Description du Produit</h2>
                        <div className='flex my-4 max-sm:block'>
                            <ProductImage product={detailsProducts}/>
                            <div className='ml-4 mt-4 family w-2/3'>{detailsProducts.description}</div>
                        </div>
                        <button className='buttonProduct w-1/2 mx-auto'>
                            Ajouter un avis
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
export default ShowProduct
