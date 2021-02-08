import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/store";



function MyPosts(props) {
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    let posts = props.postMessages.map(post => {
        return <Post message={post.message}/>
    })

    let checkValue = () => {
        let text = newPostElement.current.value;
        if (text === '') {
            alert('nothing to post, darling')
        }
    }

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
                                        onClick={addPost}>POST
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