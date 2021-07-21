import 'bootstrap/dist/css/bootstrap.min.css';
import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import DialogsContainer from "./components/Pages/DialogsPage/DialogsContainer";
import Login from "./components/Pages/LoginPage/Login";
import PostsPage from "./components/Pages/PostsPage/PostsPage";
import SavedPage from "./components/Pages/SavedPage/SavedPage";
import Preloader from "./components/Preloader/Preloader";
import SidebarContainer from "./components/Sidebar/Sidebar";
import './main.css';
import { initializeApp } from "./redux/app-reducer";
import { AppStateType } from "./redux/redux-store";

const ProfilePage = lazy(() => import("./components/Pages/ProfilePage/ProfilePage"))
const UsersPage = lazy(() => import("./components/Pages/UsersPage/UsersPage"))

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    initializeApp: () => void
}

const App: React.FC<MapStatePropsType & MapDispatchToPropsType> = (props) => {

    useEffect(() => {
        props.initializeApp()
    }, [])

    if (!props.initialized) return <Preloader />

    return (
        <>
            <SidebarContainer /> 
            <div className="home__content">
                <Route exact path='/profile/:userId?' render={() => {
                    return <Suspense fallback={<Preloader />}>
                        <ProfilePage />
                    </Suspense>
                }} />
                <Route path='/users' render={() => {
                    return <Suspense fallback={<Preloader />}>
                        <UsersPage />
                    </Suspense>
                }} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/usersPosts' render={() => <PostsPage />} />
                <Route path='/saved' render={() => <SavedPage />} />
                <Route path='/login' render={() => <Login />} />
                <Redirect from='/' to='/profile'/>
            </div>
        </>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App) as React.ComponentType;

