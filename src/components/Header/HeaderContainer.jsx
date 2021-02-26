import React from 'react'
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {setEnLanguage, setLanguage, setRuLanguage} from "../../redux/lang-reducer";


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>;
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    lang: state.language.lang

})

export default compose(
    connect(mapStateToProps, {logout, setEnLanguage, setRuLanguage}),
)(HeaderContainer);