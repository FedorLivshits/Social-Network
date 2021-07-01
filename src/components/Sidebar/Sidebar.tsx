import React from 'react'
import './Sidebar.css'
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {withAuthToRedirect} from "../hoc/withAuthToRedirect";
import {connect} from "react-redux";
import {actions} from "../../redux/lang-reducer";
import {AppStateType} from "../../redux/redux-store";

type SidebarPropsType = {
    lang: string
}
const Sidebar: React.FC<SidebarPropsType> = props => (
    <section className="sidebar">
        {(props.lang === "RU") ? <aside className="menu">
                <ul className="menu__list">
                    <li><NavLink to="/profile">HOME</NavLink></li>
                    <li><NavLink to="/dialogs">MESSAGES</NavLink></li>
                    <li><NavLink to="/users">USERS</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                </ul>
            </aside> :
            <aside className="menu">
                <ul className="menu__list-ru">
                    <li><NavLink to="/profile">ПРОФИЛЬ</NavLink></li>
                    <li><NavLink to="/dialogs">СООБЩЕНИЯ</NavLink></li>
                    <li><NavLink to="/users">ПОЛЬЗОВАТЕЛИ</NavLink></li>
                    <li><NavLink to="/about">О ПРОЕКТЕ</NavLink></li>
                </ul>
            </aside>
        }

    </section>
);


type MapStateToPropsType = {
    lang: string
}
type MapDispatchToPropsType = {}
type OwnPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const SidebarContainer: React.FC<PropsType> = (props) => {
    return <Sidebar lang={props.lang}/>
}


const mapStateToProps = (state: AppStateType) => ({
    lang: state.language.lang
})

export default compose(
    withAuthToRedirect,
    connect(mapStateToProps, {actions})
)(SidebarContainer) as React.ComponentType