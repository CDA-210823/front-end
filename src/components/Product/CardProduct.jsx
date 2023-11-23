import React from 'react'
import ImgTest from '../../assets/images/imgTest.png';

const CardProduct = ({product}) => {
    console.log(product)
    return (
        <div  className="w-1/5  p-4 bg-slate-300 ml-5">
            <div className=" p-4 bg-slate-300 ">
                <h3 className="text-3xl text-center font-semibold mb-2">{product.name}</h3>
                <img src={ImgTest} alt="" className="w-full"/>
                <div className="flex flex-row justify-between items-center align-middle mt-4">
                    <p className="font-bold">{product.price}€</p>
                    <button
                        onClick={() => addToCart(product.id)}
                        className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-700 transition duration-300"
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CardProduct
