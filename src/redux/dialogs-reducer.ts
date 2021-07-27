import { MyMessagesType } from './../types/types'
import { InferActionTypes } from './redux-store'
import { DialogsDataType } from '../types/types'

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

type InitialStateType = {
	dialogsData: Array<DialogsDataType>
	myMessages: Array<MyMessagesType>
}
let initialState: InitialStateType = {
	dialogsData: [],
	myMessages: [],
}

const dialogsReducer = (
	state = initialState,
	action: ActionTypes
): InitialStateType => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: action.id,
				message: action.message,
				date: `${new Date().toLocaleString('en', {
					weekday: 'long',
				})}  ${new Date().getDate()}  ${new Date().toLocaleString('en', {
					month: 'long',
				})}`,
				time: `${new Date().getHours()}:${new Date().getMinutes()}`,
			}
			return {
				...state,
				myMessages: [...state.myMessages, newMessage],
			}
		default:
			return state
	}
}
type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
	sendMessage: (message: string, id: number) => ({
		type: SEND_MESSAGE,
		message,
		id,
	}),
}

export default dialogsReducer
