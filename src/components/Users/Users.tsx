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
        <>
            {props.isFetching ? <Preloader/> : null}
            <div className="container">
                <h3 className=" text-left mt-3 mb-5">Users</h3>
                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                           onPageChanged={props.onPageChanged}
                           currentPage={props.currentPage}/>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-box clearfix">
                            <div className="table-responsive">
                                <table className="table user-list">
                                    <thead>
                                    <tr>
                                        <th><span>User</span></th>
                                        <th><span>Created</span></th>
                                        <th className="text-center"><span>ID</span></th>
                                        <th><span>Add</span></th>
                                        <th>&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.users.map(u => <User key={u.id} user={u}
                                                                followingInProgress={props.followingInProgress}
                                                                unfollow={props.unfollow} follow={props.follow}/>)
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}


export default Users;
