import { UserData } from "../utils/types";

export enum AppActions {
    FETCH_USERS = 'FETCH_USERS',
    ADD_USER = "ADD_USER",
    DELETE_USER = "DELETE_USER",
    EDIT_USER = "EDIT_USER"
}

interface FetchUsersAction {
    type: AppActions.FETCH_USERS;
    payload: UserData[]
}

interface AddUserAction {
    type: AppActions.ADD_USER;
    payload: UserData;
}

interface DeleteUserAction {
    type: AppActions.DELETE_USER;
    payload: string;
}

interface EditUserAction {
    type: AppActions.EDIT_USER;
    payload: UserData;
}

export type AppActionTypes = FetchUsersAction | AddUserAction | DeleteUserAction | EditUserAction;

export interface AppState {
    users: UserData[]
}

export const INITIAL_STATE: AppState = {
    users: []
}
