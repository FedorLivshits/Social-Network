import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
              ...action.data,
                isAuth: true
            };

        default:
            return state

    }
}

export const setAuthUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    }
}
export const getAuthUserData = () => (dispatch) => {
    return  authAPI.me().then(response => {
            if (response.data.resultCode === 0){
                let {id,email,login} = response.data.data
                dispatch(setAuthUserData(id,email,login))
                //деструктуризация
            }

        })
}
export const login = (email, password, remeberMe) => (dispatch) => {
    return  authAPI.login(email, password, remeberMe).then(response => {
            if (response.data.resultCode === 0){
                dispatch(getAuthUserData())
            }

        })
}
export const logout = () => (dispatch) => {
    return  authAPI.logout().then(response => {
            if (response.data.resultCode === 0){
                dispatch(getAuthUserData())
            }

        })
}

export default authReducer;