import React from 'react'
import './Dialogs.css'
import photo from '../images/profile-photo.svg'

function Dialogs (props) {
    return (
        <section className="dialogs__content z-depth-2">
            <div className="dialogs__inner">

                <div className="dialogs__list z-depth-2">
                    <div className="collection">
                        <a className="dialog-user collection-item" href="#">
                            <div className="dialog-user__avatar">
                                <img src={photo} alt=""/>
                            </div>
                            <div className="dialog-user__name">
                                Alexander Sarygin
                            </div>
                        </a>
                        <a className="dialog-user collection-item" href="#">
                            <div className="dialog-user__avatar">
                                <img src={photo} alt=""/>
                            </div>
                            <div className="dialog-user__name">
                                Semen Kopylov
                            </div>
                        </a>
                        <a className="dialog-user collection-item" href="#">
                            <div className="dialog-user__avatar">
                                <img src={photo} alt=""/>
                            </div>
                            <div className="dialog-user__name">
                                Misha Vlaskin
                            </div>
                        </a>
                        <a className="dialog-user collection-item" href="#">
                            <div className="dialog-user__avatar">
                                <img src={photo} alt=""/>
                            </div>
                            <div className="dialog-user__name">
                                Vlad Sosayski
                            </div>
                        </a>
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