import React from "react";
import './Post.css'
import photo from '../../../images/profile-photo.svg'

function Post(props) {
    return (
        <div className="posts">
            <div className="post-text">
            <div className="post__icon-logo">
                <img src={photo} alt=""/>
            </div>
            <div className="post">
                {props.message}
            </div>
            </div>
            <button className="btn-floating btn-user delete__post-btn indigo darken-3">
                <i className="material-icons">delete</i>
            </button>
        </div>
    );
}

export default Post;