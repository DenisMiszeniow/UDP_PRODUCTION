import styles from './content_side.module.css'

const ContentSide = (props) => {
    return (
        <div className={styles.contentSide}>
            <div className={styles.container}>
                Content
            </div>
            <div className={styles.copyright}>
                Copyright
            </div>
        </div>
    )
}

export default ContentSide