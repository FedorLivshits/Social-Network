import React from 'react';
import { NavLink } from "react-router-dom";
import photo from "../../../images/user.png";
import { Icon } from "@iconify/react";
import bxTrash from '@iconify-icons/bx/bx-trash';
import bxAddToQueue from '@iconify-icons/bx/bx-add-to-queue';
import {useDispatch} from 'react-redux'
import {Col, Row, Image} from 'react-bootstrap';

type PropsType = {
    user: any
    followingInProgress: Array<number>
    onUnfollow: (userId: number) => void
    onFollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, onUnfollow, onFollow }) => {

    return (
        <>
        <Row className="user">
            <Col className="user-info">
                <Image src={user.photos.small != null ? user.photos.small : photo}  roundedCircle className="user-img"/>
                <NavLink className="user-link" to={'/profile/' + user.id}>
                    {user.name}
                </NavLink>
            </Col>
            <Col className="user-item user-id">
                <NavLink to={'/profile/' + user.id}>
                    {user.id}
                </NavLink>
            </Col>
            <Col className="user-item user-add">
                {user.followed
                    ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                onUnfollow(user.id)
                            }} className="btn btn-danger">
                        <Icon icon={bxTrash} />
                    </button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                onFollow(user.id)
                            }} className="btn btn-dark">
                        <Icon icon={bxAddToQueue} />
                    </button>}

            </Col>
        </Row>

</>
    )
}

export default User;