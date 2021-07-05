import React, {ChangeEvent, useState} from "react";
import './Post.css'
import {ProfileType} from "../../types/types";

type PropsType = {
    addPost: (text: string) => void
    profile: ProfileType
}

export const PostForm: React.FC<PropsType> = ({addPost, profile}) => {
    const [text, setText] = useState('');

    const onTextChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        setText(text);
    }
    const onAddPost = () => {
        if (text) {
            addPost(text);
            setText('');
        }

    }

    const onEnterPressTextarea = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onAddPost();
        }
    }

    return (
        <section className="form mb-5">
            <div className="form__inner">
                    <textarea className="form__input textarea" placeholder={`what's on your mind, ${profile.fullName}?`}
                              onChange={onTextChanged} onKeyDown={onEnterPressTextarea} value={text}/>
                <button className="btn btn-dark ml-auto"
                        onClick={onAddPost}
                        disabled={!text}>
                    Add Article
                </button>
            </div>
        </section>
    )
}


