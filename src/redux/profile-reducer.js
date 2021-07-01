import {profileAPI} from "../api/api";
import {setIsFetching} from "./users-reducer";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'


let todoId = 3;
let initialState = {
    postMessages: [
        {id: 1, message: 'В процессе разработки'}, ,
        {id: 2, message: 'HTML5/CSS3, JavaScript, TypeScript, React/Redux, REST-API'},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        postMessages: [...state.postMessages]
    }
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: todoId++,
                message: action.newPostText,
            };
            let text = action.newPostText;
            if (text === '') {
                alert('nothing to send, darling')
            } else {
                stateCopy.postMessages.push(newPost);
            }
            return stateCopy;
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_PROFILE_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, postMessages: state.postMessages.filter(p => p.id !== action.id) }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile:{...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (id) => ({type: DELETE_POST, id});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}
export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setProfileStatus(response.data))
    }
}
export const updateProfileStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
        dispatch(setIsFetching(false))
    }
}

export default profileReducer;