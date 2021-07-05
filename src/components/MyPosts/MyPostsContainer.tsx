import React from "react";
import {actions} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {PostMessagesType} from "../../types/types";

type MapStateToPropsType = {
    postMessages: Array<PostMessagesType>
    lang: string
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    deletePost: (id: number) => void
}
let mapStateToProps = (state: AppStateType) => {
    return {
        postMessages: state.profilePage.postMessages,
        lang: state.language.lang
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost: actions.addPost, deletePost: actions.deletePost})(MyPosts)

export default MyPostsContainer;