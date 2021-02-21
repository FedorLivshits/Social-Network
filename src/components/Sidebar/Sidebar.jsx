import React from 'react'
import './Sidebar.css'
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

function Sidebar() {
    return (
        <section className="sidebar z-depth-2 ">
            <aside className="menu">
                <ul className="menu__list">
                    <li><NavLink to="/profile">HOME</NavLink></li>
                    <li><NavLink to="/dialogs">MESSAGES</NavLink></li>
                    <li><NavLink to="/users">USERS</NavLink></li>
                    <li><NavLink to="community">COMMUNITY</NavLink></li>
                </ul>
            </aside>
        </section>
    );

}

export default compose (
    withAuthRedirect
)(Sidebar);