import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

function Header(props) {
    return (
        <header className="header ">
            <div className="container">
                <div className="header__inner">
                    <div className="header-logo">
                        <NavLink to="/profile">
                            <img src={logo} alt='logo'/>
                        </NavLink>
                    </div>
                    <div className="header-log-in">

                        {props.isAuth ? <div className="user__name">
                            {props.login}
                        </div> : <div className="header-btn">
                            <NavLink to="/login" className="login" href="#">LOGIN</NavLink>
                            <a className="sign-up yellow darken-2" href="#">SIGN UP</a>
                        </div>}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default compose(withAuthRedirect) (Header);