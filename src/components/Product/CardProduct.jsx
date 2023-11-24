import React, {useRef, useEffect} from 'react'
import ImgTest from '../../assets/images/imgTest.png';
import Truncate from "../Utils/Truncate.jsx";


const CardProduct = ({ product }) => {
    return (
        <div className="md:w-1/4  lg:w-23/100 lg:w-[22%] p-4 bg-card mb-10 rounded-lg shadow-boxShadow ">
            <div className="w-full p-4 bg-card ">
                <div className="w-full">
                    <h3 className="text-3xl sm:text-lg lg:text-xl xl:text-2xl text-center mb-2">
                        <Truncate text={product.name} maxLength={10} />
                    </h3>
                </div>

                <img src={ImgTest} alt="" className="w-full" />
                <div className="flex flex-col flex-wrap justify-between items-center align-middle mt-4">
                    <div className="md:w-full text-center">
                        <p className="md:text-xl md:text-center">{product.price}€</p>
                    </div>
                    <button
                        onClick={() => addToCart(product.id)}
                        className="bg-button text-white md:w-[80%] md:text-[60%] lg:text-[12px] px-1 py-2 rounded shadow-boxShadow mr-2  md:ml-4"
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
