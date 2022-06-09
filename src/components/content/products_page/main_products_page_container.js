import React from "react"
import { connect } from "react-redux"
import MainProductsPage from "./main_products_page"
import ProductsCategory from "./product/product"


export const mapStateToProps = (state) => {
    return (
        {
            products: state.productsPage.productsPages.map(product => <ProductsCategory id={product.id} 
                                                                                        key={product.id} 
                                                                                        foto={product.productpagePicture} 
                                                                                        title={product.productPageTitle} 
                                                                                        discription={product.productPageDiscription}
                                                                                        section={product.section} />)
        }
    )
}



export const ProductsCategories = connect(mapStateToProps)(MainProductsPage)

