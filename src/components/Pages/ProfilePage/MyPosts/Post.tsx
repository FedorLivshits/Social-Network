import React, {useEffect} from 'react'
import Icon from '@iconify/react'
import bxTrash from '@iconify-icons/bx/bx-trash'
import {MyPostsType, ProfileType} from '../../../../types/types'
import {useDispatch} from 'react-redux'

type PropsType = {
    myPosts: Array<MyPostsType>
    profile: ProfileType | null
    deletePost: (id: any) => void
}

export const Post: React.FC<PropsType> = props => {
    useEffect(() => {
        localStorage.setItem('myPosts', JSON.stringify(props.myPosts))
    }, [props.myPosts])

    const dispatch = useDispatch()

    const onPostDelete = (id: string) => {
        dispatch(props.deletePost(id))
    }

    let myPostsList = props.myPosts.map(p =>
        <div className="posts__item  border rounded" id={p.id!} key={p.id}>
            <div className="posts__item-head">
                <img className="posts__item-img" src={props.profile!.photos.small} alt=""/>
                <h3 className="posts__item-user">
                    {props.profile!.fullName}
                </h3>
                <span className='posts__item-date'>
                    {p.date}, {p.time}
                </span>
            </div>
            <div className="posts__item-content">
                <div className="posts__item-text">
                    <p>
                        {p.text}
                    </p>
                </div>
                <button className="btn btn-danger mobile-btn" onClick={() => onPostDelete(p.id!)}>
                    <Icon icon={bxTrash}/>
                </button>
            </div>
        </div>)

    return (
        <>
            {props.myPosts.length
                ?
                <>
                    {myPostsList}
                </>
                :
                <>
                    <h3 className="posts__title">Add some posts</h3>
                </>
            }

        </>
    )
}
