import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import product from "../../views/Product/Product.jsx";
import ImgTest from '../../assets/images/imgTest.png';
import Axios from "../../services/AxiosService.jsx";

const DetailsProduct = () => {
    const params = useParams();
    const [detailsProducts, setDetailsProducts] = useState([]);

    useEffect(() => {
        Axios.get(`/product/show/${params.id}`)
            .then(data =>  setDetailsProducts(data.data)
            )
    }, []);

    return (
        <div className='flex max-md:mt-2 justify-around my-24 items-center max-sm:flex-col-reverse'>
            <div className='bg-[#DCDCE7] rounded shadow-md lg:mt-5 lg:w-1/5 lg:mr-5 p-10 sm:mt-0 sm:mr-0 sm:w-full  md:mt-2 md:mr-2 sm:m-1'>
                <span className='text-center mx-auto p-2 bg-white block my-2 lg:w-full'> {detailsProducts.name}</span>
                <span className='text-center mx-auto p-2 bg-white block my-4 lg:w-full'> {detailsProducts.price}</span>
                <p className='text-center font-extrabold my-2 sm:text-2xl'>{detailsProducts.stock > 0 ? 'En stock' : 'En rupture'}</p>
                <button className='bg-button text-white md:w-[80%] md:text-[60%] lg:text-[12px] px-1 py-2 rounded shadow-boxShadow mr-2  md:ml-4' onClick={() => addToCart(product.id)}> Ajouter au panier</button>
            </div>

            <div className='bg-[#DCDCE7] rounded shadow-md lg:mt-5 lg:w-1/2 lg:mr-5 p-10 sm:mr-0 all:p-1 m-1 md:m-1 my-2'>
                <h2 className='sm:text-2xl font-bold text-center'>Description du Produit</h2>
                <div className='flex my-4 max-sm:block'>
                    <img className='max-sm:w-1/2 max-sm:h-1/2 max-sm:mx-auto' src={ImgTest} alt="image tel"/>
                    <div className='ml-4 mt-4 family'>{detailsProducts.description}</div>

                </div>
            </div>
        </div>
    )
}
export default DetailsProduct
