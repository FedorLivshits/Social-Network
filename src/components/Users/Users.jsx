import React from 'react'
import './Users.css'
import photo from '../../images/profile-photo.svg'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                        Find and add friends here
                    </div>
                    <div className="users-search__input">
                        <input type="text" placeholder="find a user"/>
                    </div>

                </div>
                <ul className="pagination z-depth-2">
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
                            <ul className="collection z-depth-2">
                                <li className="collection-item avatar">
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : photo} alt="ava"
                                             className="circle"/>
                                        <div className="user-info">
                                            <span className="title">{u.name}</span>
                                            <p>{"u.location.country"}<br/>
                                                {"u.location.city"}
                                            </p>
                                        </div>
                                    </NavLink>
                                    {u.followed
                                        ?

                                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleFollowingInProgress(true,u.id)
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {"API-KEY": "6bc1146e-24f2-4be4-a0fc-4f85d3b15120"}
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                    props.toggleFollowingInProgress(false,u.id)
                                                })
                                        }} className="btn-floating btn-user indigo darken-3">
                                            <i className="material-icons">delete</i>
                                        </button>
                                        :
                                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleFollowingInProgress(true,u.id)
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: {"API-KEY": "6bc1146e-24f2-4be4-a0fc-4f85d3b15120"}
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                    props.toggleFollowingInProgress(false,u.id)
                                                })
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


