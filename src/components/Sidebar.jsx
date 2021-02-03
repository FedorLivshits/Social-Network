import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <section className="sidebar z-depth-2 ">
            <aside className="menu">
                <ul className="menu__list">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">MESSAGES</a></li>
                    <li><a href="#">FRIENDS</a></li>
                    <li><a href="#">PHOTOS</a></li>
                    <li><a href="#">COMMUNITY</a></li>
                </ul>
            </aside>
        </section>
    );

}
export default Sidebar;