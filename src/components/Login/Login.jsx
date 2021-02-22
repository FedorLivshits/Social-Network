import React from 'react'
import './Login.css'
import {Field, reduxForm} from "redux-form";

function Login() {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <section className="login__content">
            <div className="login-slider__item">
                <div className="login-slider__item-content">
                    <div className="login-slider__item-info">
                        <h3 className="login-slider__title">
                            Welcome to MartaUP!
                        </h3>
                        <div className="login-slider__descr">
                            This is a social-network <br/>
                            For startups, For businesses & For you
                        </div>

                    </div>
                    <div className="login-slider__item-images">
                    </div>
                </div>
            </div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </section>
    )
}

const LoginForm = (props) => {
    return (
        <div className="login-form z-depth-2">
            <div className="row">
                <form className="col s12" onSubmit={props.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <Field id="email" type="email" name={"email"} className="validate" placeholder="email"
                                   component={'input'}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <Field id="password" type="password" name={"password"} className="validate" placeholder="password"
                                   component={'input'}/>
                        </div>
                    </div>
                    <div className="login-btns">
                        <p>
                            <label>
                                <Field type="checkbox" className="filled-in"  name={"rememberMe"}  component={'input'}/>
                                <span className="span">Remember me</span>
                            </label>
                        </p>
                        <div className="btn-login__form">
                            <button className="post-btn btn  login-btn yellow darken-2">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;