import React from 'react'
import './Users.css'


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
//                     props.addUser(props.users.id)
//                 }} className="btn-floating btn-user red darken-2">
//                     <i className="material-icons">delete</i>
//                 </a>
//                 :
//                 <a onClick={() => {
//                     props.deleteUser(props.users.id)
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
    let onAddUser = () => {
        let userId = props.users.id
        props.follow(userId);
    }
    let onDeleteUser = () => {
        let userId = props.users.id
        props.unfollow(userId);
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
                        <ul  className="collection z-depth-2">
                            <li className="collection-item avatar">
                                <img src={u.photo} alt="" className="circle"/>
                                <div className="user-info">
                                    <span className="title">{u.name}</span>
                                    <p>{u.location.country}<br/>
                                        {u.location.city}
                                    </p>
                                </div>
                                {u.followed
                                    ?
                                    <a  onClick={onAddUser}
                                             className="btn-floating btn-user red darken-2">
                                        <i className="material-icons">delete</i>
                                    </a>
                                    :
                                    <a onClick={onDeleteUser} className="btn-floating btn-user yellow darken-2">
                                        <i className="material-icons">add</i>
                                    </a>}

                            </li>
                        </ul>
                    )
                    }
                    </div>
                    <div className="users__column-2">
                        {props.users.map(u =>
                            <ul  className="collection z-depth-2">
                                <li className="collection-item avatar">
                                    <img src={u.photo} alt="" className="circle"/>
                                    <div className="user-info">
                                        <span className="title">{u.name}</span>
                                        <p>{u.location.country}<br/>
                                            {u.location.city}
                                        </p>
                                    </div>
                                    {u.followed
                                        ?
                                        <a  onClick={onAddUser}
                                            className="btn-floating btn-user red darken-2">
                                            <i className="material-icons">delete</i>
                                        </a>
                                        :
                                        <a onClick={onDeleteUser} className="btn-floating btn-user yellow darken-2">
                                            <i className="material-icons">add</i>
                                        </a>}

                                </li>
                            </ul>
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Users;