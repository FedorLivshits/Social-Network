import React from "react";
import './Profile.css'
import photo from '../../images/profile-photo.svg'
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


function Profile(props) {

const onPhotoSelected = (e) => {
    if(e.target.files.length){
        props.savePhoto(e.target.files[0])
    }
}

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <section className="profile__content">
            <div className="color__wrapper ">
                <div className="profile__inner z-depth-2">
                    <div className="profile__photo-box">
                        <div className="profile__photo">
                            <img
                                src={(props.profile.photos.large != null) ? props.profile.photos.large : photo}
                                alt=""/>
                        </div>
                        <div className="profile__photo-btn">
                            {props.isOwner ? <input onChange={onPhotoSelected} type="file"/> : ""}
                        </div>
                    </div>

                    <div className="profile-text__info">
                        <div className="title__info">
                            {props.profile.fullName}
                        </div>

                        <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>

                        <div className="profile___info-descr">
                            <li><b>ABOUT ME:</b> {props.profile.aboutMe}</li>
                            <li><b>LOOKING FOR A JOB:</b> {props.profile.lookingForAJobDescription}</li>
                        </div>
                    </div>
                </div>

                <MyPostsContainer store={props.store}/>

            </div>
        </section>
    );
}


export default Profile;
