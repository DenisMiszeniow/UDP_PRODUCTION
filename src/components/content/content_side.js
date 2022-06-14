import React from 'react'
import styles from './content_side.module.css'
import { ProductsCategories } from './products_page/main_products_page_container'
import { Route, Routes } from 'react-router-dom'
import { MotoblockItems, TractorItems, WireItems } from './product_items/product_item_container'


const ContentSide = (props) => {
    return (
        <div className={styles.contentSide}>
            <Routes>
                <Route path='/' element={<ProductsCategories/>}/>
                <Route path='/motoblock' element={<MotoblockItems/>}/>
                <Route path='/tractor' element={<TractorItems/>}/>
                <Route path='/wire' element={<WireItems/>}/>
            </Routes>
        </div>
    )
}

export default ContentSide