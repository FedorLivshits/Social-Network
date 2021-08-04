import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import {
	getProfileStatus,
	getUserProfile,
} from '../../../redux/profile-reducer'
import { getAuthorizedUserId } from '../../../redux/selectors/auth-selectors'
import { withAuthToRedirect } from '../../hoc/withAuthToRedirect'
import Profile from './Profile'

type PathParamsType = {
	userId: string
}

type PropsType = RouteComponentProps<PathParamsType>

const ProfilePage: React.FC<PropsType> = props => {
	const authorizedUserId = useSelector(getAuthorizedUserId)
	const dispatch = useDispatch()

	useEffect(() => {
		let userId: number | null = +props.match.params.userId
		console.log(
			`${props.match.params.userId}: ${typeof props.match.params.userId}`
		)
		if (!userId) {
			userId = authorizedUserId
		}
		dispatch(getUserProfile(userId as number))
		dispatch(getProfileStatus(userId as number))
	}, [])

	const usePrevious = (value: any) => {
		const ref = useRef()
		useEffect(() => {
			ref.current = value
		})
		return ref.current
	}
	const prevUserId = usePrevious(props.match.params.userId)

	useEffect(() => {
		if (props.match.params.userId !== prevUserId) {
			let userId: number | null = +props.match.params.userId
			if (!userId) {
				userId = authorizedUserId
			}
			dispatch(getUserProfile(userId as number))
			dispatch(getProfileStatus(userId as number))
		}
	}, [props.match.params.userId])

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{opacity: 1, transition: { duration: 0.4 } }}
			exit={{ opacity: 0 }}>
			<Profile
				isOwner={
					props.match.params.userId === undefined ||
					props.match.params.userId === 'posts'
				}
				isNotPosts={props.match.params.userId !== 'posts'}
			/>
		</motion.div>
	)
}

export default compose(
	withRouter,
	withAuthToRedirect
)(ProfilePage) as React.ComponentType
