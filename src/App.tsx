import { AnimatePresence } from 'framer-motion'
import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import FooterMobile from './components/FooterMobile/FooterMobile'
import DialogsContainer from './components/Pages/DialogsPage/DialogsContainer'
import { Login } from './components/Pages/LoginPage/Login'
import PostsPage from './components/Pages/PostsPage/PostsPage'
import { SavedPage } from './components/Pages/SavedPage/SavedPage'
import Preloader from './components/Preloader/Preloader'
import Sidebar from './components/Sidebar/Sidebar'
import './main.scss'
import { initializeApp } from './redux/app-reducer'
import { AppStateType } from './redux/redux-store'
import FriendsPage from './components/Pages/FriendsPage/FriendsPage'
import NotFound from './components/Pages/NotFound/NotFound'

const ProfilePage = lazy(
	() => import('./components/Pages/ProfilePage/ProfilePage')
)
const UsersPage = lazy(() => import('./components/Pages/UsersPage/UsersPage'))


const App: React.FC = () => {
	const initialized = useSelector(
		(state: AppStateType) => state.app.initialized
	)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeApp())
	}, [])

	if (!initialized) return <Preloader />

	return (
		<>
			<Sidebar />
			<div className='home__content'>
				<AnimatePresence>
					<Switch>
						<Route
							exact
							path='/profile/:userId?'
							render={() => {
								return (
									<Suspense fallback={<Preloader />}>
										<ProfilePage />
									</Suspense>
								)
							}}
						/>
						<Route
							path='/users'
							render={() => {
								return (
									<Suspense fallback={<Preloader />}>
										<UsersPage />
									</Suspense>
								)
							}}
						/>
						<Route path='/dialogs' render={() => <DialogsContainer />} />
						<Route path='/usersPosts' render={() => <PostsPage />} />
						<Route path='/saved' render={() => <SavedPage />} />
						<Route path='/login' render={() => <Login />} />
						<Route path='/friends' render={() => <FriendsPage />} />
                        <Route component={NotFound} />
						<Redirect from='/' to='/profile' />
					</Switch>
				</AnimatePresence>
			</div>
			<FooterMobile />
		</>
	)
}

export default compose(withRouter)(App) as React.ComponentType
