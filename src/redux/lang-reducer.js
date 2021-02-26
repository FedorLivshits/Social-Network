const SET_ENGLISH_LANGUAGE = 'SET_ENGLISH_LANGUAGE'
const SET_RUSSIAN_LANGUAGE = 'SET_RUSSIAN_LANGUAGE'

let initialState = {
    lang: "RU",
}

const langReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ENGLISH_LANGUAGE:
            return {
                ...state,
                lang: "EN",
            };
        case SET_RUSSIAN_LANGUAGE:
            return {
                ...state,
                lang: "RU",
            };

        default:
            return state

    }
}

export const setEnLanguage = () => ({type: SET_ENGLISH_LANGUAGE})
export const setRuLanguage = () => ({type: SET_RUSSIAN_LANGUAGE})


export default langReducer;