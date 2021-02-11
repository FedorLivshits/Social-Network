const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postMessages: [
        {id: 1, message: 'В процессе разработки'},
        {id: 2, message: 'Свободу Алексею Навальному!'},
        {id: 3, message: 'Использую метод массива map'},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
        }
        let text = state.newPostText;
        if (text === '') {
            alert('nothing to post, darling')
        } else {
            state.postMessages.push(newPost)
            state.newPostText = ''
        }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
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

export default profileReducer;