import React from "react";
import {addPostActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {setEnLanguage, setRuLanguage} from "../../redux/lang-reducer";


let mapStateToProps = (state) => {
    return {
        postMessages: state.profilePage.postMessages,
        lang: state.language.lang
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;