import React, { useEffect, useState } from 'react'
import { getPosts } from '../../../redux/posts-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { UserPost } from './UserPost'
import Preloader from '../../Preloader/Preloader'
import { Row } from 'react-bootstrap'
import {
	getPostsData,
	getPostsTotalCount,
} from '../../../redux/selectors/posts-selectors'
import { motion } from 'framer-motion'

const PostsPage: React.FC = () => {
	const [page, setPage] = useState(0)
	const [isFetching, setIsFetching] = useState(true)

	const posts = useSelector(getPostsData)
	const totalCount = useSelector(getPostsTotalCount)
	const dispatch = useDispatch()
	//because the second page throws an error
	if (page === 2) {
		setPage(3)
	}

	useEffect(() => {
		if (isFetching) {
			dispatch(getPosts(page))
				// @ts-ignore
				.then(() => setPage(prevState => prevState + 1))
				.finally(() => {
					setIsFetching(false)
				})
		}
	}, [isFetching])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return function () {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [])

	const scrollHandler = (e: Event) => {
		// @ts-ignore
		if (e.target.documentElement.scrollHeight -(e.target.documentElement.scrollTop + window.innerHeight) <100 &&
			posts.length <= totalCount
		) {
			setIsFetching(true)
		}
	}

	return (
		<motion.div
			className='container'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.4 } }}
			exit={{ opacity: 0 }}>
			<h3 className='text-left mt-3 mb-5'>Posts</h3>
			<Row>
				{posts.length ? (
					<>
						<UserPost posts={posts} />
					</>
				) : (
					<Preloader />
				)}
			</Row>
			{isFetching ? <Preloader /> : ''}
		</motion.div>
	)
}

export default PostsPage
