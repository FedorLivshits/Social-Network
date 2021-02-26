import React from 'react'
import './Sidebar.css'
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {setEnLanguage, setRuLanguage} from "../../redux/lang-reducer";


function Sidebar(props) {
    return (
        <section className="sidebar">
            { (props.lang === "RU") ? <aside className="menu">
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

}
const mapStateToProps = (state) => ({
    lang: state.language.lang
})

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {setEnLanguage, setRuLanguage})
)(Sidebar);