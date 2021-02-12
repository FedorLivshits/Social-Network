import React from 'react'
import './Sidebar.css'
import {NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <section className="sidebar z-depth-2 ">
            <aside className="menu">
                <ul className="menu__list">
                    <li><NavLink to="/profile">HOME</NavLink></li>
                    <li><NavLink to="/dialogs">MESSAGES</NavLink></li>
                    <li><NavLink to="/users">USERS</NavLink></li>
                    <li><NavLink to="community">COMMUNITY</NavLink></li>
                    <li><NavLink to="/photos">PHOTOS</NavLink></li>
                </ul>
            </aside>
        </section>
    );

}
export default Sidebar;