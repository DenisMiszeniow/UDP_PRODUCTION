import React from 'react'
import styles from './product_item.module.css'
// import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Carousel } from 'react-responsive-carousel'
import { ItemGalleryCarousel } from './item_image_carousel'


const ProductItem = (props) => {

    return (
        <div>
            <div className={styles.productDiv}>
                <div className={styles.titleDiv}>
                    <h3>{props.title}</h3>
                </div>
                <div className={styles.container}>
                    <div>
                        <ItemGalleryCarousel image={props.foto}/>
                    </div>
                    <div>
                        <p>
                            {props.discription.discriotionText}
                        </p>
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
