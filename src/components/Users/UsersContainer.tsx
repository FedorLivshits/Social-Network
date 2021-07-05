import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    actions,
    follow, getUsers,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {withAuthToRedirect} from "../hoc/withAuthToRedirect";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching, getLang,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../redux/users-selectors";
import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type OwnPropsType = {}
type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    users: Array<UsersType>
    isFetching: boolean
    followingInProgress: Array<number>
    lang: string
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const UsersContainer: React.FC<PropsType> = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])

    const onPageChanged = (page: number) => {
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
               lang={props.lang}
        />

    )
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        lang: getLang(state),
    }
}
export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        getUsers,
        setCurrentPage: actions.setCurrentPage
    }),
    withAuthToRedirect
)(UsersContainer) as React.ComponentType
