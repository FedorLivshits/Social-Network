import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom";

function Header () {
    return (
        <header className="header z-depth-2 indigo darken-3">
            <div className="container">
                <div className="header__inner">
                    <div className="header-logo">
                        <NavLink to="/profile">
                            <img src={logo} />
                        </NavLink>
                    </div>
                    <div className="header-search__line">
                        <input type="search" placeholder="Search"/>
                    </div>
                    <div className="header-log-in">
                        <div className="header-btn">
                            <a className="login" href="#">LOGIN</a>
                            <a className="sign-up yellow darken-2" href="#">SIGN UP</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;