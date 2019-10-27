import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_login = "http://127.0.0.1:8000/rest-auth/login";
const API_signup = "http://127.0.0.1:8000/rest-auth/signup";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

// logout function clears localStorage and then procedes with the logout process.
export const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("expirationDate");
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

// This method will check whether the token has expired or not.
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

// Logs the user into the API_login by posting the username and password in an object.
// We then get a response from the .then and generate a key from the REST Framework to assign to the user.
// Then we store this token (that expires) in the local storage of the user's browser during the user's session.
export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios
            .post(API_login
            , {
                username: username,
                password: password
            })
            .then(response => {
                const token = response.data.key; // we store the generated login key as a token
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // The token will expire after a hour has passed.
                localStorage.setItem("token", token);
                localStorage.setItem("expirationDate", expirationDate); // adding the data to the localStorage of the user because the data persists within the user's session.
                dispatch(authSuccess(token)); //Once we know that a proper session has started, we dispatch authSuccess with the token.
                dispatch(checkAuthTimeout(3600));
            })
            .catch(error => {
                dispatch(AUTH_FAIL(error));
            });
    };
};

export const authSignup = (email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios
            .post(API_signup
                , {
                    username: email.split('@')[0],
                    email: email,
                    password1: password1,
                    password2: password2,
                })
            .then(response => {
                const token = response.data.key; // we store the generated login key as a token
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // The token will expire after a hour has passed.
                localStorage.setItem("token", token);
                localStorage.setItem("expirationDate", expirationDate); // adding the data to the localStorage of the user because the data persists within the user's session.
                dispatch(authSuccess(token)); //Once we know that a proper session has started, we dispatch authSuccess with the token.
                dispatch(checkAuthTimeout(3600));
            })
            .catch(error => {
                dispatch(AUTH_FAIL(error));
            });
    };
};

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};



