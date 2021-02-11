import React from 'react'
import './Dialogs.css'
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


function DialogsContainer(props) {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (newMessage) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessage));
    }

    return (<Dialogs sendMessage={sendMessage} updateNewMessageText={onMessageChange} dialogsPage={state}/>);
}

export default DialogsContainer;