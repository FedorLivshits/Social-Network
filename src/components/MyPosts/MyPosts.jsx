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
                {(props.lang === "EN") ? "Мои Посты" : "My Posts"}
            </div>
            <div className="posts__box z-depth-2">

                <MyPostsReduxForm onSubmit={addNewPost} {...props}/>

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
                               placeholder= {(props.lang === "EN") ? "Что нового?" : "What's new?"}
                               validate={required}
                        />
                        <button className="post-btn btn waves-effect waves-light">
                            {(props.lang === "EN") ? "Пост" : "POST"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const MyPostsReduxForm = reduxForm({form: 'myPostsForm'})(MyPostsForm)

export default MyPosts;