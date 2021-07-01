import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = props => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }

    let onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }
    return (
        <div className="profile-status">
            {!editMode
                ?
                <div className="status-text" onClick={activateEditMode}>
                    {props.status ||
                    <div className="profile_no-status-text">
                        Click to wtite a status
                    </div>}
                </div>
                :
                <div className="status-form">
                    <div className="input-field col s6">
                        <input onChange={onStatusChange} autoFocus={true} id="input_text" type="text"
                               placeholder="write and click anywhere"
                               onBlur={deactivateEditMode}
                               value={status}
                        />
                    </div>
                </div>
            }

        </div>
    )
};

export default ProfileStatus;
