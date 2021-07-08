import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "../../redux/posts-reducer";
import {LikedPost} from "./LikedPost";
import {AppStateType} from "../../redux/redux-store";
import {PostType} from "../../types/types";

type MapStateToPropsType = {
    likedPosts: Array<PostType>
}
type MapDispatchToPropsType = {
    removeFromSaved: (userId: string) => void
}
const SavedPage: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({likedPosts, removeFromSaved}) => {

    useEffect(() => {
        localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    }, [likedPosts])

    return (
        <div className="container">
            <h3 className=" text-left mt-3 mb-5">Saved</h3>
            <div className="row">
                <div className="col-lg-12">
                    {likedPosts.length
                        ?
                        <LikedPost likedPosts={likedPosts} removeFromSaved={removeFromSaved}/>
                        :
                        <h3 className="posts__title">No saved content</h3>
                    }

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    likedPosts: state.postsPage.likedPosts
})
export default connect(mapStateToProps, {removeFromSaved: actions.removeFromSaved})(SavedPage)
