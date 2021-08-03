import React from "react";
import { SocialLinksComponent } from "./SocialLinksComponent";
import { UserContactsComponent } from "./UserContactsCompnent.";
import ProfileInEditModeComponent from "./ProfileInEditMode";
import { ProfileType } from "../../../types/types";
import { useState } from "react";
import {Col, Row} from 'react-bootstrap'

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
                    {props.isOwner ?
                        <Row>
                            <Col>
                                <button type="button" className="btn btn-dark mobile-btn float-right" onClick={activateEditMode}>Edit</button>
                            </Col>
                        </Row> : ""}
                    <Row>
                        <Col xl={6} lg={6} md={12}>
                            <SocialLinksComponent profile={props.profile} />
                        </Col>
                        <Col xl={6} lg={6} md={12}>
                            <UserContactsComponent profile={props.profile} isOwner={props.isOwner} />
                        </Col>
                    </Row>

                </>
                :
                <ProfileInEditModeComponent profile={props.profile} deactivateEditMode={deactivateEditMode} />
            }
        </>
    )
}