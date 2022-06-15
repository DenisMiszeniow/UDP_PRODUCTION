
import React from "react"
import { connect } from "react-redux"
import { onChangeNameAC, onChangeEmailAC, onChangeSubjectAC, onChangeTextAreaAC } from "../../../redux/contact_page_reducer"
import ContactPage from "./contact"



export const mapStateToProps = (state) => {
    return (
        {
            nameInput: state.contactPage.nameInput,
            emailInput: state.contactPage.emailInput,
            subjectInput: state.contactPage.subjectInput,
            textArea: state.contactPage.textArea,
            

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
            updateTextAreaInput: React.createRef()
        }
    )
}



export const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(ContactPage)



