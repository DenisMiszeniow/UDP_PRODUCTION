
import { connect } from "react-redux"
import Service from "./service_item"
import React from "react"
import { setServicesAC } from "../../../redux/services_reducer"

class ServiceAsync extends React.Component {
    componentDidMount() {
        fetch('./assets/json/services.json')
            .then(response => response.json())
            .then(data => {
                this.props.setServicesState(data.items)
            })
    }
    render() {
        return (
            <div>
                <Service service={this.props.service} currentId={this.props.currentId} id={this.props.id}/>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return (
        {
            service: state.serviceItem.serviceItems,
            currentId: state.serviceItem.setId
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


export const ServiceContainer = connect(mapStateToProps, mapDispatchToProps)(ServiceAsync)

