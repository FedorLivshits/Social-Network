import { getAuthUserData } from "./auth-reducer";
import { BaseThunkType, InferActionTypes } from "./redux-store";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'


let initialState = {
    initialized: false,
}

type InitialStateAppType = typeof initialState


const appReducer = (state = initialState, action: ActionTypes): InitialStateAppType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state

    }
}

type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    initialisedSuccess: () => ({ type: INITIALIZED_SUCCESS })
}

type ThunkType = BaseThunkType<ActionTypes>

export const initializeApp = (): ThunkType => (dispatch) => {
    return dispatch(getAuthUserData())
        .then(() => {
            dispatch(actions.initialisedSuccess())
        })
}

export default appReducer;