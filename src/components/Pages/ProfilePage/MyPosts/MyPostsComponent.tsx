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
		<>
			<PostForm addPost={actions.addPost} profile={profile} />
			<div className='posts__items'>
				<Post
					myPosts={myPosts}
					profile={profile}
					deletePost={actions.deletePost}
				/>
			</div>
		</>
	)
})

export default MyPostsComponent
