import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";
import MyPosts from "./components/MyPosts/MyPosts";


function App(props) {
    return (
        <div className='body'>
            <Header/>
            <div className="container">
                <div className="main">
                    <Sidebar/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                                  dispatch={props.dispatch}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                                  dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;


