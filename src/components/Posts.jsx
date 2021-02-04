import React from "react";
import './Posts.css'

function Posts() {
    return (
        <div className="posts__inner">
            <div className="posts__box z-depth-2">
                <div className="posts-title">
                    My Posts
                </div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea1">What's new, darling?</label>
                                <button className="btn waves-effect waves-light yellow darken-2"
                                        type="submit" name="action">POST
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="posts">
                    <div className="post-1">
                        Something is wrong
                    </div>
                    <div className="post-2">
                        Dupi dipi du
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Posts;