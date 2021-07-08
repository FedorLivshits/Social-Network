import React, {useEffect, useState} from "react";
import {ChangeEvent} from "react";
import {ProfileType} from "../../types/types";
import {connect, useSelector} from "react-redux";
import {saveProfileInfo} from "../../redux/profile-reducer"

type MapStateToPropsType = {
}
type MapDispatchToPropsType = {
    saveProfileInfo: (formObj: any, userId: number) => void
}
type PropsType = {
    profile: ProfileType | null
    deactivateEditMode: () => void
}

const ProfileInEditModeComponent: React.FC<MapStateToPropsType & MapDispatchToPropsType & PropsType> = ({profile, saveProfileInfo, deactivateEditMode}) => {
    const [inputName, setInputName] = useState("")
    const [inputAboutMe, setInputAboutMe] = useState("")
    const [inputJobStatus, setInputJobStatus] = useState(false)
    const [inputSkills, setInputSkills] = useState("")
    const [contacts, setContacts] = useState({
        github: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
    })

  useEffect(() => {
      setInputName(profile!.fullName)
      setInputAboutMe(profile!.aboutMe)
      setInputJobStatus(profile!.lookingForAJob)
      setInputSkills(profile!.lookingForAJobDescription)
      setContacts({...contacts, github: profile!.contacts.github})
  }, [])

    const onInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value)
    }
    const onInputAboutMeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputAboutMe(e.target.value)
    }
    const onInputJobStatusChange = () => {
        setInputJobStatus(!inputJobStatus)
    }
    const onInputSkillsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputSkills(e.target.value)
    }
    const onGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContacts({...contacts, github: e.target.value})
    }
    const onSaveButtonClick = () => {
        let formObj = {
            userId: profile!.userId,
            lookingForAJob: inputJobStatus,
            lookingForAJobDescription: inputSkills,
            aboutMe: inputAboutMe,
            fullName: inputName,
            contacts: {
                github: contacts.github
            }
        }
        saveProfileInfo(formObj, profile!.userId)
        deactivateEditMode()
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control"
                               onChange={onInputNameChange} value={inputName}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">About me</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control" onChange={onInputAboutMeChange} value={inputAboutMe}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Looking for a job</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="checkbox" onClick={onInputJobStatusChange} checked={inputJobStatus}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">My skills</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control" onChange={onInputSkillsChange} value={inputSkills}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Website</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Github</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control" value={contacts.github} onChange={onGithubChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Twitter</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Instagram</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Facebook</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-9 text-secondary">
                        <input type="button" className="btn btn-primary px-4" value="Save Changes" onClick={onSaveButtonClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {saveProfileInfo} )(ProfileInEditModeComponent)