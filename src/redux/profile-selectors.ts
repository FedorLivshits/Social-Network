import { AppStateType } from "./redux-store";

export const getProfileData = (state: AppStateType) => {
    return state.profilePage.profile
}
export const getStatusData = (state: AppStateType) => {
    return state.profilePage.status
}
