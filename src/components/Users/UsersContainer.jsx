import React from 'react'
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


class UsersContainer extends React.Component {

    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize) // thunk - getUsers
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
       this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   lang={this.props.lang}
            />

        )

    }
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
