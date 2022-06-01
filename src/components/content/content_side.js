import styles from './content_side.module.css'
import { ProductsCategories } from './main_products_page/main_products_page_container'

const ContentSide = (props) => {
    return (
        <div className={styles.contentSide}>
            <ProductsCategories/>
        </div>
    )
}

export default ContentSide