import React from 'react'
import {NavLink} from 'react-router-dom'
import {Icon} from '@iconify/react'
import bxGridAlt from '@iconify-icons/bx/bx-grid-alt'
import bxUser from '@iconify-icons/bx/bx-user'
import bxNews from '@iconify-icons/bx/bx-news'
import bxChat from '@iconify-icons/bx/bx-chat'
import bxHeart from '@iconify-icons/bx/bx-heart'
import bxLogOut from '@iconify-icons/bx/bx-log-out'
import {useDispatch} from 'react-redux'
import {logout} from '../../redux/auth-reducer'
import bxFriends from '@iconify-icons/bx/bx-user-check'

const FooterMobile: React.FC = () => {
    const dispatch = useDispatch()
    const logoutFn = () => {
        dispatch(logout())
    }
    return (
        <footer className="footer-mobile">
            <ul className="footer-mobile-items">
                <li>
                    <NavLink to="/profile">
                        <Icon icon={bxGridAlt} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users">
                        <Icon icon={bxUser} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/friends" >
                        <Icon icon={bxFriends}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/usersPosts">
                        <Icon icon={bxNews} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs">
                        <Icon icon={bxChat} />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/saved">
                        <Icon icon={bxHeart} />
                    </NavLink>
                </li>
                <li>
                    <a id="log_out" onClick={logoutFn}>
                        <Icon icon={bxLogOut}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
export default FooterMobile