import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actions, follow, getUsers, unfollow} from '../../../redux/users-reducer'
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPage,
} from '../../../redux/selectors/users-selectors'
import Paginator from '../../Paginator/Paginator'
import Preloader from '../../Preloader/Preloader'
import User from './User'
import {Container, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import {AppStateType} from '../../../redux/redux-store'


const Users: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth)

    const setSceenWidthFn = () => {
        setScreenWidth(document.documentElement.clientWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', setSceenWidthFn)
        return () =>  window.removeEventListener('resize', setSceenWidthFn)
    })
    
    const totalUsersCount = useSelector(getTotalUsersCount)
    const friends = useSelector((state: AppStateType) => state.usersPage.friends)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getUsersPage)
    const followingInProgress = useSelector(getFollowingInProgress)
    const isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('friends', JSON.stringify(friends))
    }, [friends])

    const onPageChanged = (page: number) => {
        dispatch(actions.setCurrentPage(page))
        dispatch(getUsers(page, pageSize))
    }
    const onFollow = (userId: number) => {
        dispatch(follow(userId))
    }
    const onUnfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }
    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Container fluid>
                <h3 className=" text-left mt-3 mb-5">Users</h3>
                <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                           onPageChanged={onPageChanged}
                           currentPage={currentPage}
                           screenWidth={screenWidth}
                />
                <Row>
                    <Col className="content-mobile">
                        <Container fluid>
                        <Row className="user-table__row">
                            <Col className="user-table__column">
                                <span>User</span>
                            </Col>
                            <Col className="user-table__column user-id__title">
                                <span>ID</span>
                            </Col>
                            <Col className="user-table__column">
                                <span>Add</span>
                            </Col>
                        </Row>
                        </Container>
                        <Row>
                            <Col>
                                {users.map(u => <User key={u.id} user={u}
                                                      followingInProgress={followingInProgress}
                                                      onUnfollow={onUnfollow} onFollow={onFollow}/>)
                                }

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>

    )
}


export default Users
