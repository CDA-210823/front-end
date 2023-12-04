import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProduct from '../../components/Product/CardProduct.jsx';
import Pagination from '../../components/Utils/pagination.jsx';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

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

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const addToCart = (productId) => {
        console.log(`Produit ajouté au panier avec l'ID ${productId}`);
    };

    return (
        <div className="w-full p-10">
            <div className="flex flex-wrap justify-start sm:justify-items-start">
                {currentProducts.map((product) => (
                    <CardProduct key={product.id} product={product} addToCart={() => addToCart(product.id)} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.ceil(products.length / productsPerPage)} onPageChange={paginate} />
        </div>
    );
};

export default Product;
