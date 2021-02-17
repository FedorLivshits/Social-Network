import React from 'react'
import './Users.css'
import * as axios from 'axios';
import photo from '../../images/profile-photo.svg'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <section className="users__content ">

                <div className="users__inner">

                    <div className="users__header z-depth-2">
                        <div className="users__title">
                            Find and add friends here
                        </div>
                        <div className="users-search__input">
                            <input type="text" placeholder="find a user"/>
                        </div>
                        <ul className="pagination">
                            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a>
                            </li>
                            {pages.map(page => {
                                return (
                                    <li className={this.props.currentPage === page && "active"}><a href="#!">{page}</a>
                                    </li>)
                            })}

                            <li className="waves-effect"><a href="#!"><i
                                className="material-icons">chevron_right</i></a></li>
                        </ul>

                    </div>

                    <div className="users">

                        <div className="users__column-1">

                            {this.props.users.map(u =>
                                <ul className="collection z-depth-2">
                                    <li className="collection-item avatar">
                                        <img src={u.photos.small != null ? u.photos.small : photo} alt="ava"
                                             className="circle"/>
                                        <div className="user-info">
                                            <span className="title">{u.name}</span>
                                            <p>{"u.location.country"}<br/>
                                                {"u.location.city"}
                                            </p>
                                        </div>
                                        {u.followed
                                            ?
                                            <a onClick={() => {
                                                this.props.follow(u.id)
                                            }}
                                               className="btn-floating btn-user indigo darken-3">
                                                <i className="material-icons">delete</i>
                                            </a>
                                            :
                                            <a onClick={() => {
                                                this.props.unfollow(u.id)
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
}


export default Users;