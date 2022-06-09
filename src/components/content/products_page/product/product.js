import React from 'react'
import styles from './product.module.css'
import { NavLink } from 'react-router-dom'

const ProductsCategory = (props) => {
    return (
        <div>
            <div className={styles.productDiv}>
                <div className={styles.titleDiv}>
                    <NavLink to={`/${props.section}`}>
                        <h3>{props.title}</h3>
                    </NavLink>
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

// className={(navData) => navData.isActive ? styles.active : ""}