import {ResponseCode} from "../api/api";
import {authAPI} from "../api/auth-api";
import {BaseThunkType, InferActionTypes} from "./redux-store";

const SET_USER_DATA = 'auth/SET_USER_DATA'


let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };

        default:
            return state

    }
}

type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
        return {
            type: SET_USER_DATA,
            data: {id, email, login, isAuth}
        }
    }
}

type ThunkType = BaseThunkType<ActionTypes>

export const getAuthUserData = (): ThunkType => (dispatch) => {
    return authAPI.me().then((meData: any) => {
        if (meData.resultCode === ResponseCode.Success) {
            let {id, email, login} = meData.data
            dispatch(actions.setAuthUserData(id, email, login, true))
        }

    })
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === ResponseCode.Success) {
        dispatch(getAuthUserData())
    } else {
        alert("some error")
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer;