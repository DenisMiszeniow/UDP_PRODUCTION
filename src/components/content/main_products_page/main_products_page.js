import { type } from '@testing-library/user-event/dist/type'
import styles from './main_products_page.module.css'
import ProductsCategory from './product/product'

const MainProductsPage = (props) => {
    return (
        <div>
            {props.products}
        </div>
    )
}

export default MainProductsPage