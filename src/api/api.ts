import axios from "axios";
import {PhotosType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "6bc1146e-24f2-4be4-a0fc-4f85d3b15120"},

})

export enum ResponseCode {
    Success = 0,
    Error = 1
}
export type APIResponseType<D = {}> = {
    data: D
    resultCode: ResponseCode
    messages: Array<string>
}

