import React, {useEffect, useState} from "react";
import {actions, getPosts} from "../../redux/posts-reducer";
import photo from "../../images/user.png";
import './user-post.css'
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {PostType} from "../../types/types";
import Icon from "@iconify/react";
import bxHeart from "@iconify-icons/bx/bx-heart";
import bxHeartCircle from '@iconify-icons/bx/bx-heart-circle';
import {UserPost} from "./UserPost";
import Preloader from "../Preloader/Preloader";

type MapStateToPropsType = {
    posts: Array<PostType>
}
type MapDispatchToPropsType = {
    getPosts: () => void
    changeLike: (userId: string) => void
}
const PostsPage: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({getPosts, posts, changeLike}) => {
    const [endVisible, setEndVisible] = useState(10);

    useEffect(() => getPosts(), [])

    const showMore = () => {
        setEndVisible(endVisible + 10);
    }

    return (
        <div className="container">
            <h3 className=" text-left mt-3 mb-5">Posts</h3>
            <div className="row">
                {posts.length
                    ?
                    <>
                        <UserPost posts={posts} endVisible={endVisible} changeLike={changeLike}/>
                        {endVisible <= posts.length
                            ?
                            <div className="posts__btn-section">
                                <button className='posts__btn' onClick={showMore}
                                >Show more
                                </button>
                            </div>
                            :
                            ''
                        }
                    </>
                    :
                    <Preloader/>
                }

            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    posts: state.postsPage.posts
})
export default connect(mapStateToProps, {getPosts, changeLike: actions.changeLike})(PostsPage)