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
                        <h6 className="mb-0">Write to</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {profile.contacts.mainLink}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Job status</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        +7(000) 000-00-00
                    </div>
                </div>
            </div>
        </div>
    )
}