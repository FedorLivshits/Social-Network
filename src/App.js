import React from 'react'
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import 'materialize-css/dist/css/materialize.min.css'

function App() {
    return (
        <body>
        <Header/>
        <div className="container">
            <div className="main">
                <Sidebar/>

                <section className="profile__photo z-depth-2">

                    <div className="row profile">
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="images/profile-photo.svg"/>
                                    <a className="btn-floating halfway-fab waves-effect deep-orange lighten-1"><i
                                        className="material-icons">add</i></a>
                                </div>
                                <div className="card-content indigo darken-4 text">
                                    <p className="white-text text-white">I want to be a Senior Frontend Developer. Lorem
                                        ipsum
                                        dolor sit amet consectetur adipisicing elit. Iusto, laudantium! </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

                <section className="profile__info z-depth-2">
                    <div className="profile-text__info">
                        <div className="title__info">
                            FEDOR LIVSHITS
                        </div>
                        <div className="profile___info-about">
                            <li>age</li>
                            <li>city</li>
                        </div>
                    </div>
                </section>

            </div>
        </div>
        </body>
    )
        ;
}


export default App;


