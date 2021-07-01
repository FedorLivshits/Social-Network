import React from 'react'
import './Dialogs.css'
import {DialogUser} from "./Dialogs.User";
import {MessageForm} from "./MessageForm";
import {InitialStateType} from "../../redux/dialogs-reducer";

type PropsType = {
    sendMessage: (messageText: string) => void
    dialogsPage: InitialStateType
    lang: string
}

type DialogMessagesPropsType = {
    id: string
    message: string
}

const MyDialogMessages: React.FC<DialogMessagesPropsType> = props => (
    <div className="chat__inner">
        <div className="my__message">
            <span>{props.message}</span>
        </div>
    </div>
);

const Dialogs: React.FC<PropsType> = ({sendMessage, dialogsPage, lang}) => {

    const addNewMessage = (values: { newMessageText: string }) => {
        sendMessage(values.newMessageText);
    }
    let state = dialogsPage
    let dialogsUsers = state.dialogsData.map(el => <DialogUser name={el.name} id={el.id}/>)
    let myDialogMessages = state.myMessages.map(m => <MyDialogMessages id={m.id} message={m.message}/>)

    return (
        <section className="dialogs__content">
            <div className="dialogs__header z-depth-2">
                <div className="dialogs__title">
                    {(lang === "EN") ? "Напишите друзьям здесь" : "Write friends here"}
                </div>
            </div>
            <div className="dialogs__inner">
                <div className="dialogs__list">
                    <div className="collection">
                        {dialogsUsers}
                    </div>
                </div>

                <div className="dialog__window">
                    <div className="dialog__messages">
                        {myDialogMessages}
                    </div>
                    <MessageForm sendMessage={sendMessage} lang={lang}/>
                </div>

            </div>
        </section>
    );
};


export default Dialogs;