const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'
const SET_FRIENDS = 'dialogs/SET_FRIENDS'

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
        {id: "Fedor", message: 'Привет)'},
        {id: "Fedor", message: 'Как твои дела?'},
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let message = action.newMessageText;
            return {
                ...state,
                myMessages: [...state.myMessages, {id: "Fedor", message: message}]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;