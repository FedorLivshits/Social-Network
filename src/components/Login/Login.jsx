import React from 'react'
import './Login.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

function Login(props) {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <section className="login__content">
            <div className="login-slider__item">
                <div className="login-slider__item-content">
                    {(props.lang === "EN")
                        ?
                        <div className="login-slider__item-info">
                            <h3 className="login-slider__title">
                                Добро пожаловать в Социальную сеть!
                            </h3>
                            <div className="login-slider__descr">
                                - Это учебный, но тем не менее полноценный проект, написанный на React<br/>
                                - Подробнее почитать о том, что реализованно в приложении вы можете во вкладке
                                About<br/>
                                - Спасибо и приятного вам User Experience!
                            </div>
                        </div>
                        :
                        <div className="login-slider__item-info">
                            <h3 className="login-slider__title">
                                Welcome to the<br/> Social Network!
                            </h3>
                            <div className="login-slider__descr">
                                - This is an educational, but nonetheless full-fledged project written in React <br/>
                                - You can read more about what is implemented in the application in the About tab
                                <br/>
                                - Thank you and enjoy your User Experience!
                            </div>
                        </div>}


                </div>
            </div>
            <LoginReduxForm onSubmit={onSubmit} lang={props.lang}/>
        </section>
    )
}

const LoginForm = (props) => {
    return (
        <div className="login-form z-depth-2">
            <div className="row">
                <form className="col s12" onSubmit={props.handleSubmit}>
                    <div className="row">
                        <Field id="email" type="email" name={"email"} placeholder="email" className="validate"
                               component={Input} validate={required}/>
                    </div>
                    <div className="row">
                        <Field id="password" type="password" name={"password"}
                               className="validate"
                               placeholder={(props.lang === "EN") ? "Пароль" : "Password"}
                               component={Input} validate={required}/>
                    </div>
                    <div className="login-btns">
                        <label>
                            <Field type="checkbox" className="filled-in" name={"rememberMe"} component={'input'}/>
                            <span className="span">  {(props.lang === "EN") ? "Запомнить меня" : "Remember me"}</span>
                        </label>
                        {props.error && <div>Error</div>}
                        <div className="btn-login__form">
                            <button className="post-btn btn  login-btn">
                                {(props.lang === "EN") ? "Войти" : "Login"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={"input-field col s12 " + (hasError ? "error" : "")}>
            <input{...input} {...props}/>
            {hasError && <div>{meta.error}</div>}
        </div>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    lang: state.language.lang
})

export default connect(mapStateToProps, {login, logout})(Login);