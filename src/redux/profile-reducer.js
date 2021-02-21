import {profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'


let initialState = {
    postMessages: [
        {id: 1, message: 'В процессе разработки'},
        {id: 2, message: 'Свободу Алексею Навальному!'},
        {id: 3, message: 'HTML5/CSS3, JavaScript, TypeScript, React/Redux, REST-API'},
    ],
    newPostText: '',
    profile: null,
    status: '',
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
        case SET_PROFILE_STATUS: {
            return {...state, status: action.status}
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
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setProfileStatus(response.data))
        })
    }
}
export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
    }
}


export default profileReducer;