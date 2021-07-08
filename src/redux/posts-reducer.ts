import {BaseThunkType, InferActionTypes} from "./redux-store";
import {fetchPosts} from "../api/posts-api";
import {PostType, UsersType} from "../types/types";

const SET_POSTS = 'posts/SET_POSTS'
const CHANGE_LIKE = 'posts/CHANGE_LIKE'
const REMOVE_FROM_SAVED = 'posts/REMOVE_FROM_SAVED'

let initialState = {
    posts: [] as Array<PostType>,
    likedPosts: localStorage.getItem("likedPosts")
        ? JSON.parse(localStorage.getItem("likedPosts") as string)
        : [],
}
export type InitialStateType = typeof initialState

const postsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_POSTS:
            // @ts-ignore
            return {...state, posts: action.posts}
        case CHANGE_LIKE:
            return {
                ...state, posts: state.posts.map((p: PostType) => {
                    // @ts-ignore
                    if (p.id === action.id) {
                        p.liked = !p.liked
                        state.likedPosts.push(p)
                    }
                    return p
                })
            }
        case REMOVE_FROM_SAVED:
            return {
                // @ts-ignore
                ...state, likedPosts: state.likedPosts.filter((p: PostType) => p.id !== action.id)
            }
        default:
            return state
    }
}
type ActionTypes = InferActionTypes<typeof actions>

type ThunkType = BaseThunkType<ActionTypes>

export const actions = {
    setPosts: (posts: Array<PostType>) => ({type: SET_POSTS, posts}),
    changeLike: (id: string) => ({type: CHANGE_LIKE, id}),
    removeFromSaved: (id: string) => ({type: REMOVE_FROM_SAVED, id})
}

export const getPosts = (): ThunkType => {
    return async (dispatch) => {
        let data = await fetchPosts()
        let posts: Array<PostType> = data.data.map((p: PostType) => {
            return ({
                id: p.id,
                likes: p.likes,
                image: p.image,
                owner: {
                    firstName: p.owner.firstName,
                    lastName: p.owner.lastName,
                    picture: p.owner.picture,
                    email: p.owner.email
                },
                publishDate: p.publishDate.slice(0, 16).split('T').join(' '),
                text: p.text,
                liked: false
            })
        })
        let filteredPosts = posts.filter(p => p.image !== undefined)
        dispatch(actions.setPosts(filteredPosts))
    }
}

export default postsReducer;