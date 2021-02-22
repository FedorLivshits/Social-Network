import React from "react";
import './Profile.css'
import photo from '../../images/profile-photo.svg'
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";


function Profile(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <section className="profile__content">
            <div className="color__wrapper z-depth-2">
                <div className="profile__inner z-depth-2">
                    <div className="profile__photo-box">
                        <div className="profile__photo">
                            <img
                                src={(props.profile.photos.large != null) ? props.profile.photos.large : photo}
                                alt=""/>
                        </div>
                        <div className="profile__photo-btn">
                            <a className="btn-floating btn-large waves-effect waves-light btn yellow darken-2"><i
                                className="material-icons">add</i></a>
                        </div>
                    </div>

                    <div className="profile-text__info">
                        <div className="title__info">
                            {props.profile.fullName}
                        </div>

                        <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>

                        <div className="profile___info-descr">
                            {/*<li><b>ABOUT ME:</b> {props.profile.aboutMe}</li>*/}
                            {/*<li><b>LOOKING FOR A JOB:</b> {props.profile.lookingForAJobDescription}</li>*/}
                        </div>
                    </div>
                </div>

                <MyPostsContainer store={props.store}/>

            </div>
        </section>
    );
}

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div className="profile-status">
                {!this.state.editMode ?
                    <div className="status-text" onClick={this.activateEditMode}>
                        {this.props.status || <div className="profile_no-status-text">Click to wtite a status</div>}
                    </div> :
                    <div className="status-form">
                        <div className="input-field col s6">
                            <input onChange={this.onStatusChange} autoFocus={true} id="input_text" type="text"
                                   placeholder="write and click anywhere" value={this.state.status}
                                   onBlur={this.deactivateEditMode}/>
                        </div>
                    </div>}

            </div>
        )
    }

}

export default Profile;
