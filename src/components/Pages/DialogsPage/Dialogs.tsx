import bxSend from '@iconify-icons/bx/bx-send';
import Icon from '@iconify/react';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { MyMessagesType } from '../../../types/types';
import './Dialogs.css';


const OutgoingMessage: React.FC<MyMessagesType> = ({ id, message, date, time }) => {
    return (
        <div className="outgoing__msg">
            <div className="sent__msg">
                <p>{message}</p>
                <span className="time__date"> {time}    |    {date}</span></div>
        </div>
    )
}

const IncommingMessage = () => {
    return (
        <div className="incoming__msg">
            <div className="incoming__msg-img">
                <img className='circle-img'
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="sunil" />
            </div>
            <div className="received__msg">
                <div className="received__withd-msg">
                    <p>Test which is a new approach to have all
                        solutions</p>
                    <span className="time__date"> 11:01 AM    |    June 9</span></div>
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

    const onEnterPressTextarea = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            sendMessage(messageText, authUserId);
            setMessageText('')
        }
    }

    return (
        <div className="container chat">
            <h3 className=" text-left pt-3 mb-5">Messaging</h3>
            <div className="messaging content-mobile">
                <div className="inbox__msg rounded">
                    <div className="inbox__people">
                        <div className="headind__srch">
                            <div className="recent__heading">
                                <h4>Recent</h4>
                            </div>
                            <div className="srch__bar">
                                <div className="stylish-input-group">
                                    <input type="text" className="search-bar" placeholder="Search" />
                                    <span className="input-group-addon">
                                        <button type="button"> </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="inbox__chat">
                            <div className="chat__list active__chat">
                                <div className="chat__people">
                                    <div className="chat__img">
                                        <img className='circle-img'
                                            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                            alt="sunil" />
                                    </div>
                                    <div className="chat__ib">
                                        <h5>Sunil Rajput <span className="chat__date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions
                                            astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mesgs">
                        <div className="msg__history">
                            <IncommingMessage />
                            {myMessages.map(m => <OutgoingMessage id={m.id} message={m.message} date={m.date} time={m.time} />)}
                        </div>
                        <div className="type__msg">
                            <div className="input__msg-write">
                                <input type="text" className="write__msg" placeholder="Type a message" value={messageText} onChange={onMessageTextChange} onKeyPress={onEnterPressTextarea} />
                                <button className="btn btn-dark float-right" type="button" onClick={addNewMessage}>
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
