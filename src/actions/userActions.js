// import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-native-session';

import userService from 'services/userService';

export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_ERROR: 'LOGOUT_ERROR',
  GET_ACCOUNT_DATA: 'GET_ACCOUNT_DATA',
  GET_ACCOUNT_DATA_SUCCESS: 'GET_ACCOUNT_DATA_SUCCESS',
  GET_ACCOUNT_DATA_ERROR: 'GET_ACCOUNT_DATA_ERROR',
  UPDATE_ACCOUNT_DATA: 'UPDATE_ACCOUNT_DATA',
  UPDATE_ACCOUNT_DATA_SUCCESS: 'UPDATE_ACCOUNT_DATA_SUCCESS',
  UPDATE_ACCOUNT_DATA_ERROR: 'UPDATE_ACCOUNT_DATA_ERROR'
};

const loginSuccess = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

const loginError = error => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});

const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

const logoutRequest = () => ({
  type: actionTypes.LOGOUT_REQUEST,
});

const logoutError = error => ({
  type: actionTypes.LOGOUT_ERROR,
  error,
});

const signUpSuccess = () => ({
  type: actionTypes.SIGN_UP_SUCCESS,
});

const signUpRequest = () => ({
  type: actionTypes.SIGN_UP_REQUEST,
});

const signUpError = error => ({
  type: actionTypes.SIGN_UP_ERROR,
  error,
});

const getAccountDataRequest = () => ({
  type: actionTypes.GET_ACCOUNT_DATA,
});

const getAccountDataSuccess = () => ({
  type: actionTypes.GET_ACCOUNT_DATA_SUCCESS,
});

const getAccountDataError = error => ({
  type: actionTypes.GET_ACCOUNT_DATA_ERROR,
  error,
});

const updateAccountDataRequest = () => ({
  type: actionTypes.UPDATE_ACCOUNT_DATA,
});

const updateAccountDataSuccess = () => ({
  type: actionTypes.UPDATE_ACCOUNT_DATA_SUCCESS,
});

const updateAccountDataError = error => ({
  type: actionTypes.UPDATE_ACCOUNT_DATA_ERROR,
  error,
});

export const login = user => async dispatch => {
  try {
    dispatch(loginRequest());
    const { data: { results }} = await userService.login(user);
    await sessionService.saveUser(results);
    dispatch(loginSuccess());
  } catch (err) {
    dispatch(loginError(err));
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch(logoutRequest());
    await userService.logout();
    sessionService.deleteSession();
    sessionService.deleteUser();
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutError(err));
    throw err.data.error;
  }
};

export const signUp = user => async dispatch => {
  try {
    dispatch(signUpRequest());
    const session = await userService.signUp(user);
    sessionService.saveUser(session);
    dispatch(signUpSuccess());
  } catch (err) {
    dispatch(signUpError(err));
  }
};

export const getAccountData = () => async dispatch => {
  try {
    dispatch(getAccountDataRequest());
    const { data: { results }} = await userService.getAccountData();
    sessionService.saveUser(results);
    dispatch(getAccountDataSuccess());
  } catch (err) {
    dispatch(getAccountDataError(err));
  }
}

export const updateAccountData = newAccountData => async dispatch => {
  try {
    dispatch(updateAccountDataRequest());
    const { data: { results }} = await userService.updateAccountData(newAccountData);
    sessionService.saveUser(results);
    dispatch(updateAccountDataSuccess());
  } catch (err) {
    dispatch(updateAccountDataError(err));
  }
}
