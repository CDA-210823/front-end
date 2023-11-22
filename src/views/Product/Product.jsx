import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProduct from '../../components/Product/CardProduct.jsx';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/product/');

                setProducts(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des produits :', error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (productId) => {
        console.log(`Produit ajouté au panier avec l'ID ${productId}`);
    };

    return (
        <div className="w-full p-10">
            <div className="flex flex-wrap w-full  content-normal">
                {products.map((product) => (
                   <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Product;
