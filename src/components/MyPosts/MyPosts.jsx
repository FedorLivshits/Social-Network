import React, {useState} from "react";
import './MyPosts.css'
import Post from "./Post/Post";


function MyPosts(props) {

    let posts = props.postMessages.map(post => {
        return <Post  id={post.id} message={post.message} key={post.id} deletePost={props.deletePost}/>
    })


    return (
        <div className="posts__inner">
            <div className="posts-title">
                {(props.lang === "EN") ? "Мои Посты" : "My Posts"}
            </div>
            <div className="posts__box z-depth-2">

                <MyPostsForm addPost={props.addPost} {...props}/>

                {posts}

            </div>
        </div>

    );
}

const MyPostsForm = (props) => {
    const [text, setText] = useState('')

    const onTextChange = (e) =>{
        setText(e.target.value)
    }
    const onAddPost = () =>{
        props.addPost(text)
        setText('')
    }
    return (
        <div className="row">
            <div className="col s12" >
                <div className="row">
                    <div className="input-field col s12">
                        <textarea className="materialize-textarea"
                                  value={text}
                                  onChange={onTextChange}
                               name={"newPostText"}
                               placeholder= {(props.lang === "EN") ? "Что нового?" : "What's new?"}
                        />
                        <button className="post-btn btn waves-effect " onClick={onAddPost}>
                            {(props.lang === "EN") ? "Пост" : "POST"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;