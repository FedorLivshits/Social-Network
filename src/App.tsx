import React, {useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarContainer from "./components/Sidebar/Sidebar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {AppStateType} from "./redux/redux-store";


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
                <Route exact path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </>


    );
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App) as React.ComponentType;

