import React from "react";
import './Profile.css'
import photo from '../images/profile-photo.svg'
import Posts from "./Posts";

function Profile() {
    return (
        <section className="profile__content z-depth-2">

            <div className="profile__inner">
                <div className="profile__photo-box z-depth-2">
                    <div className="profile__photo">
                        <img src={photo} alt=""/>
                    </div>
                    <div className="profile__photo-btn">
                        <a className="btn-floating btn-large waves-effect waves-light  yellow darken-2"><i
                            className="material-icons">add</i></a>
                    </div>
                </div>

                <div className="profile-text__info">
                    <div className="title__info">
                        FEDOR LIVSHITS
                    </div>
                    <div className="profile___info-descr">
                        <li>BIRTH: 15.03.1998</li>
                        <li>CITY: St-Petersburg</li>
                        <li>WORK: in progress</li>
                    </div>
                </div>
            </div>

            <Posts/>

        </section>
    );
}

export default Profile;