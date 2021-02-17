import React from 'react'
import './Users.css'
import photo from '../../images/profile-photo.svg'
import Preloader from "../Preloader/Preloader";


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

                {props.isFetching ? <Preloader/> : null}

                <div className="users">

                    <div className="users__column-1">

                        {props.users.map(u =>
                            <ul className="collection z-depth-2">
                                <li className="collection-item avatar">
                                    <img src={u.photos.small != null ? u.photos.small : photo} alt="ava"
                                         className="circle"/>
                                    <div className="user-info">
                                        <span className="title">{u.name}</span>
                                        <p>{"u.location.country"}<br/>
                                            {"u.location.city"}
                                        </p>
                                    </div>
                                    {u.followed
                                        ?
                                        <a onClick={() => {
                                            props.follow(u.id)
                                        }}
                                           className="btn-floating btn-user indigo darken-3">
                                            <i className="material-icons">delete</i>
                                        </a>
                                        :
                                        <a onClick={() => {
                                            props.unfollow(u.id)
                                        }} className="btn-floating btn-user yellow darken-2">
                                            <i className="material-icons">add</i>
                                        </a>}

                                </li>
                            </ul>
                        )
                        }
                    </div>
                    <div className="users__column-2">
                        <ul className="pagination">
                            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a>
                            </li>
                            {pages.map(page => {
                                return (
                                    <li className={props.currentPage === page && "active"} onClick={(e) => {
                                        props.onPageChanged(page)
                                    }}><a href="#!">{page}</a>
                                    </li>)
                            })}

                            <li className="waves-effect"><a href="#!"><i
                                className="material-icons">chevron_right</i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Users;