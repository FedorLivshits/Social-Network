import React from 'react'
import './Users.css'
import Preloader from "../Preloader/Preloader";
import Paginator from "../Paginator/Paginator";
import User from "./User";
import {UsersType} from "../../types/types"

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (page: number) => void
    users: Array<UsersType>
    isFetching: boolean
    followingInProgress: Array<number>
    lang: string
}

const Users: React.FC<PropsType> = (props) => {
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
                           currentPage={props.currentPage}/>
                <div className="preloader__box">
                    {props.isFetching ? <Preloader/> : null}
                </div>
                <div className="users">

                    <div className="users__column-1">
                        <ul className="collection">
                            {props.users.map(u => <User key={u.id} user={u}
                                                        followingInProgress={props.followingInProgress}
                                                        unfollow={props.unfollow} follow={props.follow}/>)
                            }
                        </ul>
                    </div>
                    <div className="users__column-2">

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Users;


