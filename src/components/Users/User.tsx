import React from 'react';
import {NavLink} from "react-router-dom";
import photo from "../../images/profile-photo.svg";

type PropsType = {
    user: any
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}


const User : React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <li className="collection-item avatar">
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : photo} alt="ava"
                     className="circle"/>
                <div className="user-info">
                    <span className="title">{user.name}</span>
                </div>
            </NavLink>
            {user.followed
                ?
                <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }} className="btn-floating btn-user indigo darken-3">
                    <i className="material-icons">delete</i>
                </button>
                :
                <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id)
                        }} className="btn-floating btn-user yellow darken-2">
                    <i className="material-icons">add</i>
                </button>}
        </li>
    )
}

export default User;