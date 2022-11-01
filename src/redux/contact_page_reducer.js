const ADD_NAME = 'ADD_NAME'
const ADD_EMAIL = 'ADD_EMAIL'
const ADD_SUBJECT = 'ADD_SUBJECT'
const ADD_TEXTAREA = 'ADD_TEXTAREA'
const SEND_MESSAGE = 'SEND_MESSAGE'
const MESSAGE_LOADER = 'MESSAGE_LOADER'
const ERROR_SEND_MESSAGE = 'ERROR_SEND_MESSAGE'
const CLEAR_MESSAGE_STATUS = 'CLEAR_MESSAGE_STATUS'

const initialState = {
    messageBody: [],
    nameInput: '',
    emailInput: '',
    subjectInput: '',
    textArea: '',
    messageStatus: '',
    messageLoader: false,
    messageSendError: false
}

export const contactPageReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_NAME: return ({...state, nameInput: action.valueName})
        case ADD_EMAIL: return ({...state, emailInput: action.valueEmail})
        case ADD_SUBJECT: return ({...state, subjectInput: action.valueSubject})
        case ADD_TEXTAREA: return ({...state, textArea: action.valueTextArea})
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.nameInput = ''
            stateCopy.emailInput =''
            stateCopy.subjectInput = ''
            stateCopy.textArea = ''
            stateCopy.messageLoader = false
            stateCopy.messageSendError = false
            stateCopy.messageStatus = 'ВIДПРАВЛЕНО!'
            return (
                stateCopy
            )
        }
        case ERROR_SEND_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.messageLoader = false
            stateCopy.messageSendError = true
            stateCopy.messageStatus = 'ПОМИЛКА!'
            return (
                stateCopy
            )
        }
        case MESSAGE_LOADER: {
            let stateCopy = {...state}
            stateCopy.messageLoader = true
            stateCopy.messageSendError = false
            stateCopy.messageStatus = ''
            return (
                stateCopy
            )
        }
        case CLEAR_MESSAGE_STATUS: return ({...state, messageStatus: ''})
        default: return state
    }
}

export const onChangeNameAC = (valueName) => ({type: ADD_NAME, valueName})
export const onChangeEmailAC = (valueEmail) => ({type: ADD_EMAIL, valueEmail})
export const onChangeSubjectAC = (valueSubject) => ({type: ADD_SUBJECT, valueSubject})
export const onChangeTextAreaAC = (valueTextArea) => ({type: ADD_TEXTAREA, valueTextArea})
export const onSentAC = () => ({type: SEND_MESSAGE})
export const onSentErrortAC = () => ({type: ERROR_SEND_MESSAGE})
export const onClickSendMessageAC = () => ({type: MESSAGE_LOADER})
export const clearMessageStatusAC = () => ({type: CLEAR_MESSAGE_STATUS})