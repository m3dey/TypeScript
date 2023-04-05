import axios, {AxiosResponse} from "axios";
import {IUser} from "../interfaces/user_interface";

type IRes<T> = Promise<AxiosResponse<T>>

export const UserService = {
    getAll: () :Promise<AxiosResponse<IUser[]>> => axios('https://jsonplaceholder.typicode.com/users'),
    getById:(id:number)=>axios('https://jsonplaceholder.typicode.com/users'),
}
