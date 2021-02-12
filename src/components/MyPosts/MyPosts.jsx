import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";



function MyPosts(props) {
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let posts = props.postMessages.map(post => {
        return <Post message={post.message} key={post.id}/>
    })


    return (
        <div className="posts__inner">
            <div className="posts-title">
                My Posts
            </div>
            <div className="posts__box z-depth-2">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea"
                                          placeholder="What's new, darling?"
                                          ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                                <button className="post-btn btn waves-effect waves-light yellow darken-2" type="button"
                                        onClick={onAddPost}>POST
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {posts}

            </div>
        </div>

    );
}

export default MyPosts;