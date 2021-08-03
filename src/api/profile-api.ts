import { PhotosType, ProfileType } from "../types/types";
import {APIResponseType, instance, ResponseCode} from './api'

type SavePhotoResponseType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return (
            instance.get<ProfileType>(`profile/` + userId)
                .then(res => res.data)
        )
    },
    getStatus(userId: number) {
        return (
            instance.get<string>(`profile/status/` + userId)
                .then(res => res.data)
        )
    },
    updateStatus(status: string) {
        return (
            instance.put<APIResponseType>(`profile/status/`, { status: status })
                .then(res => res.data)
        )
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append("image", photo)
        return (
            instance.put<APIResponseType<SavePhotoResponseType>>('profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }))

    },
    saveProfile(profileInfo: any) {
        return (
            instance.put<APIResponseType>(`profile`, profileInfo)
                .then(res => res.data)
        )
    }
}

