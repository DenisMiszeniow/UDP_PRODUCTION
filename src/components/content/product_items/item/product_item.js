import React from 'react'
import styles from './product_item.module.css'
import { ItemGalleryCarousel } from './item_image_carousel'


const ProductItem = (props) => {

    return (
            <div className={styles.productDiv}>
                <div className={styles.titleDiv}>
                    <h3>{props.title}</h3>
                </div>
                <div className={styles.container}>
                    <div className={styles.leftContainer}>
                        <ItemGalleryCarousel image={props.foto}/>
                    </div>
                    <div className={styles.discriptionContainer}>
                        <p>
                            {props.discription.discriotionText}
                        </p>
                        <strong>Технические характеристики:</strong>
                        <ul className={styles.discriptionList}>
                        {
                            props.discription.techData.map(data => <li>
                                                                        <span className={styles.discriptionName}>
                                                                            {`${data.DataName}:`}
                                                                        </span>
                                                                        <span>{` ${data.DataParameter}`}
                                                                        </span>
                                                                    </li>)
                        }
                        </ul>
                        <b>Гарантия производителя: {props.discription.waranty} месяца</b>
                    </div>
                </div>
            </div>
        
    )
}
export default ProductItem
