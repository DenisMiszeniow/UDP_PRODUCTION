
import { connect } from "react-redux"
import Service from "./service_item"



export const mapStateToProps = (state) => {
    return (
        {
            service: state.serviceItem.serviceItems,
            currentId: state.serviceItem.setId
        }
    )
}



export const ServiceContainer = connect(mapStateToProps)(Service)

