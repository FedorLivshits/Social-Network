import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";




function App(props) {
    return (
        <div className='body'>
            <HeaderContainer/>
            <div className="container">
                <div className="main">
                    <Sidebar/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>
            </div>
        </div>
    );
}

export default App;


