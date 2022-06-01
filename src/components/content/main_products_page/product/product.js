import styles from './product.module.css'

const ProductsCategory = (props) => {
    return (
        <div>
            <div className={styles.productDiv}>
                <div className={styles.titleDiv}>
                    
                    <a href='#'><h3>{props.title}</h3></a>
                </div>
                <div>
                    <a href='#'><img src={props.foto}/></a>
                    <p>
                        {props.discription}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ProductsCategory