import bxUpload from '@iconify-icons/bx/bx-upload'
import {Icon} from '@iconify/react'
import {motion} from 'framer-motion'
import React, {ChangeEvent} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink, Route} from 'react-router-dom'
import photo from '../../../images/user.png'
import '../../../main.scss'
import {savePhoto} from '../../../redux/profile-reducer'
import {getProfileData, getStatusData,} from '../../../redux/selectors/profile-selectors'
import {getIsFetching} from '../../../redux/selectors/users-selectors'
import Preloader from '../../Preloader/Preloader'
import {BreadcrumbsComponent} from './BreadcrumbsComponent'
import MyPostsComponent from './MyPosts/MyPostsComponent'
import {ProfileOwnerContentComponent} from './ProfileOwnerContentComponent'
import ProfileStatus from './ProfileStatus'
import {AppStateType} from '../../../redux/redux-store'

type PropsType = {
	isOwner: boolean
	isNotPosts: boolean
}

const Profile: React.FC<PropsType> = props => {
	const profile = useSelector(getProfileData)
	const isFetching = useSelector(getIsFetching)
	const status = useSelector(getStatusData)
	const friends = useSelector((state: AppStateType) => state.usersPage.friends)

	const dispatch = useDispatch()

	const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			dispatch(savePhoto(e.target.files[0]))
		}
	}

	if (!profile) {
		return <Preloader />
	}
	return (
		<>
			<div className='profile__head'>
				<div className='profile__head-inner'>
					<div className='container'>
						<motion.div
							className='profile__head-info'
							initial={{ x: 10 }}
							animate={{ x: 0, transition: { duration: 0.4 } }}>
							{isFetching ? (
								<Preloader />
							) : (
								<img
									className='profile__head-img'
									src={
										profile.photos.large != null ? profile.photos.large : photo
									}
									alt=''
								/>
							)}

							<span className='profile__name'>{profile.fullName}</span>
						</motion.div>
					</div>
				</div>
				<div className='container'>
					{props.isOwner ? (
						<div className='input-file__wrapper'>
							<input
								className='file-input'
								onChange={onPhotoSelected}
								type='file'
							/>
							<div className='file-input__btn'>
								<Icon icon={bxUpload} />
							</div>
						</div>
					) : (
						''
					)}
					<div className='profile__bar'>
						<div className='profile__status'>
							<ProfileStatus status={status} isOwner={props.isOwner} />
						</div>
						<div className='profile__followed'>
							<ul className='profile__followed-items'>
								<li className='profile__followed-item'>
									<span className='profile__followed-num'>{friends.length}</span>
									<NavLink exact to='/friends'>
										<span className='profile__followed-title'>Friends</span>
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<BreadcrumbsComponent isOwner={props.isOwner} />
					<hr />
				</div>
			</div>
			<div className='container content-mobile'>
				<Route
					exact
					path='/profile'
					render={() => (
						<ProfileOwnerContentComponent
							isOwner={props.isOwner}
							profile={profile}
						/>
					)}
				/>
				{!props.isOwner && props.isNotPosts ? (
					<Route
						path='/profile'
						render={() => (
							<ProfileOwnerContentComponent
								isOwner={props.isOwner}
								profile={profile}
							/>
						)}
					/>
				) : null}

				<Route
					exact
					path='/profile/posts'
					render={() => <MyPostsComponent />}
				/>
			</div>
		</>
	)
}

export default Profile
