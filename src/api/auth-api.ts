import {instance, APIResponseType} from "./api";

type AuthMeResponseType = {
    data: { id: number, login: string, email: string }
}
type LoginResponseType = {
    data: { userId: number }
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<AuthMeResponseType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<APIResponseType<LoginResponseType>>(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}