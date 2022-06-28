
import { connect } from "react-redux"
import { setServicesAC} from "../../redux/services_reducer"
import React from 'react'
import Menu from './menu'

class MenuAsync extends React.Component {
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
                <Menu products={this.props.products} services={this.props.services} handleClick={this.props.handleClick} menuItems={this.props.menuItems}/>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return (
        {
            products: state.productsPage.productsPages,
            services: state.serviceItem.serviceItems,
            menuItems: state.serviceItem.menuItems
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

