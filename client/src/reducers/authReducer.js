import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";

export const authInitialState = {
    authenticated: false,
    EmployeeId: "",
    role: [],
    loading: false
};

export default function authReducer(state = authInitialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                authenticated: action.payload.authenticated,
                EmployeeId: action.payload.EmployeeId,
                role: action.payload.role
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
