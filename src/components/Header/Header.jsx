import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import {NavLink, Redirect} from "react-router-dom";

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
                            <div className="user__name">
                                {props.login}
                            </div>
                              <button onClick={props.logout} className="logout">EXIT</button>
                            </div>
                            : <NavLink to="/login">Login</NavLink>
                            }
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;