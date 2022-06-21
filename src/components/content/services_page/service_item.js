import styles from './service_item.module.css'

const Service = (props) => {
    return (
        <div>
            {
                props.service.map((item) => {
                    if (props.id === item.id) {
                        return (
                            <div className={styles.serviceDiv} >
                                <div className={styles.titleDiv}>
                                    <h1>{item.serviceName}</h1>
                                </div>
                                <div className={styles.discriptionArea}>
                                    <img src={item.servicePicture} />
                                    <p>
                                        {item.mainDicription}
                                    </p>
                                    <div>
                                        {
                                            item.serviceDiscription.map(el => {
                                                return (
                                                    <div>
                                                        <span>{el.descriptionText}</span>
                                                        <ul>
                                                            {el.serviceList.map(poz => <li><p>{poz}</p></li>)}
                                                        </ul>
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }

                })
            }
        </div>
    )
}

export default Service