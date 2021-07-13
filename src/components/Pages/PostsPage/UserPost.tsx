import photo from "../../../images/user.png";
import Icon from "@iconify/react";
import bxHeartCircle from "@iconify-icons/bx/bx-heart-circle";
import bxHeart from "@iconify-icons/bx/bx-heart";
import React from "react";
import { PostType } from "../../../types/types";

type PropsType = {
    posts: Array<PostType>
    changeLike: (id: string) => void
}

export const UserPost: React.FC<PropsType> = ({ posts, changeLike }) => {
    const onLikeChange = (userId: string) => {
        changeLike(userId)
    }
    return (
        <div className="col-lg-12">
            {posts.map((p, i) => {
                return <div className="user-posts__item  border rounded" id={p.id} key={i}>
                    <div className="user-posts__item-head mb-3">
                        <img className="user-posts__item-img" src={p.owner.picture} alt={photo} />
                        <div className="name-email">
                            <h3 className="user-posts__item-user">
                                {p.owner.firstName} {p.owner.lastName}
                            </h3>
                            <span className="user-posts__item-email">{p.owner.email}</span>
                        </div>
                        <span className='user-posts__item-date'>
                            {p.publishDate}
                        </span>
                    </div>
                    <div className="user-posts__item-content">
                        <div className="user-posts__item-content-img mr-3">
                            <img src={p.image} alt="" />
                        </div>
                        <div className="user-post__item-content-info">
                            <div className="user-posts__item-text">
                                <div className="user-posts__item-head mb-3">
                                    <img className="user-posts__item-img" src={p.owner.picture} alt={photo} />
                                    <h3 className="user-posts__item-user">
                                        {p.owner.firstName} {p.owner.lastName}
                                    </h3>
                                </div>
                                <p>
                                    {p.text}
                                </p>
                            </div>
                            <div className="user-posts__btn-section">
                                <span className="mr-1">{p.liked ? p.likes + 1 : p.likes}</span>
                                <button className="user-posts__item-btn" onClick={() => onLikeChange(p.id)}>
                                    {p.liked
                                        ?
                                        <Icon icon={bxHeartCircle} width='40px' />
                                        :
                                        <Icon icon={bxHeart} width='40px' />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}