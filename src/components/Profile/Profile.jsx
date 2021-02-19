import React from "react";
import './Profile.css'
import photo from '../../images/profile-photo.svg'
import photo1 from '../../images/profile-images/bandit-svgrepo-com.svg'
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";


function Profile(props) {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <section className="profile__content">
            <div className="color__wrapper z-depth-2">
            <div className="profile__inner z-depth-2">
                <div className="profile__photo-box">
                    <div className="profile__photo">
                        <img src={(props.profile.photos.large != null) ? props.profile.photos.large : (props.match.params.userId === 15052) ? photo1 : photo} alt=""/>
                    </div>
                    <div className="profile__photo-btn">
                        <a className="btn-floating btn-large waves-effect waves-light btn yellow darken-2"><i
                            className="material-icons">add</i></a>
                    </div>
                </div>

                <div className="profile-text__info">
                    <div className="title__info">
                        {props.profile.fullName}
                    </div>
                    <div className="profile___info-descr">
                        <li> <b>ABOUT ME:</b> {props.profile.aboutMe}</li>
                        <li> <b>LOOKING FOR A JOB:</b> {props.profile.lookingForAJobDescription}</li>
                    </div>
                </div>
            </div>

            <MyPostsContainer store={props.store}/>

            </div>
        </section>
    );
}

export default Profile;
