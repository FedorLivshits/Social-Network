import React from 'react'
import './Users.css'
import photo from '../../images/profile-photo.svg'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";


function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <section className="users__content ">

            <div className="users__inner">

                <div className="users__header z-depth-2">
                    <div className="users__title">
                        {(props.lang === "EN") ? "Найдите и добавьте друзей здесь" : "Find and add friends here"}
                    </div>
                </div>
                <ul className="pagination">
                    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a>
                    </li>
                    {pages.slice(0, 10).map(page => {
                        return (
                            <li className={props.currentPage === page && "active"} onClick={(e) => {
                                props.onPageChanged(page)
                            }}><a href="#!">{page}</a>
                            </li>)
                    })}

                    <li className="waves-effect"><a href="#!"><i
                        className="material-icons">chevron_right</i></a></li>
                </ul>
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

                                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.unfollow(u.id)
                                        }} className="btn-floating btn-user indigo darken-3">
                                            <i className="material-icons">delete</i>
                                        </button>
                                        :
                                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
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


