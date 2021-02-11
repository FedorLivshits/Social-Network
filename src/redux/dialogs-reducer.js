const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessage
    } else if (action.type === SEND_MESSAGE) {
        let message = state.newMessageText;
        if (message === '') {
            alert('nothing to send, darling')
        } else {
            state.myMessages.push({id: "Fedor", message: message});
            state.newMessageText = '';
        }
    }

    return state
}
export const updateNewMessageTextActionCreator = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: newMessage,
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export default dialogsReducer;