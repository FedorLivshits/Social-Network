import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { getUsers } from "../../../redux/users-reducer";
import {
    getCurrentPage, getPageSize
} from "../../../redux/users-selectors";
import { withAuthToRedirect } from "../../hoc/withAuthToRedirect";
import Users from "./Users";


const UsersPage: React.FC = () => {
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [])


    return (
        <Users
        />

    )
}

export default compose(
    withAuthToRedirect
)(UsersPage) as React.ComponentType
