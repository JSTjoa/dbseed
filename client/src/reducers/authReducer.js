import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";

export const authInitialState = {
    authenticated: false,
    EmployeeId: "",
    FirstName: "",
    LastName: "",

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
                FirstName: action.payload.FirstName,
                LastName: action.payload.LastName,
                role: action.payload.Role
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
