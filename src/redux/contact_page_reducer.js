const ADD_NAME = 'ADD_NAME'
const ADD_EMAIL = 'ADD_EMAIL'
const ADD_SUBJECT = 'ADD_SUBJECT'
const ADD_TEXTAREA = 'ADD_TEXTAREA'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    messageBody: [],
    nameInput: 'Denis',
    emailInput: 'duminocorp@gmail.com',
    subjectInput: 'Hello UDP',
    textArea: 'Hej'
}

export const contactPageReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_NAME: {
            let stateCopy = {...state}
            stateCopy.nameInput = action.valueName
            return (
                stateCopy
            )
        }
        case ADD_EMAIL: {
            let stateCopy = {...state}
            stateCopy.emailInput = action.valueEmail
            return (
                stateCopy
            )
        }
        case ADD_SUBJECT: {
            let stateCopy = {...state}
            stateCopy.subjectInput = action.valueSubject
            return (
                stateCopy
            )
        }
        case ADD_TEXTAREA: {
            let stateCopy = {...state}
            stateCopy.textArea = action.valueTextArea
            return (
                stateCopy
            )
        }
        case SEND_MESSAGE: {
            return (
                {...state}
            )
        }
        default: return state
    }
}

export const onChangeNameAC = (valueName) => ({type: ADD_NAME, valueName})
export const onChangeEmailAC = (valueEmail) => ({type: ADD_EMAIL, valueEmail})
export const onChangeSubjectAC = (valueSubject) => ({type: ADD_SUBJECT, valueSubject})
export const onChangeTextAreaAC = (valueTextArea) => ({type: ADD_TEXTAREA, valueTextArea})