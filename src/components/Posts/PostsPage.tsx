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
    const onLikeChange = (userId: string) => {
        changeLike(userId)
    }

    return (
        <div className="container">
            <h3 className=" text-left mt-3 mb-5">Posts</h3>
            <div className="row">
                <div className="col-lg-12">
                    {posts.slice(0, endVisible).map(p => {
                        return <div className="user-posts__item" id={p.id} key={p.id}>
                            <div className="user-posts__item-head mb-3">
                                <img className="user-posts__item-img" src={p.owner.picture} alt={photo}/>
                                <h3 className="user-posts__item-user">
                                    {p.owner.firstName} {p.owner.lastName}
                                </h3>
                                <span className='user-posts__item-date'>
                                    {p.publishDate}
                               </span>
                            </div>
                            <div className="user-posts__item-content">
                                <div className="user-posts__item-content-img mr-3">
                                    <img src={p.image} alt=""/>
                                </div>
                                <div className="user-post__item-content-info">
                                    <div className="user-posts__item-text">
                                        <p>
                                            {p.text}
                                        </p>
                                    </div>
                                    <div className="user-posts__btn-section">
                                        <span className="mr-1">{p.liked ? p.likes + 1 : p.likes}</span>
                                        <button className="user-posts__item-btn" onClick={() => onLikeChange(p.id)}>
                                            {p.liked
                                                ?
                                                <Icon icon={bxHeartCircle} width='40px'/>
                                                :
                                                <Icon icon={bxHeart} width='40px'/>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
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
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    posts: state.postsPage.posts
})
export default connect(mapStateToProps, {getPosts, changeLike: actions.changeLike})(PostsPage)