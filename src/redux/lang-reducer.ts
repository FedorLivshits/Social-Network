import {InferActionTypes} from "./redux-store";

const SET_ENGLISH_LANGUAGE = 'lang/SET_ENGLISH_LANGUAGE'
const SET_RUSSIAN_LANGUAGE = 'lang/SET_RUSSIAN_LANGUAGE'


let initialState = {
    lang: "RU",
}

type InitialStateType = typeof initialState

const langReducer = (state = initialState, action: ActionTypes) : InitialStateType=> {

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

type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    setEnLanguage: () => ({type: SET_ENGLISH_LANGUAGE}),
    setRuLanguage: () => ({type: SET_RUSSIAN_LANGUAGE})
}

export default langReducer;