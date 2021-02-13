const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
import profile_photo1 from '../images/profile-photo.svg'
import profile_photo2 from '../images/profile-images/man-user-svgrepo-com.svg'
import profile_photo3 from '../images/profile-images/spy-svgrepo-com.svg'
import profile_photo4 from '../images/profile-images/man-user-svgrepo-com (1).svg'
import profile_photo5 from '../images/profile-images/woman-svgrepo-com.svg'
import profile_photo6 from '../images/profile-images/woman-user-svgrepo-com.svg'
import profile_photo7 from '../images/profile-images/woman-user-svgrepo-com (1).svg'
let initialState = {
    users: [
        {id: '1', photo: {profile_photo1},followed: false, name: 'Alexander Sarygin', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '2',photo: {profile_photo2}, followed: false, name: 'Sergey Solod', location: {country: 'Russia', city: 'Moscow'}},
        {id: '3', photo: {profile_photo3},followed: false, name: 'Vlad Sosaysky', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '4', photo: {profile_photo4},followed: false, name: 'Artem Kirpu', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '5', photo: {profile_photo5},followed: false, name: 'Sam kopylov', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '6', photo: {profile_photo6},followed: false, name: 'Pavel Ostapchuk', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '7', photo: {profile_photo7},followed: false, name: 'Misha Vlaskin', location: {country: 'Litva', city: 'Vilnus'}},
        {id: '8', photo: {profile_photo1},followed: false, name: 'Alisa Konovalova', location: {country: 'Russia', city: 'Gelendzhik'}},
    ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state

    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}

export default usersReducer;