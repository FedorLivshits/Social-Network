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


const Users: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(document.documentElement.clientWidth)
        })
    })
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
                        <Row>
                            <Col className="text-center">
                                <span>User</span>
                            </Col>
                            <Col className="text-center user-id__title">
                                <span>ID</span>
                            </Col>
                            <Col className="text-center">
                                <span>Add</span>
                            </Col>
                        </Row>
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
