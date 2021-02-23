import React from 'react'
import './Login.css'
import {Field, reduxForm} from "redux-form";
import login_img from "../../images/login-img.svg"
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

function Login(props) {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
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
                    <div className="login__item-images">
                        <img src={login_img} alt=""/>
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
                        <Field id="email" type="email" name={"email"}  placeholder="email" className="validate"
                               component={Input} validate={required}/>
                    </div>
                    <div className="row">
                            <Field id="password" type="password" name={"password"}
                                   className="validate"
                                   placeholder="password"
                                   component={Input} validate={required}/>
                    </div>
                    <div className="login-btns">
                        <p>
                            <label>
                                <Field type="checkbox" className="filled-in" name={"rememberMe"} component={'input'}/>
                                <span className="span">Remember me</span>
                            </label>
                        </p>
                        <div className="btn-login__form">
                            <button className="post-btn btn  login-btn">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched &&  meta.error;
    return(
        <div className={"input-field col s12 " + (hasError ? "error" : "")} >
            <input{...input} {...props}/>
            { hasError && <div>{meta.error}</div>}
        </div>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps, {login,logout})(Login);