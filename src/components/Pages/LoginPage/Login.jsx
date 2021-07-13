import React, {useState} from 'react'
import './Login.css'
import {login, logout} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

function Login({login, logout, isAuth}) {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [rememberMe, setRememberMe] = useState(false)

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onRememberMeChange = () => {

    }
    const onSubmit = (e) => {
        login(email, password, rememberMe = false)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className="body">
            <div className="container__login">
                <input type="checkbox" id="flip"/>
                <div className="cover">
                    <div className="front">

                        <div className="text">
                            <span className="text-1">Every new friend is a <br/> new adventure</span>
                            <span className="text-2">Let's get connected</span>
                        </div>
                    </div>
                    <div className="back">

                        <div className="text">
                            <span className="text-1">Complete miles of journey <br/> with one step</span>
                            <span className="text-2">Let's get started</span>
                        </div>
                    </div>
                </div>
                <form action="#">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Login</div>
                            <div className="input-boxes">
                                <div className="input-box">
                                    <input type="text" placeholder="Enter your email" required
                                           onChange={onEmailChange}/>
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Enter your password" required
                                           onChange={onPasswordChange}/>
                                </div>
                                <div className="text"><a href="#">Forgot password?</a></div>
                                <div className="button input-box">
                                    <button type="button" onClick={onSubmit} className="btn btn-outline-dark">Log in
                                    </button>
                                </div>
                                <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup
                                    now</label></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login, logout})(Login);

