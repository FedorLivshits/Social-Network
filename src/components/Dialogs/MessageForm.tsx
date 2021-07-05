import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type PropsTypes = {
    sendMessage: (messageText: string) => void
}

export const MessageForm: React.FC<PropsTypes> = ({sendMessage}) => {
    const [text, setText] = useState("")

    const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }
    const onAddMessage = () => {
        sendMessage(text)
        setText('')
    }
    const enterCity = (e: KeyboardEvent): void => {
        if (e.key === 'Enter') {
            e.preventDefault()
            sendMessage(text)
            setText('')
        }
    }
    return (
        <div className="dialog__message-form">
            <div className="input-field dialog__message-form-inside">
                <textarea className="materialize-textarea" placeholder="Your message"
                          name={"newMessageText"} onChange={onTextChange} value={text} onKeyPress={enterCity}/>
                <button className="message-btn btn waves-effect waves-light" onClick={onAddMessage}>
                   Send
                </button>
            </div>
        </div>
    )
}