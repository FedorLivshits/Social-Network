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

   let dialogsData = [
       {name:'Alexander Sarygin', id: '1'},
       {name:'Sergey Solod', id: '2'},
       {name:'Vlad Sosaysky', id: '3'},
       {name:'Artem Kirpu', id: '4'},
       {name:'Sam kopylov', id: '5'},
       {name:'Pavel Ostapchuk', id: '6'},
   ]

let dialogsUsers = dialogsData.map(el => <DialogUser name={el.name} id={el.id}/>)

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
                            Hello
                        </div>
                    </div>


                    <div className="dialog__message-form z-depth-2">
                        <div className="input-field dialog__message-form-inside">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Your message</label>
                            <button className="btn waves-effect waves-light yellow darken-2" type="submit"
                                    name="action">POST
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Dialogs;