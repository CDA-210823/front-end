import homeImage from '/src/assets/images/Home/bg-image.png';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useEffect, useState} from "react";
import {getLastProducts} from "../../services/ProductService.jsx";
import CardProduct from "../../components/Product/CardProduct.jsx";
import ProductImage from "../../components/Product/ProductImage.jsx";
import {useNavigate} from "react-router-dom";
const Home = () => {
    const [LastProducts, setLastProducts] = useState([]);
    const navigate = useNavigate();

    function onClick(product)
    {
        navigate(`/show/${product.id}`)
    }


    useEffect(() => {
        let tempData = [];
        async function getData()
        {
            const data = await getLastProducts();
            setLastProducts(data.data)
        }

        getData()
    }, []);
    return (
        <>
            <div className={"spacerHome w-full h-[40rem] max-h-[40rem] relative"}>
                <img className={"imgHome absolute w-full h-[40rem] max-h-[40rem]"} src={homeImage} alt=""/>
                <div className={"homePageTitle absolute bottom-1/2 left-40 text-4xl text-white w-[25rem] h-20 max-h-[20rem]"}>
                    <h1 className={'family leading-[3rem]'}>Mobile Phone: L’innovation mobile révolutionnaire</h1>
                </div>
            </div>

            <div className={"w-full mt-4 flex justify-between p-8"}>
                <div className={'text-center w-1/6'}>
                    <h1 className={"text-4xl family"}>Téléphone</h1>
                    <Splide aria-label="My Favorite Images" options={{
                        autoplay: true,
                        interval: 4000,
                        type: 'loop',
                        arrows: false,
                    }}>
                        <SplideSlide className={'flex justify-center my-8'}>
                            <img src="/src/assets/images/imgTest.png" alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide className={'flex justify-center my-8'}>
                            <img src="/src/assets/images/imgTest.png" alt="Image 2"/>
                        </SplideSlide>
                    </Splide>
                </div>

                <div className={'text-center w-1/6'}>
                    <h1 className={"text-4xl family"}>Accessoires</h1>
                    <Splide aria-label="My Favorite Images" options={{
                        autoplay: true,
                        interval: 4000,
                        type: 'loop',
                        arrows: false,
                    }}>
                        <SplideSlide className={'flex justify-center my-8'}>
                            <img src="/src/assets/images/imgTest.png" alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide className={'flex justify-center my-8'}>
                            <img src="/src/assets/images/imgTest.png" alt="Image 2"/>
                        </SplideSlide>
                    </Splide>
                </div>

                <div className={'text-center w-1/6'}>
                    <h1 className={"text-4xl family"}>Tablettes</h1>
                    <Splide aria-label="My Favorite Images" options={{
                        autoplay: true,
                        interval: 4000,
                        type: 'loop',
                        arrows: false,
                    }}>
                        <SplideSlide className={'flex justify-center my-8'}>
                            <img src="/src/assets/images/imgTest.png" alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide className={'flex justify-center my-8'}>
                            <img src="/src/assets/images/imgTest.png" alt="Image 2"/>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>

            <div>
                <h2 className={"text-2xl ml-[5rem] family"}>Nos dernier ajouts: </h2>

                <div className={"w-full flex justify-between p-8"}>
                    {LastProducts.map((product) => {
                        return <ProductImage key={product.id} product={product} onClickEvent={() => onClick(product)} />
                    })
                    }
                </div>
            </div>
        </>
    )
}
export default Home;
