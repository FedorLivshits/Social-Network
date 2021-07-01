import {NavLink} from "react-router-dom";
import photo from "../../images/profile-photo.svg";
import React from "react";

type PropsType = {
    id: string
    name: string
}

export const DialogUser: React.FC<PropsType> = props => (
    <NavLink className="dialog-user collection-item" to={'/dialogs/' + props.id}>
        <div className="dialog-user__info">
            <div className="dialog-user__avatar">
                <img src={photo} alt=""/>
            </div>
            <div className="dialog-user__name">
                {props.name}
            </div>
        </div>
        <div className="icon">
            <i className="material-icons">near_me</i>
        </div>
    </NavLink>

);