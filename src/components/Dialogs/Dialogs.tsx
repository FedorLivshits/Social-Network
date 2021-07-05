import React from 'react'
import './Dialogs.css'
import {DialogUser} from "./Dialogs.User";
import {InitialStateType} from "../../redux/dialogs-reducer";

type PropsType = {
    sendMessage: (messageText: string) => void
    dialogsPage: InitialStateType
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

const Dialogs: React.FC<PropsType> = ({sendMessage, dialogsPage}) => {

    const addNewMessage = (values: { newMessageText: string }) => {
        sendMessage(values.newMessageText);
    }
    let state = dialogsPage
    let dialogsUsers = state.dialogsData.map(el => <DialogUser name={el.name} id={el.id}/>)
    let myDialogMessages = state.myMessages.map(m => <MyDialogMessages id={m.id} message={m.message}/>)

    return (
        <div className="container">
            <h3 className=" text-left mt-3 mb-5">Messaging</h3>
            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                        <div className="headind_srch">
                            <div className="recent_heading">
                                <h4>Recent</h4>
                            </div>
                            <div className="srch_bar">
                                <div className="stylish-input-group">
                                    <input type="text" className="search-bar" placeholder="Search"/>
                                    <span className="input-group-addon">
                                          <button type="button"> </button>
                                          </span>
                                </div>
                            </div>
                        </div>
                        <div className="inbox_chat">
                            <div className="chat_list active_chat">
                                <div className="chat_people">
                                    <div className="chat_img">
                                        <img className='circle-img'
                                             src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                             alt="sunil"/>
                                    </div>
                                    <div className="chat_ib">
                                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions
                                            astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat_list">
                                <div className="chat_people">
                                    <div className="chat_img">
                                        <img className='circle-img'
                                             src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                             alt="sunil"/>
                                    </div>
                                    <div className="chat_ib">
                                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions
                                            astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mesgs">
                        <div className="msg_history">
                            <div className="incoming_msg">
                                <div className="incoming_msg_img">
                                    <img className='circle-img'
                                         src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                         alt="sunil"/>
                                </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>Test which is a new approach to have all
                                            solutions</p>
                                        <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                            </div>
                            <div className="outgoing_msg">
                                <div className="sent_msg">
                                    <p>Test which is a new approach to have all
                                        solutions</p>
                                    <span className="time_date"> 11:01 AM    |    June 9</span></div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img">
                                    <img className='circle-img'
                                         src="https://ptetutorials.com/images/user-profile.png"
                                         alt="sunil"/>
                                </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>Test, which is a new approach to have</p>
                                        <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                                </div>
                            </div>
                            <div className="outgoing_msg">
                                <div className="sent_msg">
                                    <p>Apollo University, Delhi, India Test</p>
                                    <span className="time_date"> 11:01 AM    |    Today</span></div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img">
                                    <img className='circle-img'
                                         src="https://ptetutorials.com/images/user-profile.png"
                                         alt="sunil"/>
                                </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>We work directly with our designers and suppliers,
                                            and sell direct to you, which means quality, exclusive
                                            products, at a price anyone can afford.</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="type_msg">
                            <div className="input_msg_write">
                                <input type="text" className="write_msg" placeholder="Type a message"/>
                                <button className="msg_send_btn" type="button">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Dialogs;
