import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, savePhoto, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            let userId = this.props.match.params.userId
            if (!userId) {
                userId = this.props.authorizedUserId;
            }
            this.props.getUserProfile(userId)
            this.props.getProfileStatus(userId)
        }

    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


// Profile - отрисовывает jsx
// ProfileContainer - получает страницу профайл
// withAuthRedirect - редиректит на логин, если не залогинены
// withRouter - контролирует url адресс
// connect - взаимодействует со state, диспатчит экшены  в редьюсер
