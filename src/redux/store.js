import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            postMessages: [
                {id: 1, message: 'В процессе разработки'},
                {id: 2, message: 'Свободу Алексею Навальному!'},
                {id: 3, message: 'Использую метод массива map'},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {name: 'Alexander Sarygin', id: '1'},
                {name: 'Sergey Solod', id: '2'},
                {name: 'Vlad Sosaysky', id: '3'},
                {name: 'Artem Kirpu', id: '4'},
                {name: 'Sam kopylov', id: '5'},
                {name: 'Pavel Ostapchuk', id: '6'},
            ],
            myMessages: [
                {id: "Fedor", message: 'Как твои дела?'},
                {id: "Fedor", message: 'Сколько дней ты не была в вк?'},
                {id: "Fedor", message: 'мне так хотелось тебе написать'},
                {id: "Fedor", message: 'но теперь все в прошлом и прошлое не оправдать'},
            ],
            newMessageText: '',
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPagePage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;