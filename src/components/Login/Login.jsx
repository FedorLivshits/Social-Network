import React from 'react'
import './Login.css'

function Login() {
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
                            <a className="login-slider__btn" href="#">Request a quote</a>
                        </div>
                        <div className="login-slider__item-images">
                        </div>
                    </div>
                </div>
        <div className="login-form z-depth-2">
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" placeholder="email"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" placeholder="password"/>
                    </div>
                </div>
                <div className="login-btns">
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" checked="checked"/>
                        <span>Remember me</span>
                    </label>
                </p>
                <div className="btn-login__form">
                    <button className="post-btn btn waves-effect waves-light yellow darken-2" type="button">
                        Login
                    </button>
                </div>
                </div>
            </form>
        </div>
        </div>
        </section>
        )
}

export default Login;