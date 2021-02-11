import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";


function MyPostsContainer(props) {

    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} postMessages={state.profilePage.postMessages}
                 newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;