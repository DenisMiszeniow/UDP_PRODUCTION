
import React from 'react'
import ProductItem from "./item/product_item"

class MotoblockItemsUnits extends React.Component {

    componentDidMount() {
        fetch('./assets/json/motoblock.json')
            .then(response => response.json())
            .then(data => this.props.motoblockItemsDisp(data.items))
    }
    render() {
        return (
            <div>
                {this.props.motoblockItems.map(item => <ProductItem
                    id={item.id}
                    key={item.id}
                    foto={item.productPicture}
                    title={item.productName}
                    discription={item.productDiscription} />)}
            </div>
        )
    }
}
export default MotoblockItemsUnits