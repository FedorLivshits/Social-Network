import {profileAPI, usersAPI} from "../api/api";
import {setIsFetching, setUsers} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postMessages: [
        {id: 1, message: 'В процессе разработки'},
        {id: 2, message: 'Свободу Алексею Навальному!'},
        {id: 3, message: 'Использую метод массива map'},
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        postMessages: [...state.postMessages]
    }
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
            };
            let text = state.newPostText;
            if (text === '') {
                alert('nothing to send, darling')
            } else {
                stateCopy.postMessages.push(newPost);
                stateCopy.newPostText = '';
            }
            return stateCopy;
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export default profileReducer;