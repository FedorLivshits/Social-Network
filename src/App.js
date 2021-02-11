import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
    return (
        <div className='body'>
            <Header/>
            <div className="container">
                <div className="main">
                    <Sidebar/>
                    <Route path='/profile' render={() => <Profile store={props.store}
                    />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}
                                                                  // state={props.state.dialogsPage}
                                                                  // dispatch={props.dispatch}
                    />}/>
                </div>
            </div>
        </div>
    );
}

export default App;


