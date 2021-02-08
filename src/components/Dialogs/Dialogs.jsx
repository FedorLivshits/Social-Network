import React from 'react'
import './Dialogs.css'
import photo from '../../images/profile-photo.svg'
import {NavLink} from "react-router-dom";


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

function Dialogs(props) {

    let newMessageElement = React.createRef()
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    let dialogsUsers = props.state.dialogsData.map(el => <DialogUser name={el.name} id={el.id}/>)

    return (
        <section className="dialogs__content z-depth-2">
            <div className="dialogs__inner">

                <div className="dialogs__list z-depth-2">
                    <div className="collection">
                        {dialogsUsers}
                    </div>
                </div>

                <div className="dialog__window z-depth-2">
                    <div className="dialog__messages">
                        <div className="main-user__dialog__messages">

                        </div>
                    </div>


                    <div className="dialog__message-form z-depth-2">
                        <div className="input-field dialog__message-form-inside">
                            <textarea id="textarea1" className="materialize-textarea" placeholder="Your message"
                                      ref={newMessageElement}/>
                            <button className="btn waves-effect waves-light yellow darken-2" type="submit"
                                    name="action" onClick={addMessage}>POST
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Dialogs;