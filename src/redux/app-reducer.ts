import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {
    initialized: false,
}
type InitialStateType = typeof initialState
const appReducer = (state = initialState, action): InitialStateType => {

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

export const initialisedSuccess = () => ({type: INITIALIZED_SUCCESS,})


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then( () => {
        dispatch(initialisedSuccess())
    })
}
export default appReducer;