import styles from './product_item.module.css'
<<<<<<< HEAD
// import 'react-image-gallery/styles/css/image-gallery.css'
=======
import 'react-image-gallery/styles/css/image-gallery.css'
>>>>>>> ebf7654daea58aa212bf827604c75f39b8641664

const ProductItem = (props) => {

    return (
        <div>
            <div className={styles.productDiv}>
                <div className={styles.titleDiv}>
                    <h3>{props.title}</h3>
                </div>
                <div className={styles.container}>
                    <div>
                        <img src={props.foto} />
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
