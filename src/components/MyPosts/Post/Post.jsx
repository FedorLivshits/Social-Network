import React from "react";
import './Post.css'
import photo from '../../../images/profile-photo.svg'

function Post(props) {
    return(
        <div className="posts">
            <div className="post__icon-logo">
                <img src={photo} alt=""/>
            </div>
            <div className="post">
                {props.message}
            </div>
        </div>
    );
}

export default Post;