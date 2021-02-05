import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs"


function App() {
    return (
        <body>
        <Header/>
        <div className="container">
            <div className="main">
                <Sidebar/>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
        </div>
        </body>
    );
}

export default App;


