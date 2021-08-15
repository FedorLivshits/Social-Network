import {Dispatch} from 'redux'
import {UsersType} from '../types/types'
import {BaseThunkType, InferActionTypes} from './redux-store'
import {usersAPI} from '../api/users-api'

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    friends: localStorage.getItem('friends')
        ? JSON.parse(localStorage.getItem('friends') as string) as Array<UsersType>
        : [],
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            let friendsCopy = [...state.friends]
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        let friend = {...user, followed: true}
                        friendsCopy.push(friend)
                        return friend
                    }
                    return user
                }),
                friends: [...friendsCopy]
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                }),
                // @ts-ignore
                friends: state.friends.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                }) // @ts-ignore
                    .filter(user => user.followed),
            }
        case 'SET_USERS':
            return {...state, users: action.users}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.page}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state

    }
}
export type ActionTypes = InferActionTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UsersType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const),
    setIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching,
        userId
    } as const)
}
export const setIsFetchingPhoto = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching})

type ThunkType = BaseThunkType<ActionTypes>


export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.setIsFetching(true))
        dispatch(actions.setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.setIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionTypes>, userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => ActionTypes) => {
    dispatch(actions.toggleFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId))
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow, actions.unfollowSuccess)
    }
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow, actions.followSuccess)
    }
}


export default usersReducer

