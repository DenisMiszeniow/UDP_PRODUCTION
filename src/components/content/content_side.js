import React from 'react'
import styles from './content_side.module.css'
import { ProductsCategories } from './products_page/main_products_page_container'
import { Route, Routes } from 'react-router-dom'
import { MotoblockItems, TractorItems, WireItems } from './product_items/product_item_container'
import AboutUs from './about_us/about_us'
import ShippingAndPayment from './shipping_payment/shipping_payment'
import { ContactContainer } from './contact/contact_container'
import { ServiceContainer } from './services_page/service_item_container'


const ContentSide = (props) => {

    return (
        <div className={styles.contentSide}>
            <Routes>
                <Route path='/' element={<ProductsCategories/>}/>
                <Route path='/motoblock' element={<MotoblockItems/>}/>
                <Route path='/tractor' element={<TractorItems/>}/>
                <Route path='/wire' element={<WireItems/>}/>
                <Route path='/onas' element={<AboutUs/>}/>
                <Route path='/dostavkaoplata' element={<ShippingAndPayment/>}/>
                <Route path='/kontakt' element={<ContactContainer/>}/>
                {props.serviseId.map(id => <Route path={`/${id.endPoint}`} key={id.id} element={<ServiceContainer id={id.id}/>}/>)}
            </Routes>
        </div>
    )
}

export default ContentSide