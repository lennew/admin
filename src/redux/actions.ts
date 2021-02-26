import { NewUserData, UserData } from '../utils/types';
import { AppActions, AppActionTypes } from './utils';
import uuid from 'uuid-random';

export const fetchUsersAction = (users: UserData[]): AppActionTypes => ({
    type: AppActions.FETCH_USERS,
    payload: users
})

export const addUserAction = (user: NewUserData): AppActionTypes => ({
    type: AppActions.ADD_USER,
    payload: {
        ...user,
        address: { city: "" },
        username: "",
        id: uuid()
    }
})

export const deleteUserAction = (id: string): AppActionTypes => ({
    type: AppActions.DELETE_USER,
    payload: id
})

export const editUserAction = (user: UserData): AppActionTypes => ({
    type: AppActions.EDIT_USER,
    payload: user
})

