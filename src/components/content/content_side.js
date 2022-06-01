import styles from './content_side.module.css'
import { ProductsCategories } from './products_page/main_products_page_container'
import { Route, Routes } from 'react-router-dom'

const ContentSide = (props) => {
    return (
        <div className={styles.contentSide}>
            <Routes>
                <Route path='/' element={<ProductsCategories/>}/>
            </Routes>
        </div>
    )
}

export default ContentSide