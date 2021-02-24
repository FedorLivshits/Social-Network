import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader />

        return (
            <div className='body'>
                <HeaderContainer/>
                <div className="container">
                    <div className="main">
                        <Sidebar/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/about' render={() => <About/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (withRouter, connect(mapStateToProps, {initializeApp})) (App) ;


