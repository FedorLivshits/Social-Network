import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { actions } from "../../../redux/posts-reducer";
import { getLikedPosts } from "../../../redux/selectors/posts-selectors";
import { LikedPost } from "./LikedPost";


export const SavedPage = () => {
    const likedPosts = useSelector(getLikedPosts)

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
                        <LikedPost likedPosts={likedPosts} removeFromSaved={actions.removeFromSaved} />
                        :
                        <h3 className="posts__title">No saved content</h3>
                    }

                </div>
            </div>
        </div>
    )
}

