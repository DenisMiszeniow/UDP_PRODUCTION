import React from 'react'


class MainProductsPage extends React.Component {
    componentDidMount() {
        fetch('./assets/json/product_page.json')
            .then(response => response.json())
            .then(data => this.props.setProductsState(data.items))
    }
    render() {
        return (
            <div>
                {this.props.products}
            </div>
        )
    }
}







// const MainProductsPage = (props) => {
//     return (
//         <div>
//             {props.products}
//         </div>
//     )
// }

export default MainProductsPage