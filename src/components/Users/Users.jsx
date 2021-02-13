import React from 'react'
import './Users.css'
import Post from "../MyPosts/Post/Post";


function User(props) {
    return <ul className="collection z-depth-2">
        <li className="collection-item avatar">
            <img src={props.photo} alt="" className="circle"/>
            <div className="user-info">
                <span className="title">{props.name}</span>
                <p>{props.location.country}<br/>
                    {props.location.city}
                </p>
            </div>
            {props.followed
                ?
                <a onClick={() => {
                    props.follow(userId)
                }} className="btn-floating btn-user red darken-2">
                    <i className="material-icons">delete</i>
                </a>
                :
                <a onClick={() => {
                    props.unfollow(userId)
                }} className="btn-floating btn-user yellow darken-2">
                    <i className="material-icons">add</i>
                </a>}

        </li>
    </ul>
}

function Users(props) {

    let users = props.users.map(users => {
        return <User name={users.name} id={users.id} photo={users.photo} followed={users.followed}
                     location={users.location} key={users.id}/>
    })

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

                        {users}

                    </div>

                    <div className="users__column-2">

                        {users}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Users;