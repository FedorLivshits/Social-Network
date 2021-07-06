import React, {ChangeEvent} from "react";
import '../../App.css'
import photo from '../../images/user.png'
import Preloader from "../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfileType} from "../../types/types";
import {NavLink, Route} from "react-router-dom";
import {SocialLinksComponent} from "./SocialLinksComponent";
import {UserContactsComponent} from "./UserContactsCompnent.";
import MyPostsComponent from "../MyPosts/MyPostsComponent";
import { BreadcrumbsComponent } from "./BreadcrumbsComponent";


type PropsType = {
    profile: ProfileType | null
    isFetching: boolean
    savePhoto: (file: File) => void
    updateProfileStatus: (status: string) => void
    status: string
    isOwner: boolean
}


const Profile: React.FC<PropsType> = props => {
    const inputFileStyle = {
        width: "130px",
        opacity: "0.8"
    }
    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            <div className="profile__head">
                <div className="profile__head-inner">
                    <div className="container">
                        <div className="profile__head-info">
                            {props.isFetching ? <Preloader/> : <img className="profile__head-img"
                                                                    src={(props.profile.photos.large != null) ? props.profile.photos.large : photo}
                                                                    alt=""/>}

                            <span className="profile__name">
                            {props.profile.fullName}
                        </span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {props.isOwner ?
                        <div className="input-file">
                            <input className='file-input' onChange={onPhotoSelected} type="file"
                                   style={inputFileStyle}/>
                        </div>
                        : ""}
                    <div className="profile__bar">
                        <div className="profile__status">
                            <ProfileStatus status={props.status} isOwner={props.isOwner}
                                           updateProfileStatus={props.updateProfileStatus}/>
                        </div>
                        <div className="profile__followed">
                            <ul className="profile__followed-items">
                                <li className="profile__followed-item">
                                    <span className="profile__followed-num">215</span>
                                    <NavLink exact to='/myPhotos'>
                                        <span className="profile__followed-title">Photos</span>
                                    </NavLink>
                                </li>
                                <li className="profile__followed-item">
                                    <span className="profile__followed-num">745</span>
                                    <NavLink exact to='/myFriends'>
                                        <span className="profile__followed-title">Friends</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <BreadcrumbsComponent isOwner={props.isOwner}/>
                </div>
            </div>
            <div className="container">
                <Route exact path='/profile'
                       render={() => <div className="row gutters-sm">
                           <div className="col-md-4 mb-3">
                               <SocialLinksComponent profile={props.profile}/>
                           </div>
                           <div className="col-md-8">
                               <UserContactsComponent profile={props.profile} isOwner={props.isOwner}/>
                           </div>
                       </div>}/>
                <Route exact path='/profile/posts' render={() => <MyPostsComponent/>}/>
            </div>
        </>
    );
};


export default Profile;
