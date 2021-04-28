import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching, getLang,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../redux/users-selectors";


function UsersContainer(props) {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])

    const onPageChanged = (page) => {
        props.setCurrentPage(page);
        props.getUsers(page, props.pageSize)
    }

    return (
        <Users totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               follow={props.follow}
               unfollow={props.unfollow}
               onPageChanged={onPageChanged}
               users={props.users}
               isFetching={props.isFetching}
               followingInProgress={props.followingInProgress}
               toggleFollowingInProgress={props.toggleFollowingInProgress}
               lang={props.lang}
        />

    )
}


const mapStateToProps = (state) => {
    return {
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        lang: getLang(state)
    }
}
export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setIsFetching,
        toggleFollowingInProgress,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer)
