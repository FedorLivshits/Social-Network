import React from 'react'
import './Users.css'
import profile_photo1 from '../../images/profile-images/bandit-svgrepo-com.svg'
import profile_photo2 from '../../images/profile-images/man-user-svgrepo-com.svg'
import profile_photo3 from '../../images/profile-images/spy-svgrepo-com.svg'
import profile_photo4 from '../../images/profile-images/man-user-svgrepo-com (1).svg'

function Users () {
    return (
        <section className="users__content ">
            <div className="users__inner">

                <div className="users__header z-depth-2">
                    <div className="users__title">
                        Find friends here
                    </div>
                    <div className="users-search__input">
                        <input type="text" placeholder="find a user"/>
                    </div>
                </div>
<div className="users">
    <div className="users__column-1">
                <ul className="collection z-depth-2">
                    <li className="collection-item avatar">
                        <img src={profile_photo1} alt="" className="circle"/>
                            <span className="title">Alexander Sarygin</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">add</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src={profile_photo2} alt="" className="circle"/>
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">add</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src={profile_photo3} alt="" className="circle"/>
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">add</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src={profile_photo4} alt="" className="circle"/>
                            <span className="title">Title</span>
                            <p>First Line <br/>
                                Second Line
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">add</i></a>
                    </li>
                </ul>
    </div>

    <div className="users__column-2">
    <ul className="collection z-depth-2">
        <li className="collection-item avatar">
            <img src={profile_photo1} alt="" className="circle"/>
            <span className="title">Alexander Sarygin</span>
            <p>First Line <br/>
                Second Line
            </p>
            <a href="#!" className="secondary-content"><i className="material-icons">add</i></a>
        </li>
        <li className="collection-item avatar">
            <img src={profile_photo2} alt="" className="circle"/>
            <span className="title">Title</span>
            <p>First Line <br/>
                Second Line
            </p>
            <a href="#!" className="secondary-content"><i className="material-icons">add</i></a>
        </li>
        <li className="collection-item avatar">
            <img src={profile_photo3} alt="" className="circle"/>
            <span className="title">Title</span>
            <p>First Line <br/>
                Second Line
            </p>
            <a href="#!" className="secondary-content"><i className="material-icons">add</i></a>
        </li>
        <li className="collection-item avatar">
            <img src={profile_photo4} alt="" className="circle"/>
            <span className="title">Title</span>
            <p>First Line <br/>
                Second Line
            </p>
            <a href="#!" className="secondary-content"><i className="material-icons">add</i></a>
        </li>
    </ul>
    </div>
</div>
            </div>
        </section>
    )
}

export default Users;