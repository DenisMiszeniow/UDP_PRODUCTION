import ProductItem from "./item/product_item"


const WireItemsUnits = (props) => {
    return (
        <div>
            {props.wireItems.map(item => <ProductItem
                id={item.id}
                key={item.id}
                foto={item.productPicture}
                title={item.productName}
                discription={item.productDiscription} />)}
        </div>
    )
}
export default WireItemsUnits