import React from 'react'
import './Users.css'
import * as axios from 'axios';
import photo from '../../images/profile-photo.svg'

// function User(props) {
//     return <ul className="collection z-depth-2">
//         <li className="collection-item avatar">
//             <img src={props.users.photo} alt="" className="circle"/>
//             <div className="user-info">
//                 <span className="title">{props.name}</span>
//                 <p><br/>
//
//                 </p>
//             </div>
//             {props.followed
//                 ?
//                 <a onClick={() => {
//                     props.follow(props.users.id)
//                 }} className="btn-floating btn-user red darken-2">
//                     <i className="material-icons">delete</i>
//                 </a>
//                 :
//                 <a onClick={() => {
//                     props.unfollow(props.users.id)
//                 }} className="btn-floating btn-user yellow darken-2">
//                     <i className="material-icons">add</i>
//                 </a>}
//
//         </li>
//     </ul>
// }

// let users = props.users.map(users => {
//     return <User users={props.users} key={users.id} addUser={users.addUser} deleteUser={users.deleteUser}/>
// })

function Users(props) {
    // let onAddUser = () => {
    //     let userId = props.users.id
    //     props.follow(userId);
    // }
    // let onDeleteUser = () => {
    //     let userId = props.users.id
    //     props.unfollow(userId);
    // }
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            props.setUsers(response.data.items)
        })


    }

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
                        {props.users.map(u =>
                            <ul className="collection z-depth-2">
                                <li className="collection-item avatar">
                                    <img src={u.photos.small != null ? u.photos.small : photo } alt="ava" className="circle"/>
                                    <div className="user-info">
                                        <span className="title">{u.name}</span>
                                        <p>{"u.location.country"}<br/>
                                            {"u.location.city"}
                                        </p>
                                    </div>
                                    {u.followed
                                        ?
                                        <a onClick={() => { debugger
                                            props.follow(u.id)
                                        }}
                                           className="btn-floating btn-user indigo darken-3">
                                            <i className="material-icons">delete</i>
                                        </a>
                                        :
                                        <a onClick={() => { debugger
                                            props.unfollow(u.id)
                                        }} className="btn-floating btn-user yellow darken-2">
                                            <i className="material-icons">add</i>
                                        </a>}

                                </li>
                            </ul>
                        )
                        }
                    </div>
                    <div className="users__column-2">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Users;