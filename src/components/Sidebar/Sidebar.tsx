import bxChat from '@iconify-icons/bx/bx-chat'
import bxCog from '@iconify-icons/bx/bx-cog'
import bxGridAlt from '@iconify-icons/bx/bx-grid-alt'
import bxHeart from '@iconify-icons/bx/bx-heart'
import bxLogOut from '@iconify-icons/bx/bx-log-out'
import bxNews from '@iconify-icons/bx/bx-news'
import bxSearch from '@iconify-icons/bx/bx-search'
import bxUser from '@iconify-icons/bx/bx-user'
import {Icon} from '@iconify/react'
import React from 'react'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {compose} from 'redux'
import '../../main.scss'
import {logout} from '../../redux/auth-reducer'
import {withAuthToRedirect} from '../hoc/withAuthToRedirect'


const Sidebar: React.FC = () => {
    const dispatch = useDispatch()
    const logoutFn = () => {
        dispatch(logout())
    }
    return (
        <>
            <div className="sidebar active">
                <div className="logo__content">
                    <div className="logo">
                        <h4>Social-Network</h4>
                    </div>
                </div>
                <ul className="nav__list">
                    <li>
                        <Icon icon={bxSearch}/>
                        <input className="sidebar__input" type="text" placeholder="Search..."/>
                    </li>
                    <li>
                        <NavLink to="/profile">
                            <Icon icon={bxGridAlt}/>
                            <span className="links__name">Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">
                            <Icon icon={bxUser}/>
                            <span className="links__name">Users</span>
                        </NavLink>
                        <span className="tooltip">Users</span>
                    </li>
                    <li>
                        <NavLink to="/usersPosts">
                            <Icon icon={bxNews}/>
                            <span className="links__name">Posts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs">
                            <Icon icon={bxChat}/>
                            <span className="links__name">Messages</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/saved">
                            <Icon icon={bxHeart}/>
                            <span className="links__name">Saved</span>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#">
                            <Icon icon={bxCog}/>
                            <span className="links__name">Setting</span>
                        </a>
                    </li>
                </ul>
                <div className="profile__content">
                    <div className="profile">
                        <div className="profile__details">
                            <img/>
                        </div>
                        <a id="log_out" onClick={logoutFn}>
                            <Icon icon={bxLogOut}/>
                            log out
                        </a>
                    </div>
                </div>
            </div>

        </>

    )

}


export default compose(
    withAuthToRedirect,
)(Sidebar) as React.ComponentType