import setAuthToken from "../utils/authentication";
import { SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (resData) => (dispatch) => {
    dispatch(loginUser());
};

// Login - get user token
export const loginUser = (resData) => (dispatch) => {
    const { accessToken, EmployeeID, TokenExpiry } = resData;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("EmployeeId", EmployeeID);
    localStorage.setItem("expiry", TokenExpiry); // TO UPDATE

    // Set token to Auth header
    setAuthToken(accessToken);

    // Set current user
    dispatch(setCurrentUser(resData));
};

// Set logged in user
export const setCurrentUser = (data) => {
    console.log(data);
    return {
        type: SET_CURRENT_USER,
        payload: data
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
export const logoutUser = () => (dispatch) => {
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}, false));

    // Remove token from local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("EmployeeId");
    localStorage.removeItem("expiry");

    // Remove auth header for future requests
    setAuthToken(false);
};
