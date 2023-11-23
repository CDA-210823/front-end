import React, {useRef, useEffect} from 'react'
import ImgTest from '../../assets/images/imgTest.png';

const TruncatedText = ({ text, maxLength }) => {
    const textRef = useRef();

    useEffect(() => {
        if (textRef.current && text.length > maxLength) {
            textRef.current.textContent = text.slice(0, maxLength) + '...';
        }
    }, [text, maxLength]);

    return <span ref={textRef}>{text}</span>;
};



const CardProduct = ({ product }) => {
    return (
        <div className="md:w-1/4  lg:w-23/100 lg:w-1/5 p-4 bg-card mb-10 rounded mr-10">
            <div className="p-4 bg-card">
                <h3 className="text-3xl text-center mb-2">
                    <TruncatedText text={product.name} maxLength={11} />
                </h3>
                <img src={ImgTest} alt="" className="w-full" />
                <div className="flex flex-row justify-between items-center align-middle mt-4">
                    <p className="text-xl ">{product.price}€</p>
                    <button
                        onClick={() => addToCart(product.id)}
                        className="bg-button text-white md:w-55 md:text-xs lg:text-[10px] px-1 py-2 rounded shadow-boxShadow mr-2  md:ml-4"
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
