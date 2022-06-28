
import React from 'react'
import Menu from './menu'

class MenuAsync extends React.Component {
    componentDidMount() {
        fetch('./assets/json/services.json')
            .then(response => response.json())
            .then(data => {
                debugger
                this.props.setServicesState(data.items)
                console.log(data.items)
            })
    }
    
    render() {
        
        return (
            <div>
                <Menu products={this.props.products} services={this.props.services} handleClick={this.props.handleClick}/>
            </div>
        )
    }
}

export default MenuAsync