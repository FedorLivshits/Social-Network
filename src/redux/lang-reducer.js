const SET_LANGUAGE = 'SET_LANGUAGE'

let initialState = {
    lang: false,
}

const langReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                lang: true,
            };

        default:
            return state

    }
}

export const setLanguage = () => ({type: SET_LANGUAGE})


export default langReducer;