import React from 'react'
import ProductItem from "./item/product_item"


const TractorItemsUnits = (props) => {
    return (
        <div>
            {props.tractorItems.map(item => <ProductItem
                id={item.id}
                key={item.id}
                foto={item.productPicture}
                title={item.productName}
                discription={item.productDiscription} />)}
        </div>
    )
}
export default TractorItemsUnits