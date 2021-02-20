import React from 'react'
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
      this.props.getUsersThunkCreator()
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setIsFetching(false)
        })
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
            />

        )

    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    toggleFollowingInProgress,
    getUsersThunkCreator
})(UsersContainer);