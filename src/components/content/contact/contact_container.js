
import React from "react"
import { connect } from "react-redux"
import { onChangeNameAC, onChangeEmailAC, onChangeSubjectAC, onChangeTextAreaAC, onSentAC, onClickSendMessageAC, onSentErrortAC } from "../../../redux/contact_page_reducer"
import ContactPage from "./contact"



export const mapStateToProps = (state) => {
    return (
        {
            nameInput: state.contactPage.nameInput,
            emailInput: state.contactPage.emailInput,
            subjectInput: state.contactPage.subjectInput,
            textArea: state.contactPage.textArea,
            messageStatus: state.contactPage.messageStatus,
            errorMessage: state.contactPage.messageSendError,
            loader: state.contactPage.messageLoader

        }
    )
}
export const mapDispatchToProps = (dispatch) => {
    return (
        {
            onChangeNameInput: (valueName) => {dispatch(onChangeNameAC(valueName))},
            updateNameInput: React.createRef(),
            onChangeEmailInput: (valueEmail) => {dispatch(onChangeEmailAC(valueEmail))},
            updateEmailInput: React.createRef(),
            onChangeSubjectInput: (valueSubject) => {dispatch(onChangeSubjectAC(valueSubject))},
            updateSubjectInput: React.createRef(),
            onChangeTextAreaInput: (valueTextArea) => {dispatch(onChangeTextAreaAC(valueTextArea))},
            updateTextAreaInput: React.createRef(),
            onSentMessage: () => {dispatch(onSentAC())},
            onSentMessageError: () => {dispatch(onSentErrortAC())},
            onClickSendMessage: () => {dispatch(onClickSendMessageAC())}
        }
    )
}



export const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(ContactPage)



