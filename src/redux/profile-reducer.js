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

// let text = state.newPostText;
// if (text === '') {
//     alert('nothing to post, darling')
// }

export default profileReducer;