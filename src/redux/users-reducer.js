const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
// import profile_photo1 from '../images/profile-photo.svg'
// import profile_photo2 from '../images/profile-images/man-user-svgrepo-com.svg'
// import profile_photo3 from '../images/profile-images/spy-svgrepo-com.svg'
// import profile_photo4 from '../images/profile-images/man-user-svgrepo-com (1).svg'
// import profile_photo5 from '../images/profile-images/woman-svgrepo-com.svg'
// import profile_photo6 from '../images/profile-images/woman-user-svgrepo-com.svg'
// import profile_photo7 from '../images/profile-images/woman-user-svgrepo-com (1).svg'

let initialState = {
    users: [
        {id: '1', photo: 'https://www.svgrepo.com/show/275245/man-profile.svg',followed: false, name: 'Alexander Sarygin', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '2',photo: 'https://www.svgrepo.com/show/275245/man-profile.svg', followed: false, name: 'Sergey Solod', location: {country: 'Russia', city: 'Moscow'}},
        {id: '3',photo: 'https://www.svgrepo.com/show/275245/man-profile.svg',followed: false, name: 'Vlad Sosaysky', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '4', photo: 'https://www.svgrepo.com/show/275245/man-profile.svg',followed: true, name: 'Artem Kirpu', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '5', photo: 'https://www.svgrepo.com/show/275245/man-profile.svg',followed: false, name: 'Sam kopylov', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '6', photo: 'https://www.svgrepo.com/show/275245/man-profile.svg',followed: false, name: 'Pavel Ostapchuk', location: {country: 'Russia', city: 'St-Petersburg'}},
        {id: '7', photo: 'https://www.svgrepo.com/show/275245/man-profile.svg',followed: false, name: 'Misha Vlaskin', location: {country: 'Litva', city: 'Vilnus'}},
        {id: '8',photo: 'https://www.svgrepo.com/show/275253/woman-avatar.svg',followed: true, name: 'Alisa Konovalova', location: {country: 'Russia', city: 'Gelendzhik'}},
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