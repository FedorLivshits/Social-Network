import React from 'react'
import './Dialogs.css'
import photo from '../../images/profile-photo.svg'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";


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

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }
    let state = props.dialogsPage
    let dialogsUsers = state.dialogsData.map(el => <DialogUser name={el.name} id={el.id}/>)
    let myDialogMessages = state.myMessages.map(m => <MyDialogMessages id={m.id} message={m.message}/>)

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
                <div className="dialogs__list">
                    <div className="collection">
                        {dialogsUsers}
                    </div>
                </div>

                <div className="dialog__window">
                    <div className="dialog__messages">
                        {myDialogMessages}
                    </div>


                    <MessageReduxForm onSubmit={addNewMessage}/>
                </div>

            </div>
        </section>
    );
}


const MessageForm = (props) => {
    return (
        <form className="dialog__message-form" onSubmit={props.handleSubmit}>
            <div className="input-field dialog__message-form-inside">
                <Field className="materialize-textarea" placeholder="Your message"
                       name={"newMessageText"}
                       component={"textarea"} validate={required}/>
                <button className="message-btn btn waves-effect waves-light">
                    POST
                </button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'messageForm'})(MessageForm)


export default Dialogs;