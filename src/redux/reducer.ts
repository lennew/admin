import { AppActions, INITIAL_STATE, AppActionTypes } from "./utils";

export const reducer = (state = INITIAL_STATE, action: AppActionTypes) => {
    switch(action.type) {
        case AppActions.FETCH_USERS:
            return { ...state, users: [ ...action.payload ]}
        case AppActions.ADD_USER:
            return { ...state, users: [ ...state.users, action.payload ]}
        case AppActions.DELETE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.payload)}
        case AppActions.EDIT_USER:
            return { ...state, users: [ ...state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload;
                } else {
                    return user;
                }
            })]}
        default:
            return state;
    }
}