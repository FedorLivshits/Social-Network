import React from 'react'
import './Dialogs.css'
import photo from '../../images/profile-photo.svg'
import {NavLink} from "react-router-dom";

function DialogUser(props) {
    return (
        <NavLink className="dialog-user collection-item" to={'/dialogs/' + props.id}>
            <div className="dialog-user__info">
            <div className="dialog-user__avatar">
                <img src={photo} alt=""/>
            </div>
            <div className="dialog-user__name">
                {props.name}
            </div>
            </div>
            <div className="icon">
            <i className="material-icons">near_me</i>
            </div>
        </NavLink>

    );
}

function MyDialogMessages(props) {
    return (
        <div className="chat__inner">
            <div className="my__message">
                <span>{props.message}</span>
            </div>
        </div>
    )
}

function Dialogs(props) {
    let state= props.dialogsPage

    let dialogsUsers = state.dialogsData.map(el => <DialogUser name={el.name} id={el.id}/>)
    let myDialogMessages = state.myMessages.map(m => <MyDialogMessages id={m.id} message={m.message}/>)
    let newMessageElement = state.newMessageText;

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) => {
        let newMessage= event.target.value
        props.updateNewMessageText(newMessage);
    }

    return (
        <section className="dialogs__content">
            <div className="dialogs__header z-depth-2">
                <div className="dialogs__title">
                    Write friends here
                </div>
                <div className="dialogs-search__input">
                    <input type="text" placeholder="find a friend"/>
                </div>
            </div>
            <div className="dialogs__inner">
                <div className="dialogs__list z-depth-2">
                    <div className="collection">
                        {dialogsUsers}
                    </div>
                </div>

                <div className="dialog__window z-depth-2">
                    <div className="dialog__messages">
                        {myDialogMessages}
                    </div>


                    <div className="dialog__message-form z-depth-2">
                        <div className="input-field dialog__message-form-inside">
                            <textarea id="textarea2" className="materialize-textarea" placeholder="Your message"
                                   value={newMessageElement}  onChange={onMessageChange}/>
                            <button className="message-btn btn waves-effect waves-light yellow darken-2" type="button"
                                    name="action" onClick={onSendMessage}>POST
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Dialogs;