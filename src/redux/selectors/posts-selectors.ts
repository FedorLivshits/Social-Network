import { AppStateType } from "../redux-store";

export const getPostsData = (state: AppStateType) => {
    return state.postsPage.posts
}
export const getCurrentPage = (state: AppStateType) => {
    return state.postsPage.currentPage
}
export const getPostsTotalCount = (state: AppStateType) => {
    return state.postsPage.totalCount
}
export const getLikedPosts = (state: AppStateType) => {
    return state.postsPage.likedPosts
}
