import React from 'react'
import {
    actions,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthToRedirect } from "../../hoc/withAuthToRedirect";
import { compose } from "redux";
import { AppStateType } from "../../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        myMessages: state.dialogsPage.myMessages,
        authUserId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, { sendMessage: actions.sendMessage }),
    withAuthToRedirect
)(Dialogs) as React.ComponentType