
import { connect } from "react-redux"
import { setServicesAC} from "../../redux/services_reducer"
import MenuAsync from "./menu_async_req"


export const mapStateToProps = (state) => {
    return (
        {
            products: state.productsPage.productsPages,
            services: state.serviceItem.serviceItems,
        }
    )
}

export const mapDispatchToProps = (dispatch) => {
    return (
        {
            setServicesState: (servicesItems) => {dispatch(setServicesAC(servicesItems))}
        }
    )
}



export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(MenuAsync)

