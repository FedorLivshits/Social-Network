import {ProfileType, PhotosType} from "../types/types";
import { BaseThunkType, InferActionTypes} from "./redux-store";
import {profileAPI} from "../api/profile-api";


let todoId = 3;


let initialState = {
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
        case 'profile/ADD-POST': {
            let newPost = {
                id: todoId++,
                message: action.newPostText,
            };
            return {
                ...state,
                postMessages: [...state.postMessages, newPost],
            };
        }
        case 'profile/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'profile/SET_PROFILE_STATUS': {
            return {...state, status: action.status}
        }
        case 'profile/DELETE_POST': {
            return {...state, postMessages: state.postMessages.filter(p => p.id !== action.id) }
        }
        case 'profile/SAVE_PHOTO_SUCCESS': {
            return {...state, profile:{...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state;
    }
}

export const actions = {
    addPost: (newPostText: string) => ({type: 'profile/ADD-POST', newPostText} as const),
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