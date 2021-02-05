import React from "react";
import './Posts.css'
import Post from "../Post/Post";



function Posts(props) {
    let postMessages = [
        {id: 1, message:'В процессе разработки'},
        {id: 2, message:'Свободу Алексею Навальному!'},
        {id: 3, message:'Использую метод массива map'},
    ]

    let posts = postMessages.map(post => { return <Post message={post.message}/>})

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
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea1">What's new, darling?</label>
                                <button className="post-btn btn waves-effect waves-light yellow darken-2" type="submit"
                                        name="action">POST
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



export default Posts;