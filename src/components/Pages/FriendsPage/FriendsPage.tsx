import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {follow, unfollow} from '../../../redux/users-reducer'
import {getFollowingInProgress, getIsFetching,} from '../../../redux/selectors/users-selectors'
import Preloader from '../../Preloader/Preloader'
import {Col, Container, Row} from 'react-bootstrap'
import {AppStateType} from '../../../redux/redux-store'
import User from '../UsersPage/User'
import {motion} from 'framer-motion'


const FriendsPage: React.FC = () => {
    const friends = useSelector((state: AppStateType) => state.usersPage.friends)
    const followingInProgress = useSelector(getFollowingInProgress)
    const isFetching = useSelector(getIsFetching)
    const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(document.documentElement.clientWidth)
        })
    })

    useEffect(() => {
        localStorage.setItem('friends', JSON.stringify(friends))
    }, [friends])

    const dispatch = useDispatch()

    const onFollow = (userId: number) => {
        dispatch(follow(userId))
    }
    const onUnfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }
    return (
        <motion.div
            className='container'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.4}}}
            exit={{opacity: 0}}>
            <Container fluid>
                <h3 className=" text-left mt-3 mb-5">Friends</h3>
                {friends.length
                    ?
                    <>
                        {isFetching ? <Preloader/> : null}

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
                                        {friends.map(u => <User key={u.id} user={u}
                                                                followingInProgress={followingInProgress}
                                                                onUnfollow={onUnfollow} onFollow={onFollow}/>)
                                        }

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </>
                    :
                    <h3 className='posts__title'>You don't have any friends yet</h3>
                }
            </Container>
        </motion.div>
    )
}


export default FriendsPage
