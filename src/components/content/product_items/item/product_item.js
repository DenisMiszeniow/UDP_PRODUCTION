import React from 'react'
import styles from './product_item.module.css'


import ItemGalleryCarousel from './item_image_carousel'


const ProductItem = (props) => {

    return (
            <div className={styles.productDiv}>
                <div className={styles.titleDiv}>
                    <h3>{props.title}</h3>
                </div>
                <div className={styles.imageContainer}>
                    <ItemGalleryCarousel image={props.foto} />
                </div>
                <div className={styles.discriptionContainer}>
                    <p>
                        {props.discription.discriotionText}
                    </p>
                    <strong>Технические характеристики:</strong>
                    <ul>
                        {
                            props.discription.techData.map(data => <li>{`${data.DataName}: ${data.DataParameter}`}</li>)
                        }
                    </ul>
                </div>
            </div>
    )
}
export default ProductItem
