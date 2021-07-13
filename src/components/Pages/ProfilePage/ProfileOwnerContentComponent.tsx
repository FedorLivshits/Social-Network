import React from "react";
import {SocialLinksComponent} from "./SocialLinksComponent";
import {UserContactsComponent} from "./UserContactsCompnent.";
import ProfileInEditModeComponent from "./ProfileInEditMode";
import {ProfileType} from "../../../types/types";
import {useState} from "react";

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
}
export const ProfileOwnerContentComponent: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
    }
    return (
        <>
            {!editMode
                ?
                <>
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <SocialLinksComponent profile={props.profile}/>
                        </div>
                        <div className="col-md-8">
                            <UserContactsComponent profile={props.profile} isOwner={props.isOwner}/>
                        </div>
                    </div>
                    {props.isOwner ?
                        <div className="row">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-dark" onClick={activateEditMode}>Edit</button>
                            </div>
                        </div> : ""}
                </>
                :
                   <ProfileInEditModeComponent profile={props.profile} deactivateEditMode={deactivateEditMode}/>
            }
        </>
    )
}