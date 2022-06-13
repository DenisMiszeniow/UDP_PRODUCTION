import React from 'react'
import styles from './product_item.module.css'
// import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Carousel } from 'react-responsive-carousel'
import { ItemGalleryCarousel } from './item_image_carousel'


const ProductItem = (props) => {

    return (
            <div className={styles.productDiv}>
                <div className={styles.titleDiv}>
                    <h3>{props.title}</h3>
                </div>
                <div className={styles.container}>
                    <div>
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
                    </div>
                </div>
            </div>
        
    )
}
export default ProductItem
