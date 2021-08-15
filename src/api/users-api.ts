import { instance, APIResponseType } from "./api";
import { UsersType } from "../types/types";


type GetUsersItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: null | string
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get<GetUsersItemsType>(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<APIResponseType>(`follow/${userId}`)
            .then(res => res.data) as Promise<APIResponseType>
    },
}