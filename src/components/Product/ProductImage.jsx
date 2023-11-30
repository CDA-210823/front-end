
const ProductImage = ({product, onClickEvent}) => {
    console.log(product)

    const imageLink = 'http://localhost:8000' + product.imageProduct[0].path + '.' + product.imageProduct[0].ext
    return (
            <div className={" text-center"}>
                <img className='imageShowProduct' src={imageLink} alt={product.imageProduct[0].name} onClick={onClickEvent}/>
                <h2 className={'text-2xl mt-2'}>{product.name}</h2>
            </div>
    )
}
export default ProductImage
