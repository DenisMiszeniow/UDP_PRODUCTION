
import { connect } from "react-redux"
import Menu from "./menu"


export const mapStateToProps = (state) => {
    return (
        {
            products: state.productsPage.productsPages
        }
    )
}



export const MenuContainer = connect(mapStateToProps)(Menu)

