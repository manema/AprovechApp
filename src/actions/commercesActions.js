import commercesService from 'services/commercesService';
import {  GET_COMMERCES, GET_COMMERCES_SUCCESS, GET_COMMERCES_ERROR,
GET_COMMERCES_BY_INTEREST, GET_COMMERCES_BY_INTEREST_SUCCESS, GET_COMMERCES_BY_INTEREST_ERROR } from './actionTypes';

const getCommercesAction = () => ({
  type: GET_COMMERCES
});

const getCommercesSuccess = commerces => ({
  type: GET_COMMERCES_SUCCESS,
  payload: { commerces }
});

const getCommercesError = error => ({
  type: GET_COMMERCES_ERROR,
  payload: { error }
});

const getCommercesByInterestAction = () => ({
  type: GET_COMMERCES_BY_INTEREST
});

const getCommercesByInterestSuccess = commerces => ({
  type: GET_COMMERCES_BY_INTEREST_SUCCESS,
  payload: { commerces }
});

const getCommercesByInterestError = error => ({
  type: GET_COMMERCES_BY_INTEREST_ERROR,
  payload: { error }
});

export const getCommerces = () => async dispatch => {
  try {
    dispatch(getCommercesAction());
    const { data: { results }} = await commercesService.getCommerces();
    dispatch(getCommercesSuccess(results));
  } catch (err) {
    dispatch(getCommercesError(err));
  }
};

export const getCommercesByInterest = id => async dispatch => {
  try {
    dispatch(getCommercesByInterestAction());
    const { data: { results }} = await commercesService.getCommercesByInterest(id);
    dispatch(getCommercesByInterestSuccess(results));
  } catch (err) {
    dispatch(getCommercesByInterestError(err));
  }
};