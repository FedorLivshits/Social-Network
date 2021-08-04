import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import { getUsers } from '../../../redux/users-reducer'
import {
	getCurrentPage,
	getPageSize,
} from '../../../redux/selectors/users-selectors'
import { withAuthToRedirect } from '../../hoc/withAuthToRedirect'
import Users from './Users'
import { motion } from 'framer-motion'

const UsersPage: React.FC = ({}) => {
	const pageSize = useSelector(getPageSize)
	const currentPage = useSelector(getCurrentPage)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize))
	}, [])

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.4 } }}
			exit={{ opacity: 0 }}>
			<Users />
		</motion.div>
	)
}

export default compose(withAuthToRedirect)(UsersPage) as React.ComponentType
