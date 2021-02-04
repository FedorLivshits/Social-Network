import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Posts from "./components/Posts";


function App() {
    return (
        <body>
        <Header/>
        <div className="container">
            <div className="main">
                <Sidebar/>
                <section className="profile__content z-depth-2">
                    <Profile/>
                    <Posts/>
                </section>
            </div>
        </div>
        </body>
    );
}

export default App;


