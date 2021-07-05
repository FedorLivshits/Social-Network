import React, {useState} from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom";
import {MapStateToPropsType} from "./HeaderContainer";
import {MapDispatchToProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    logout: () => void
    setEnLanguage: () => void
    setRuLanguage: () => void
    isAuth: boolean
    login: string | null
    lang: string
}
const Header: React.FC<PropsType> = props => (
    <header className="header ">
        <div className="container">
            <div className="header__inner">
                <div className="header-logo">
                    <NavLink to="/profile">
                        <img src={logo} alt='logo'/>
                    </NavLink>
                </div>
                <div className="header-log-in">
                    <div className="header-all-btn">
                        {(props.lang === "RU")
                            ?
                            <div className="lang-btn" onClick={props.setEnLanguage}><a>
                                EN
                            </a> <i className="small material-icons">language</i></div>
                            :
                            <div className="lang-btn" onClick={props.setRuLanguage}><a>
                                RU
                            </a> <i className="small material-icons">language</i></div>}

                        {props.isAuth ?
                            <div className="header-btn">

                                <div className="user__name">
                                    {props.login}
                                </div>
                                <a onClick={props.logout} className="logout-btn">
                                    {(props.lang === "EN") ? "ВЫЙТИ" : "LOGOUT"}
                                </a>
                            </div>
                            : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    </header>
);


export default Header;