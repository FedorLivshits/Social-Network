import React, { useEffect, useRef } from "react";
import Profile from "./Profile";
import { getProfileStatus, getUserProfile, savePhoto, updateProfileStatus } from "../../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthToRedirect } from "../../hoc/withAuthToRedirect";
import { compose } from "redux";
import { AppStateType } from "../../../redux/redux-store";
import { connect } from "react-redux";
import { getProfileData, getStatusData } from "../../../redux/selectors/profile-selectors";
import { getIsFetching } from "../../../redux/selectors/users-selectors";
import { getAuthorizedUserId, getIsAuth } from "../../../redux/selectors/auth-selectors";

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

const ProfileContainer: React.FC<PropsType> = (props) => {
    useEffect(() =>{
        let userId: number | null = +props.match.params.userId
        console.log(`${props.match.params.userId}: ${typeof props.match.params.userId}`)
        if (!userId) {
            userId = props.authorizedUserId
        }
        props.getUserProfile(userId as number)
        props.getProfileStatus(userId as number)
    }, [])

    function usePrevious(value: any) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }
      const prevUserId = usePrevious(props.match.params.userId)

    useEffect(() => {
        if (props.match.params.userId !== prevUserId) {
            let userId: number | null = +props.match.params.userId
            if (!userId) {
                userId = props.authorizedUserId;
            }
            props.getUserProfile(userId as number)
            props.getProfileStatus(userId as number)
        }
    }, [props.match.params.userId])

    return (
        <>
            <Profile {...props} isOwner={props.match.params.userId === undefined || props.match.params.userId === 'posts'} isNotPosts={props.match.params.userId !== 'posts'} />
        </>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    profile: getProfileData(state),
    status: getStatusData(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuth: getIsAuth(state),
    isFetching: getIsFetching(state)
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

