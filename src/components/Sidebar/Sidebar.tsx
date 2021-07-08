import React from 'react'
import '../../App.css'
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {withAuthToRedirect} from "../hoc/withAuthToRedirect";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Icon} from "@iconify/react";
import bxSearch from "@iconify-icons/bx/bx-search";
import bxGridAlt from "@iconify-icons/bx/bx-grid-alt";
import bxUser from "@iconify-icons/bx/bx-user";
import bxChat from "@iconify-icons/bx/bx-chat";
import bxHeart from "@iconify-icons/bx/bx-heart";
import bxCog from "@iconify-icons/bx/bx-cog";
import bxLogOut from "@iconify-icons/bx/bx-log-out";
import bxNews from "@iconify-icons/bx/bx-news";

type SidebarPropsType = {
    logout: () => void
}

const Sidebar: React.FC<SidebarPropsType> = props => {

    const logoutFn = () => {
        props.logout()
    }
    return (
        <>
            <div className="sidebar active">
                <div className="logo_content">
                    <div className="logo">
                        <h4>Social-Network</h4>
                    </div>
                </div>
                <ul className="nav_list">
                    <li>
                        <Icon icon={bxSearch}/>
                        <input className="sidebar__input" type="text" placeholder="Search..."/>
                    </li>
                    <li>
                        <NavLink to="/profile">
                            <Icon icon={bxGridAlt}/>
                            <span className="links_name">Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">
                            <Icon icon={bxUser}/>
                            <span className="links_name">Users</span>
                        </NavLink>
                        <span className="tooltip">Users</span>
                    </li>
                    <li>
                        <NavLink to="/usersPosts">
                            <Icon icon={bxNews} />
                            <span className="links_name">Posts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs">
                            <Icon icon={bxChat}/>
                            <span className="links_name">Messages</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/saved">
                            <Icon icon={bxHeart}/>
                            <span className="links_name">Saved</span>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#">
                            <Icon icon={bxCog}/>
                            <span className="links_name">Setting</span>
                        </a>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                        </div>
                        <a onClick={logoutFn}>
                            <Icon icon={bxLogOut}/>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );

}


type MapDispatchToPropsType = {
    logout: () => void
}

type PropsType = MapDispatchToPropsType

const SidebarContainer: React.FC<PropsType> = (props) => {
    return <Sidebar logout={props.logout}/>
}


export default compose(
    withAuthToRedirect,
    connect(null, {logout})
)(SidebarContainer) as React.ComponentType