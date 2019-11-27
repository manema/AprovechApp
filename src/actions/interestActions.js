import interestService from 'services/interestService';
import { GET_INTEREST, GET_INTEREST_SUCCESS, GET_INTEREST_ERROR } from './actionTypes';

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

export const getInterests = () => async dispatch => {
  try {
    dispatch(getInterestAction());
    const { data: { results }} = await interestService.getInterests();
    dispatch(getInterestSuccess(results));
  } catch (err) {
    dispatch(getInterestError(err));
  }
};