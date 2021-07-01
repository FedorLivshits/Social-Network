import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapStateToPropsType);

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
}

export function withAuthToRedirect <WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>

        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapStateToPropsType, MapDispatchToPropsType, WCP, AppStateType>(
        mapStateForRedirect, {})
    (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}