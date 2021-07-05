import {ProfileType, PhotosType} from "../types/types";
import { BaseThunkType, InferActionTypes} from "./redux-store";
import {profileAPI} from "../api/profile-api";


let todoId = 3;

let initialState = {
    myPosts: localStorage.getItem("myPosts")
        ? JSON.parse(localStorage.getItem("myPosts") as string)
        : [],
    postMessages: [
        {id: 1, message: 'В процессе разработки'},
        {id: 2, message: 'HTML5/CSS3, JavaScript, TypeScript, React/Redux, REST-API'},
    ],
    profile: null as null | ProfileType,
    status: '',
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case  'profile/ADD-POST':
            let id = Math.random().toString(32).substring(2, 10) + (+new Date).toString(32)
            let newPost = {
                id: id,
                text: action.text,
                date: `${new Date().toLocaleString('en', {weekday: 'long'})}  ${new Date().getDate()}  ${new Date().toLocaleString('en', {month: 'long'})}`,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`
            }
            return {...state, myPosts: [newPost, ...state.myPosts]}
        case 'profile/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'profile/SET_PROFILE_STATUS': {
            return {...state, status: action.status}
        }
        case 'profile/DELETE_POST':
            return {...state, myPosts: state.myPosts.filter((p: any) => p.id !== action.id)}
        case 'profile/SAVE_PHOTO_SUCCESS': {
            return {...state, profile:{...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state;
    }
}

export const actions = {
    addPost: (text: string ) => ({type: 'profile/ADD-POST', text} as const),
    deletePost: (id: number) => ({type: 'profile/DELETE_POST', id} as const),
    setUserProfile: (profile: ProfileType)  => ({type: 'profile/SET_USER_PROFILE', profile} as const),
    setProfileStatus: (status: string)  => ({type: 'profile/SET_PROFILE_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'profile/SAVE_PHOTO_SUCCESS', photos} as const)
}

type ActionTypes = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>

export const getUserProfile = (userId: number) : ThunkType=> {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data))
    }
}
export const getProfileStatus = (userId: number) : ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(actions.setProfileStatus(data))
    }
}
export const updateProfileStatus = (status: string) : ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(actions.setProfileStatus(status))
        }
    }
}
export const savePhoto = (file: File) : ThunkType => {
    return async (dispatch) => {
        // dispatch(actions.setIsFetching(true))
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(actions.savePhotoSuccess(data.data.photos))
        }
        // dispatch(actions.setIsFetching(false))
    }
}

export default profileReducer;