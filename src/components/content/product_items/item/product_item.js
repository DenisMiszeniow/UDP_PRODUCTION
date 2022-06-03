import styles from './product_item.module.css'
import { NavLink } from 'react-router-dom'

const ProductItem = (props) => {
    
    return (
        <div>
            <div className={styles.productDiv}>
                <div className={styles.titleDiv}>
                        <h3>{props.title}</h3>
                </div>
                <div className={styles.container}>
                    <div><img src={props.foto}/></div>
                    <p>
                        {props.discription.discriotionText}
                    </p>
                    <div>
                        <strong>Технические характеристики:</strong>
                        {
                            props.discription.techData.map(data => <div><span>{`${data.DataName}: ${data.DataParameter}`}</span></div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductItem
