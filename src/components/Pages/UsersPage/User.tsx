import React from 'react';
import { NavLink } from "react-router-dom";
import photo from "../../../images/user.png";
import { Icon } from "@iconify/react";
import bxTrash from '@iconify-icons/bx/bx-trash';
import bxAddToQueue from '@iconify-icons/bx/bx-add-to-queue';

type PropsType = {
    user: any
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <tr>
            <td>
                <img src={user.photos.small != null ? user.photos.small : photo} alt="ava"
                    className="circle" />
                <NavLink className="user-link" to={'/profile/' + user.id}>
                    {user.name}
                </NavLink>
                <span className="user-subhead">{user.status ? user.status : "no status"}</span>
            </td>
            <td>
                2013/08/08
            </td>
            <td className="text-center">
                <NavLink to={'/profile/' + user.id}>
                    {user.id}
                </NavLink>
            </td>
            <td>
                {user.followed
                    ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }} className="btn btn-danger">
                        <Icon icon={bxTrash} />
                    </button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id)
                        }} className="btn btn-dark">
                        <Icon icon={bxAddToQueue} />
                    </button>}

            </td>
            <td>
                <a href="#" className="table-link">
                    <span className="fa-stack">
                    </span>
                </a>
                <a href="#" className="table-link">
                    <span className="fa-stack">
                    </span>
                </a>
                <a href="#" className="table-link danger">
                    <span className="fa-stack">
                    </span>
                </a>
            </td>
        </tr>

    )
}

export default User;