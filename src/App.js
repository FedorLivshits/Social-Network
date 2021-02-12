import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Users from "./components/Users/Users";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



function App(props) {
    return (
        <div className='body'>
            <Header/>
            <div className="container">
                <div className="main">
                    <Sidebar/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/users' render={() => <Users />}/>
                </div>
            </div>
        </div>
    );
}

export default App;


