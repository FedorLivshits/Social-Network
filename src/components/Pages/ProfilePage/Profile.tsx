import { Icon } from "@iconify/react";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import photo from "../../../images/user.png";
import "../../../main.scss";
import { savePhoto, updateProfileStatus } from "../../../redux/profile-reducer";
import { getProfileData, getStatusData } from "../../../redux/selectors/profile-selectors";
import { getIsFetching } from "../../../redux/selectors/users-selectors";
import Preloader from "../../Preloader/Preloader";
import { BreadcrumbsComponent } from "./BreadcrumbsComponent";
import MyPostsComponent from "./MyPosts/MyPostsComponent";
import { ProfileOwnerContentComponent } from "./ProfileOwnerContentComponent";
import ProfileStatus from "./ProfileStatus";
import bxUpload from '@iconify-icons/bx/bx-upload';

type PropsType = {
    isOwner: boolean;
    isNotPosts: boolean;
};

const Profile: React.FC<PropsType> = (props) => {

    const profile = useSelector(getProfileData)
    const isFetching = useSelector(getIsFetching)
    const status = useSelector(getStatusData)
    
    const dispatch = useDispatch()

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            dispatch(savePhoto(e.target.files[0]));
        }
    };

    if (!profile) {
        return <Preloader />;
    }
    return (
        <>
            <div className="profile__head">
                <div className="profile__head-inner">
                    <div className="container">
                        <div className="profile__head-info">
                            {isFetching ? (
                                <Preloader />
                            ) : (
                                <img
                                    className="profile__head-img"
                                    src={
                                        profile.photos.large != null
                                            ? profile.photos.large
                                            : photo
                                    }
                                    alt=""
                                />
                            )}

                            <span className="profile__name">{profile.fullName}</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {props.isOwner ? (
                        <div className="input-file__wrapper">
                            <input
                                className="file-input"
                                onChange={onPhotoSelected}
                                type="file"
                            />
                            <div className="file-input__btn">
                                <Icon icon={bxUpload} />
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="profile__bar">
                        <div className="profile__status">
                            <ProfileStatus
                                status={status}
                                isOwner={props.isOwner}
                                updateProfileStatus={updateProfileStatus}
                            />
                        </div>
                        <div className="profile__followed">
                            <ul className="profile__followed-items">
                                <li className="profile__followed-item">
                                    <span className="profile__followed-num">215</span>
                                    <NavLink exact to="/myPhotos">
                                        <span className="profile__followed-title">Photos</span>
                                    </NavLink>
                                </li>
                                <li className="profile__followed-item">
                                    <span className="profile__followed-num">745</span>
                                    <NavLink exact to="/myFriends">
                                        <span className="profile__followed-title">Friends</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <BreadcrumbsComponent isOwner={props.isOwner} />
                    <hr />
                </div>
            </div>
            <div className="container content-mobile">
                <Route
                    exact
                    path="/profile"
                    render={() => (
                        <ProfileOwnerContentComponent
                            isOwner={props.isOwner}
                            profile={profile}
                        />
                    )}
                />
                {!props.isOwner && props.isNotPosts ? (
                    <Route
                        path="/profile"
                        render={() => (
                            <ProfileOwnerContentComponent
                                isOwner={props.isOwner}
                                profile={profile}
                            />
                        )}
                    />
                ) : null}

                <Route
                    exact
                    path="/profile/posts"
                    render={() => <MyPostsComponent />}
                />
            </div>
        </>
    );
};

export default Profile;
