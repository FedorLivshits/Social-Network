import {BaseThunkType, InferActionTypes} from "./redux-store";
import {fetchPosts} from "../api/posts-api";
import {PostType, UsersType} from "../types/types";

const SET_POSTS = 'posts/SET_POSTS'
const CHANGE_LIKE = 'posts/CHANGE_LIKE'

let initialState = {
    posts: [] as Array<PostType>,
    likedPosts: []  as Array<PostType>,
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
        default:
            return state
    }
}
type ActionTypes = InferActionTypes<typeof actions>

type ThunkType = BaseThunkType<ActionTypes>

export const actions = {
    setPosts: (posts: Array<PostType>) => ({type: SET_POSTS, posts}),
    changeLike: (id: string) => ({type: CHANGE_LIKE, id})
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
                    picture: p.owner.picture
                },
                publishDate: p.publishDate.slice(0, 16).split('T').join(' '),
                text: p.text,
                liked: false
            })
        })
        dispatch(actions.setPosts(posts))
    }
}

export default postsReducer;