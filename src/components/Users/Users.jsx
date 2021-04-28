import React from 'react'
import './Users.css'
import photo from '../../images/profile-photo.svg'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";

function Users(props) {
    return (
        <section className="users__content ">

            <div className="users__inner">

                <div className="users__header z-depth-2">
                    <div className="users__title">
                        {(props.lang === "EN") ? "Найдите и добавьте друзей здесь" : "Find and add friends here"}
                    </div>
                </div>
                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                           onPageChanged={props.onPageChanged}
                           currentPage={props.currentPage} portionSize={props.portionSize}/>
                <div className="preloader__box">
                    {props.isFetching ? <Preloader/> : null}
                </div>
                <div className="users">

                    <div className="users__column-1">

                        {props.users.map(u =>
                            <ul className="collection">
                                <li className="collection-item avatar">
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : photo} alt="ava"
                                             className="circle"/>
                                        <div className="user-info">
                                            <span className="title">{u.name}</span>
                                        </div>
                                    </NavLink>
                                    {u.followed
                                        ?

                                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.unfollow(u.id)
                                                }} className="btn-floating btn-user indigo darken-3">
                                            <i className="material-icons">delete</i>
                                        </button>
                                        :
                                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.follow(u.id)
                                                }} className="btn-floating btn-user yellow darken-2">
                                            <i className="material-icons">add</i>
                                        </button>}

                                </li>
                            </ul>
                        )
                        }
                    </div>
                    <div className="users__column-2">

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Users;


