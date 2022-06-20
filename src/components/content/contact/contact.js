import styles from './contact.module.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

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

    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_vx9a5cz', 'template_cngc31m', form.current, 'rB9N2zoV8qvOchXfR')
        .then((result) => {
            console.log(result.text)
            props.onSentMessage()
        }, (error) => {
            console.log(error.text)
            props.onSentMessageError()
        })
    }
    const onClickLoader = () => {
        props.onClickSendMessage()
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
                <div className={styles.contactFormContainer}>
                    <span className={styles.callBackText}>Обратная связь</span>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>ФИО: (обязательно):</label>
                                <input name='user_name' type='text' className={styles.input_1} onChange={localOnChangeNameInput} ref={props.updateNameInput} value={props.nameInput} placeholder="наприклад: Петро Сидоренко"/>
                                
                                <label>E-mail: (обязательно):</label>
                                <input name='user_email' type='email' className={styles.input_1} onChange={localOnChangeEmailInput} ref={props.updateEmailInput} value={props.emailInput} placeholder="наприклад: petro@website.com"/>
                                
                                <label>Тема:</label>
                                <input name='subject' type='text' className={styles.input_1} onChange={localOnChangeSubjectInput} ref={props.updateSubjectInput} value={props.subjectInput} />
                                
                                <label>Сообщение:</label>
                                <textarea name='message' className={styles.textArea} onChange={localOnChangeTextAreaInput} ref={props.updateTextAreaInput} value={props.textArea} />
                                
                                <input type='submit'className={styles.submitButton} onClick={onClickLoader} value='ОТПРАВИТЬ СООБЩЕНИЕ' />
                                <span className={`${styles.messageStatus} ${props.loader && styles.messageStatusLoader} ${props.errorMessage && styles.messageError}`}>{props.messageStatus}</span>
                            </form>
                </div>
            </div>
            <div className={styles.mapContainer}>
            map will be here
            </div>
        </div>
    )
}
export default ContactPage