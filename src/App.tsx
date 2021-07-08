import React, {lazy, Suspense, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarContainer from "./components/Sidebar/Sidebar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {AppStateType} from "./redux/redux-store";
import PostsPage from "./components/Posts/PostsPage";
import {LikedPost} from "./components/SavePage/LikedPost";
import SavedPage from "./components/SavePage/SavedPage";

const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"))

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    initializeApp: () => void
}

const App: React.FC<MapStatePropsType & MapDispatchToPropsType> = (props) => {

    useEffect(() => {
        props.initializeApp()
    }, [])

    if (!props.initialized) return <Preloader/>

    return (
        <>
            <SidebarContainer/>
            <div className="home_content">
                <Route exact path='/profile/:userId?' render={() => {
                    return <Suspense fallback={<Preloader/>}>
                        <ProfileContainer/>
                    </Suspense>
                }}/>
                <Route path='/users' render={() =>{
                    return <Suspense fallback={<Preloader/>}>
                        <UsersContainer/>
                    </Suspense>
                }}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/usersPosts' render={() => <PostsPage/>}/>
                <Route path='/saved' render={() => <SavedPage/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App) as React.ComponentType;

