import { BaseThunkType, InferActionTypes } from "./redux-store";
import { OwnerPostType, PostType } from "../types/types";
import { fetchPosts } from "../api/posts-api";

const SET_POSTS = 'posts/SET_POSTS'
const CHANGE_LIKE = 'posts/CHANGE_LIKE'
const REMOVE_FROM_SAVED = 'posts/REMOVE_FROM_SAVED'
const SET_CURRENT_PAGE = 'posts/SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'posts/SET_IS_FETCHING'
const SET_TOTAL_COUNT = 'posts/SET_TOTAL_COUNT'

let initialState = {
    posts: [] as Array<PostType>,
    currentPage: 0,
    isFetching: false,
    totalCount: 0,
    likedPosts: localStorage.getItem("likedPosts")
        ? JSON.parse(localStorage.getItem("likedPosts") as string)
        : [],
}
export type InitialStateType = typeof initialState

const postsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_POSTS:
            // @ts-ignore
            return { ...state, posts: action.posts }
        case CHANGE_LIKE:
            let likedPostsCopy =  [...state.likedPosts]
            return {
                ...state, posts: state.posts.map((p: PostType) => {
                    // @ts-ignore
                    if (p.id === action.id) {
                        p.liked = !p.liked
                        likedPostsCopy.push(p)
                    }
                    return p
                }),
                likedPosts: [...likedPostsCopy]
            }
        case REMOVE_FROM_SAVED:
            return {
                // @ts-ignore
                ...state, likedPosts: state.likedPosts.filter((p: PostType) => p.id !== action.id)
            }
        case SET_CURRENT_PAGE:
            // @ts-ignore
            return { ...state, currentPage: currentPage + 1 }
        case SET_IS_FETCHING:
            // @ts-ignore
            return { ...state, isFetching: action.isFetching }
        case SET_TOTAL_COUNT:
            // @ts-ignore
            return { ...state, totalCount: action.totalCount }
        default:
            return state 
    }
}
type ActionTypes = InferActionTypes<typeof actions>

type ThunkType = BaseThunkType<ActionTypes>

export const actions = {
    setPosts: (posts: Array<PostType>) => ({ type: SET_POSTS, posts }),
    changeLike: (id: string) => ({ type: CHANGE_LIKE, id }),
    removeFromSaved: (id: string) => ({ type: REMOVE_FROM_SAVED, id }),
    setCurrentPage: () => ({ type: SET_CURRENT_PAGE }),
    setIsFetching: (isFetching: boolean) => ({ type: SET_IS_FETCHING, isFetching }),
    setTotalCount: (totalCount: number) => ({ type: SET_TOTAL_COUNT, totalCount })
}

export const getPosts = (page: number): ThunkType => {
    return async (dispatch) => {
        let data = await fetchPosts(page)
        dispatch(actions.setTotalCount(data.total))
        let posts = data.data.map((p: PostType) => {
            return ({
                id: p.id,
                likes: p.likes,
                image: p.image,
                owner: {
                    firstName: p.owner.firstName,
                    lastName: p.owner.lastName,
                    picture: p.owner.picture,
                    email: p.owner.email
                } as OwnerPostType,
                publishDate: p.publishDate.slice(0, 16).split('T').join(' '),
                text: p.text,
                liked: false
            })
        })
        dispatch(actions.setPosts(posts))
    }
}
export default postsReducer;