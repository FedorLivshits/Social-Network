import React from 'react'
import './Login.css'

function Login() {
    return (
        <section className="login-form z-depth-2">
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="btn-login__form">
                    <button className="post-btn btn waves-effect waves-light yellow darken-2" type="button">
                        Send
                    </button>
                </div>
            </form>
        </div>
        </section>
        )
}

export default Login;