import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, savePhoto, updateProfileStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthToRedirect} from "../hoc/withAuthToRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getProfileStatus: (userId: number) => void
    updateProfileStatus: (status: string) => void
    savePhoto: (file: File) => void
}

type PathParamsType = {
    userId: string,
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId: number | null = +this.props.match.params.userId
        console.log(userId)
        if (!userId) {
            userId = this.props.authorizedUserId;
            console.log(userId)
        }
        this.props.getUserProfile(userId as number)
        this.props.getProfileStatus(userId as number)
    }


    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            let userId: number | null = +this.props.match.params.userId
            if (!userId) {
                userId = this.props.authorizedUserId;
            }
            this.props.getUserProfile(userId as number)
            this.props.getProfileStatus(userId as number)
        }

    }

    render() {
        return (
            <>
                <Profile {...this.props} isOwner={this.props.match.params.userId === undefined || this.props.match.params.userId === 'posts'}/>
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    isFetching: state.usersPage.isFetching
})

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getProfileStatus,
        updateProfileStatus,
        savePhoto
    }),
    withRouter,
    withAuthToRedirect
)(ProfileContainer) as React.ComponentType;

