import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";

const isEmpty = require("is-empty");

export const authInitialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

export default function authReducer(state = authInitialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}