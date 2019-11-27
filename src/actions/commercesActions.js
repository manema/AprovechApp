import commercesService from 'services/commercesService';
import {  GET_COMMERCES, GET_COMMERCES_SUCCESS, GET_COMMERCES_ERROR } from './actionTypes';

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

export const getCommerces = () => async dispatch => {
  try {
    dispatch(getCommercesAction());
    const { data: { results }} = await commercesService.getCommerces();
    console.log("results", results);
    dispatch(getCommercesSuccess(results));
  } catch (err) {
    dispatch(getCommercesError(err));
  }
};