import React, {ChangeEvent} from "react";
import './Profile.css'
import photo from '../../images/profile-photo.svg'
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ContactsType, ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    profile: ProfileType | null
    isFetching: boolean
    savePhoto: (file: File) => void
    updateProfileStatus: (status: string) => void
    status: string
    isOwner: boolean
}

type ProfileDescriptionType = {
    profile: ProfileType
}
const ProfileDescription: React.FC<ProfileDescriptionType> = ({profile}) => {
    return <ul className="profile___info-descr">
        <li>Full name: {profile.fullName}</li>
        <li>Looking for a job: {profile.lookingForAJobDescription}</li>
        <li>Contacts: {Object.keys(profile.contacts).map(key => {
            return <li key={key}>{key}: {profile.contacts[key as keyof ContactsType]}</li>
        })}</li>
    </ul>
}

const Profile: React.FC<PropsType> = props => {

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
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
                            {props.isFetching ? <Preloader/> : <img
                                src={(props.profile.photos.large != null) ? props.profile.photos.large : photo}
                                alt=""/>}

                        </div>
                        <div className="profile__photo-btn">
                            {props.isOwner ?
                                <label className="custom-file-upload">
                                    <input onChange={onPhotoSelected} type="file"/>
                                    Загрузить
                                </label> : ""}
                        </div>
                    </div>

                    <div className="profile-text__info">
                        <div className="title__info">
                            {props.profile.fullName}
                        </div>

                        <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>
                        <ProfileDescription profile={props.profile}/>
                    </div>
                </div>

                <MyPostsContainer/>

            </div>
        </section>
    );
};


export default Profile;
