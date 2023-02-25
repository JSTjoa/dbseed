import setAuthToken from "../utils/authentication";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, USER_LOADING } from "./types";

// Login - get user token
export const loginUser = (resData) => (dispatch) => {
    const { token } = resData;
    localStorage.setItem("jwtToken", token);

    // Set token to Auth header
    setAuthToken(token);

    // Decode token to get user data
    const decoded = jwt_decode(token);

    // Set current user
    dispatch(setCurrentUser(decoded));
};

// Set logged in user
export const setCurrentUser = (decodedToken) => {
    return {
        type: SET_CURRENT_USER,
        payload: decodedToken
    };
};

// User loading
export const setUserLoading = (status) => {
    return {
        type: USER_LOADING,
        payload: status
    };
};

// Log user out
export const logoutUser = (history) => (dispatch) => {
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}, false));

    // Remove token from local storage
    localStorage.removeItem("jwtToken");

    // Remove auth header for future requests
    setAuthToken(false);
};
