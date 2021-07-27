import React, { useEffect, useState } from 'react'
import { actions, getPosts } from '../../../redux/posts-reducer'
import './user-post.css'
import { AppStateType } from '../../../redux/redux-store'
import { connect } from 'react-redux'
import { PostType } from '../../../types/types'
import { UserPost } from './UserPost'
import Preloader from '../../Preloader/Preloader'

type MapStateToPropsType = {
	posts: Array<PostType>
	totalCount: number
}
type MapDispatchToPropsType = {
	getPosts: (page: number) => Promise<void>
	changeLike: (userId: string) => void
}

const PostsPage: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({
	getPosts,
	posts,
	changeLike,
	totalCount,
}) => {
	const [page, setPage] = useState(0)
	const [isFetching, setIsFetching] = useState(true)

	//because the second page throws an error
	if (page === 2) {
		setPage(3)
	}

	useEffect(() => {
		if (isFetching) {
			getPosts(page)
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
		
		if (
            // @ts-ignore
			e.target.documentElement.scrollHeight -
            // @ts-ignore
				(e.target.documentElement.scrollTop + window.innerHeight) <
				100 &&
			posts.length <= totalCount
		) {
			setIsFetching(true)
		}
	}

	return (
		<div className='container'>
			<h3 className=' text-left mt-3 mb-5'>Posts</h3>
			<div className='row'>
				{posts.length ? (
					<>
						<UserPost posts={posts} changeLike={changeLike} />
					</>
				) : (
					<Preloader />
				)}
			</div>
			{isFetching ? <Preloader /> : ''}
		</div>
	)
}

const mapStateToProps = (state: AppStateType) => ({
	posts: state.postsPage.posts,
	totalCount: state.postsPage.totalCount,
})
export default connect(mapStateToProps, {
	getPosts,
	changeLike: actions.changeLike,
	setPosts: actions.setPosts,
})(PostsPage)
