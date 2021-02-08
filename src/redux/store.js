const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            postMessages: [
                {id: 1, message: 'В процессе разработки'},
                {id: 2, message: 'Свободу Алексею Навальному!'},
                {id: 3, message: 'Использую метод массива map'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {name: 'Alexander Sarygin', id: '1'},
                {name: 'Sergey Solod', id: '2'},
                {name: 'Vlad Sosaysky', id: '3'},
                {name: 'Artem Kirpu', id: '4'},
                {name: 'Sam kopylov', id: '5'},
                {name: 'Pavel Ostapchuk', id: '6'},
            ]
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
            }
            let text = this._state.profilePage.newPostText;
            if (text === '') {
                alert('nothing to post, darling')
            } else {
                this._state.profilePage.postMessages.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
            }
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }
        }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default store;
window.store = store;