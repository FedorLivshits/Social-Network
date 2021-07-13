import React from "react";
import {connect} from "react-redux";
import {actions} from "../../../../redux/profile-reducer";
import {AppStateType} from "../../../../redux/redux-store";
import {MyPostsType, ProfileType} from "../../../../types/types";
import {PostForm} from "./PostForm";
import {Post} from "./Post";


type MapStateToPropsType = {
    profile: ProfileType
    myPosts: Array<MyPostsType>
    isFetching: boolean
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
    deletePost: (id: any) => void
}

const MyPostsComponent: React.FC<any> = React.memo((props) => {
    return (
        <>
            <PostForm addPost={props.addPost} profile={props.profile}/>
            <div className="posts__items">
                <Post myPosts={props.myPosts} profile={props.profile} deletePost={props.deletePost}/>
            </div>
        </>
    )
})

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    myPosts: state.profilePage.myPosts,
    isFetching: state.usersPage.isFetching
})

export default connect(mapStateToProps, {addPost: actions.addPost, deletePost: actions.deletePost})(MyPostsComponent);