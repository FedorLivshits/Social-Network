import bxSend from '@iconify-icons/bx/bx-send';
import Icon from '@iconify/react';
import React, { ChangeEvent, useState } from 'react';
import { MyMessagesType } from '../../types/types';
import './Dialogs.css';


const OutgoingMessage: React.FC<MyMessagesType> = ({id, message, date, time}) => {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{message}</p>
                <span className="time_date"> {time}    |    {date}</span></div>
        </div>
    )
}

const IncommingMessage = () => {
    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img className='circle-img'
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>Test which is a new approach to have all
                        solutions</p>
                    <span className="time_date"> 11:01 AM    |    June 9</span></div>
            </div>
        </div>
    )
}

type PropsType = {
    sendMessage: (messageText: string, id: number) => void
    myMessages: Array<MyMessagesType>
    authUserId: number
}

const Dialogs: React.FC<PropsType> = ({ sendMessage, myMessages, authUserId }) => {
    const [messageText, setMessageText] = useState('')

    const onMessageTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessageText(e.target.value)
    }

    const addNewMessage = () => {
        sendMessage(messageText, authUserId);
        setMessageText('')
    }

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
                                    <input type="text" className="search-bar" placeholder="Search" />
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
                                            alt="sunil" />
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
                            <IncommingMessage />
                           {myMessages.map(m => <OutgoingMessage  id={m.id} message={m.message} date={m.date} time={m.time}/>)}
                        </div>
                        <div className="type_msg">
                            <div className="input_msg_write">
                                <input type="text" className="write_msg" placeholder="Type a message" value={messageText} onChange={onMessageTextChange} />
                                <button className="msg_send_btn" type="button" onClick={addNewMessage}>
                                    <Icon icon={bxSend} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Dialogs;
