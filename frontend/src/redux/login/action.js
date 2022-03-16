import { loginActionConstants } from "./actionTypes";

export const loginInitiate = (data) => ({
    type: loginActionConstants.LOGIN_INITIATE,
    payload: data
})

export const loginSuccess = (data) => ({
    type: loginActionConstants.LOGIN_SUCCESS,
    payload: data
})

export const emailError = (data) => ({
    type: loginActionConstants.EMAIL_ERROR,
    payload: data
})

export const passwordError = (data) => ({
    type: loginActionConstants.PASSWORD_ERROR,
    payload: data
})