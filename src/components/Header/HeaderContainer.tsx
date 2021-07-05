import React from 'react'
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect, MapDispatchToProps} from "react-redux";
import {compose} from "redux";
import {actions} from "../../redux/lang-reducer";
import {AppStateType} from "../../redux/redux-store";


export type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    lang: string
}
export type MapDispatchToPropsType = {
    logout: () => void
    setEnLanguage: () => void
    setRuLanguage: () => void
}

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    lang: state.language.lang

})

export default compose(
    connect(mapStateToProps, {logout, setEnLanguage: actions.setEnLanguage, setRuLanguage: actions.setRuLanguage}),
)(HeaderContainer);