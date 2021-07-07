import React from "react";
import {ProfileType} from "../../types/types";


type UserContactsPropsType = {
    profile: ProfileType | any
    isOwner: boolean
}

export const UserContactsComponent: React.FC<UserContactsPropsType> = ({profile, isOwner}) => {
    return (
        <div className="card mb-3 mt-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {profile.fullName}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">About me</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {profile.aboutMe}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Job status</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {profile.lookingForAJob ? "looking for a job" : "working"}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">My skills</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {profile.lookingForAJobDescription}
                    </div>
                </div>
            </div>
        </div>
    )
}