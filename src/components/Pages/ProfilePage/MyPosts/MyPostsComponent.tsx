import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import { actions } from '../../../../redux/profile-reducer'
import {
	getMyPosts,
	getProfileData,
} from '../../../../redux/selectors/profile-selectors'
import { Post } from './Post'
import { PostForm } from './PostForm'

const MyPostsComponent: React.FC = React.memo(() => {
	const profile = useSelector(getProfileData)
	const myPosts = useSelector(getMyPosts)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.4 } }}
			exit={{ opacity: 0 }}>
			<PostForm addPost={actions.addPost} profile={profile} />
			<div className='posts__items content-mobile'>
				<Post
					myPosts={myPosts}
					profile={profile}
					deletePost={actions.deletePost}
				/>
			</div>
		</motion.div>
	)
})

export default MyPostsComponent
