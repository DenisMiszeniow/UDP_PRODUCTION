import styles from './contact.module.css'

const ContactPage = (props) => {
    const localOnChangeNameInput = (valueName) =>{
        valueName = props.updateNameInput.current.value
        props.onChangeNameInput(valueName)
    }
    
    const localOnChangeEmailInput = (valueEmail) =>{
        valueEmail = props.updateEmailInput.current.value
        props.onChangeEmailInput(valueEmail)
    }

    const localOnChangeSubjectInput = (valueSubject) =>{
        
        valueSubject = props.updateSubjectInput.current.value
        props.onChangeSubjectInput(valueSubject)
    }

    const localOnChangeTextAreaInput = (valueTextArea) =>{

        valueTextArea = props.updateTextAreaInput.current.value
        props.onChangeTextAreaInput(valueTextArea)
    }
    return (
        <div className={styles.contactContainer}>
            <div className={styles.dataFormContainer}>
                <div className={styles.contactText}>
                    <h3>ООО НПП "УКРДЕТАЛЬПРОМ"</h3>
                    <p>ОКПО: 39311282</p>
                    <ul className={styles.contactTextList}>
                        <li>
                            <h5>Адрес для корреспонденции:</h5>
                            <p>69067, г. Запорожье</p>
                            <p>ул. Демократическая 60/1</p>
                        </li>
                        <li>
                            <h5>Адрес производственных мощностей:</h5>
                            <p>69035, г. Запорожье</p>
                            <p>ул. Диагональная 7</p>
                        </li>
                        <li>
                            <p><b>Отдел продаж:</b> +380 (50) 788 76 95</p>
                            <p><b>Дирекция:</b> +380 (95) 234 89 39</p>
                            <p><b>e-mail:</b> <u>office@ukrdetalprom.com.ua</u></p>
                        </li>
                    </ul>
                </div>
                <div>
                <span className={styles.callBackText}>Обратная связь</span>
                        <ul>
                            <li>
                                <p>ФИО: (обязательно):</p>
                                <input className={styles.input_1} onChange={localOnChangeNameInput} ref={props.updateNameInput} value={props.nameInput} />
                            </li>
                            <li>
                                <p>E-mail: (обязательно):</p>
                                <input className={styles.input_1} onChange={localOnChangeEmailInput} ref={props.updateEmailInput} value={props.emailInput} />
                            </li>
                            <li>
                                <p>Тема:</p>
                                <input className={styles.input_1} onChange={localOnChangeSubjectInput} ref={props.updateSubjectInput} value={props.subjectInput} />
                            </li>
                            <li>
                                <p>Сообщение:</p>
                                <textarea className={styles.textArea} onChange={localOnChangeTextAreaInput} ref={props.updateTextAreaInput} value={props.textArea} />
                                
                            </li>
                            <li>
                                <p></p>
                                <button>Отправить сообщение</button>
                            </li>
                        </ul>
                </div>

            </div>
            <div className={styles.mapContainer}>
            map will be here
            </div>
        </div>
    )
}
export default ContactPage