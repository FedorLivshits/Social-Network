import React from 'react'
import './Dialogs.css'
import photo from '../../images/profile-photo.svg'
import {NavLink} from "react-router-dom";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
    updateNewPostTextActionCreator
} from "../../redux/store";


function DialogUser(props) {
    return (
        <NavLink className="dialog-user collection-item" to={'/dialogs/' + props.id}>
            <div className="dialog-user__avatar">
                <img src={photo} alt=""/>
            </div>
            <div className="dialog-user__name">
                {props.name}
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

    // let newMessageElement = React.createRef()

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let newMessage= event.target.value
        props.dispatch(updateNewMessageTextActionCreator(newMessage));
    }

    let dialogsUsers = props.state.dialogsData.map(el => <DialogUser name={el.name} id={el.id}/>)
    let myDialogMessages = props.state.myMessages.map(m => <MyDialogMessages id={m.id} message={m.message}/>)
    let newMessageElement = props.state.newMessageText;


    return (
        <section className="dialogs__content">
            <div className="dialogs__inner">
                <div className="dialogs__list z-depth-2">
                    <div className="collection">
                        {dialogsUsers}
                    </div>
                </div>

                <div className="dialog__window z-depth-2">
                    <div className="dialog__messages">
                        {myDialogMessages}
                        {/*<div className="my__message">*/}
                        {/*    <span>hello</span>*/}
                        {/*</div>*/}
                        {/*<div className="friend__message ">*/}
                        {/*    <span>how are you?</span>*/}
                        {/*</div>*/}
                        {/*<div className="my__message">*/}
                        {/*    <span>I need something to tell you</span>*/}
                        {/*</div>*/}
                    </div>


                    <div className="dialog__message-form z-depth-2">
                        <div className="input-field dialog__message-form-inside">
                            <textarea id="textarea2" className="materialize-textarea" placeholder="Your message"
                                   value={newMessageElement}  onChange={onMessageChange}/>
                            <button className="message-btn btn waves-effect waves-light yellow darken-2" type="button"
                                    name="action" onClick={sendMessage}>POST
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Dialogs;