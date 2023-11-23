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
        <div className="w-1/5 p-4 bg-card ml-5 mb-5 rounded">
            <div className="p-4 bg-card">
                <h3 className="text-3xl text-center mb-2">
                    <TruncatedText text={product.name} maxLength={11} />
                </h3>
                <img src={ImgTest} alt="" className="w-full" />
                <div className="flex flex-row justify-between items-center align-middle mt-4">
                    <p className="text-xl ">{product.price}€</p>
                    <button
                        onClick={() => addToCart(product.id)}
                        className="bg-button text-white text-xs px-1 py-2 rounded shadow-boxShadow"
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
