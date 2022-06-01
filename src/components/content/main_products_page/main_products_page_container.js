
import { connect } from "react-redux"
import MainProductsPage from "./main_products_page"
import ProductsCategory from "./product/product"


export const mapStateToProps = (state) => {
    return (
        {
            products: state.productsPage.productsPages.map(product => <ProductsCategory id={product.id} foto={product.productpagePicture} title={product.productPageTitle} discription={product.productPageDiscription} />)
        }
    )
}



export const ProductsCategories = connect(mapStateToProps)(MainProductsPage)

