import React from 'react'
import ProductItem from "./item/product_item"

class TractorItemsUnits extends React.Component {

    componentDidMount() {
        fetch('./assets/json/tractor.json')
            .then(response => response.json())
            .then(data => this.props.tractorItemsDisp(data.items))
    }
    render() {
        return (
            <div>
                {this.props.tractorItems.map(item => <ProductItem
                    id={item.id}
                    key={item.id}
                    foto={item.productPicture}
                    title={item.productName}
                    discription={item.productDiscription} />)}
            </div>
        )
    }
}
export default TractorItemsUnits