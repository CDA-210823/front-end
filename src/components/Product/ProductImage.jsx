
const ProductImage = ({product, onClickEvent, imageWidth}) => {
    // console.log(product)

    const imageLink = 'http://localhost:8000' + product.imageProduct[0].path + '.' + product.imageProduct[0].ext
    return (
            <div className={"w-1/6 flex flex-wrap"}>
                <div className={"w-full flex justify-center"}>
                    <img className={`imageShowProduct `} src={imageLink} alt={product.imageProduct[0].name} onClick={onClickEvent}/>
                </div>
                <h2 className={'text-2xl mt-2 m-auto'}>{product.name}</h2>
            </div>
    )
}
export default ProductImage
