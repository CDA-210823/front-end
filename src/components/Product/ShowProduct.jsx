import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import product from "../../views/Product/Product.jsx";
import ImgTest from '../../assets/images/imgTest.png';
// import Iphone from '../../assets/images/iphone.jpg';
// import Iphone2 from '../../assets/images/iphone2.jpg';
// import Iphone3 from '../../assets/images/iphone3.jpg';


const DetailsProduct = () => {
    const params = useParams();
    const [detailsProducts, setDetailsProducts] = useState([]);
    const token = localStorage.getItem('token');


    useEffect(() => {
        fetch(`http://localhost:8000/api/product/show/${params.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(json => setDetailsProducts(json))
    }, []);

    // const getRandomImage = () => {
    //     const images = [
    //         ImgTest,
    //         Iphone,
    //         Iphone2,
    //         Iphone3,
    // ];
    //
    //     const randomIndex = Math.floor(Math.random() * images.length);
    //     return images[randomIndex];
    // };

    return (
        <div className='flex justify-around my-24 items-center'>
            <div>
                <input className='text-center p-2' type="text" value={detailsProducts.name}/>
                <input className='text-center p-2' type="text" value={detailsProducts.price}/>
                <p className='text-center font-bold'>{detailsProducts.stock > 0 ? 'En stock' : 'En rupture'}</p>
                <button onClick={() => addToCart(product.id)}> Ajouter au panier </button>
            </div>
            <div>
                <h2>Description du Produit</h2>
                <img src={ImgTest} alt="image tel"/>
                <p>{detailsProducts.description}</p>
            </div>
        </div>
    )
}
export default DetailsProduct
