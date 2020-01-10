import createReducer from 'reducers/createReducer';
import { GET_DISCOUNT, GET_DISCOUNT_SUCCESS, GET_DISCOUNT_ERROR } from 'actions/actionTypes';

export const initialState = {
  discounts: null,
  error: null,
  loading: null
};

export default createReducer(initialState, {
  [GET_DISCOUNT]: state => {
    state.error = null;
    state.loading = true;
  },
  [GET_DISCOUNT_SUCCESS]: (state, { discounts }) => {
    state.discounts = discounts;
    state.error = null;
    state.loading = false;
  },
  [GET_DISCOUNT_ERROR]: (state, { error }) => {
    state.error = error;
    state.loading = false;
  },
});
