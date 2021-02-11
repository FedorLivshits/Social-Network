import React from 'react'
import './Dialogs.css'
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
   return {
       dialogsPage: state.dialogsPage
   }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
           dispatch(sendMessageActionCreator());
        },
        updateNewMessageText: (newMessage) => {
            dispatch(updateNewMessageTextActionCreator(newMessage))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;