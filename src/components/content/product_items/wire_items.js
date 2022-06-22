import React from 'react'
import ProductItem from "./item/product_item"


class WireItemsUnits extends React.Component {

    componentDidMount() {
        fetch('./assets/json/wire.json')
            .then(response => response.json())
            .then(data => this.props.wireItemsDisp(data.items))
    }
    
    render() {
        
        return (
            <div>
                {this.props.wireItems.map(item => <ProductItem
                    id={item.id}
                    key={item.id}
                    foto={item.productPicture}
                    title={item.productName}
                    discription={item.productDiscription} />)}
            </div>
        )
    }
}
export default WireItemsUnits