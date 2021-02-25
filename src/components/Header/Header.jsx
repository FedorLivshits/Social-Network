import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom";

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

                        {props.isAuth ?
                            <div className="header-btn">
                                <a className="lang-btn" onClick={props.setLanguage}>
                                    {props.lang ?   "EN" : "RU"}
                                </a>
                            <div className="user__name">
                                {props.login}
                            </div>

                                <a onClick={props.logout} className="logout-btn">
                                    LOGOUT
                                </a>
                            </div>
                            :  ""
                            }

                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;