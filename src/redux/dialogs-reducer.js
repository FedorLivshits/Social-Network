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
        {id: "Fedor", message: 'Я давно хотел сказать'},
        {id: "Fedor", message: 'мне тяжело это признавать'},
        {id: "Fedor", message: 'и вспоминать свое грязное прошлое...'},
        {id: "Fedor", message: 'я закончил юрфак спбгу'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
           return{
                ...state,
                newMessageText: action.newMessage
            }
        case SEND_MESSAGE:
            let message = state.newMessageText;
            if (message === '') {
                alert('nothing to send, darling')
            } else {
               return {
                    ...state,
                    newMessageText: '',
                    myMessages: [...state.myMessages, {id: "Fedor", message: message}]
                }
            }
        default:
            return state
    }
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