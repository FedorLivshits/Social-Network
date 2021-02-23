import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";


function MyPosts(props) {
    const addNewPost = (values) => {
        props.addPost(values.newPostText);
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

                <MyPostsReduxForm onSubmit={addNewPost} />

                {posts}

            </div>
        </div>

    );
}

const MyPostsForm = (props) => {

    return (
        <div className="row">
            <form className="col s12" onSubmit={props.handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <Field className="materialize-textarea"
                               name={"newPostText"}
                               component={"textarea"}
                               placeholder="What's new, darling?"
                               validate={required}
                        />
                        <button className="post-btn btn waves-effect waves-light">
                            POST
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const MyPostsReduxForm = reduxForm({form: 'myPostsForm'})(MyPostsForm)

export default MyPosts;