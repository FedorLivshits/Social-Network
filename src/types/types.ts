export type PostMessagesType = {
    id: number
    message: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}
export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
}
export type MyPostsType = {
    id: string | null
    text: string | null
    date: string | null
    time: string | null
}
export type OwnerPostType = {
    firstName: string
    lastName: string
    picture: string
    email: string
}

export type PostType = {
    id: string
    likes: number
    image: string
    owner: OwnerPostType
    publishDate: string
    text: string,
    liked: boolean
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MyMessagesType = {
    id: number
    message: string
    date: string
    time: string
}