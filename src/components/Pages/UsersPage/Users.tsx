import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getUsers, follow, unfollow } from "../../../redux/users-reducer";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersPage } from '../../../redux/selectors/users-selectors';
import Paginator from "../../Paginator/Paginator";
import Preloader from "../../Preloader/Preloader";
import User from "./User";
import './Users.css';


const Users: React.FC = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getUsersPage)
    const followingInProgress = useSelector(getFollowingInProgress)
    const isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch()

    const onPageChanged = (page: number) => {
        dispatch(actions.setCurrentPage(page))
        dispatch(getUsers(page, pageSize))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }
    return (
        <>
            {isFetching ? <Preloader /> : null}
            <div className="container">
                <h3 className=" text-left mt-3 mb-5">Users</h3>
                <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                    onPageChanged={onPageChanged}
                    currentPage={currentPage} />
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
                                        {users.map(u => <User key={u.id} user={u}
                                            followingInProgress={followingInProgress}
                                            unfollow={unfollow} follow={follow} />)
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
