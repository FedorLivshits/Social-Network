import {rerenderEntireTree} from "../render";

let state = {
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
}


export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
    }
    state.profilePage.postMessages.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;