import homeImage from '/src/assets/images/Home/bg-image.png';
const Home = () => {
    return (
        <>
            <div className={"spacerHome w-full h-[40rem] max-h-[40rem] relative"}>
                <img className={"imgHome absolute w-full h-[40rem] max-h-[40rem]"} src={homeImage} alt=""/>
                <div className={"homePageTitle absolute bottom-1/2 left-40 text-4xl text-white w-[25rem] h-20 max-h-[20rem]"}>
                    <h1 className={'family leading-[3rem]'}>Mobile Phone: L’innovation mobile révolutionnaire</h1>
                </div>
            </div>
        </>
    )
}
export default Home;
