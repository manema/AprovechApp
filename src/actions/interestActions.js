import interestService from 'services/interestService';
import { 
  GET_INTEREST,
  GET_INTEREST_SUCCESS,
  GET_INTEREST_ERROR,
  GET_USER_INTEREST,
  GET_USER_INTEREST_SUCCESS,
  GET_USER_INTEREST_ERROR,
  ADD_USER_INTEREST,
  ADD_USER_INTEREST_SUCCESS,
  ADD_USER_INTEREST_ERROR
} from './actionTypes';

const getInterestAction = () => ({
  type: GET_INTEREST
});

const getInterestSuccess = interests => ({
  type: GET_INTEREST_SUCCESS,
  payload: { interests }
});

const getInterestError = error => ({
  type: GET_INTEREST_ERROR,
  payload: { error }
});

const getUserInterestAction = () => ({
  type: GET_USER_INTEREST
});

const getUserInterestSuccess = interests => ({
  type: GET_USER_INTEREST_SUCCESS,
  payload: { interests }
});

const getUserInterestError = error => ({
  type: GET_USER_INTEREST_ERROR,
  payload: { error }
});

const addUserInterestAction = () => ({
  type: ADD_USER_INTEREST
});

const addUserInterestSuccess = interests => ({
  type: ADD_USER_INTEREST_SUCCESS,
  payload: { interests }
});

const addUserInterestError = error => ({
  type: ADD_USER_INTEREST_ERROR,
  payload: { error }
});

export const getInterests = () => async dispatch => {
  try {
    dispatch(getInterestAction());
    const { data: { results }} = await interestService.getInterests();
    dispatch(getInterestSuccess(results));
  } catch (err) {
    dispatch(getInterestError(err));
  }
};

export const getUserInterests = () => async dispatch => {
  try {
    dispatch(getUserInterestAction());
    const { data: { results }} = await interestService.getUserInterests();
    dispatch(getUserInterestSuccess(results));
  } catch (err) {
    dispatch(getUserInterestError(err));
  }
};

export const addUserInterest = interestId => async dispatch => {
  try {
    dispatch(addUserInterestAction());
    await interestService.addInterestToUser({ interestsId: interestId });
    dispatch(getUserInterests());
    // dispatch(addUserInterestSuccess(results));
  } catch (err) {
    dispatch(addUserInterestError(err));
  }
};

export const deleteUserInterest = interestId => async dispatch => {
  try {
    // dispatch(addUserInterestAction());
    await interestService.deleteInterestToUser({ interestsId: interestId });
    dispatch(getUserInterests());
    // dispatch(addUserInterestSuccess(results));
  } catch (err) {
    // dispatch(addUserInterestError(err));
  }
};
