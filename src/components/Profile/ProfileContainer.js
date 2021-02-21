import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
       let userId = this.props.match.params.userId
        if (!userId){
            userId = 15052;
        }

this.props.getUserProfile(userId)
this.props.getProfileStatus(userId)

    }
        render() {
            return (
                <Profile {...this.props} />
            )
        }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect (mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);



// Profile - отрисовывает jsx
// ProfileContainer - получает страницу профайл
// withAuthRedirect - редиректит на логин, если не залогинены
// withRouter - контролирует url адресс
// connect - взаимодействует со state, диспатчит экшены  в редьюсер
