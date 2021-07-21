import { AppStateType } from "../redux-store";

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
export const getAuthorizedUserId = (state: AppStateType) => {
    return state.auth.id
}

