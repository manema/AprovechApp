import createReducer from 'reducers/createReducer';
import { GET_COMMERCES, GET_COMMERCES_SUCCESS, GET_COMMERCES_ERROR } from 'actions/actionTypes';

export const initialState = {
  commerces: null,
  error: null,
  loading: null
};

export default createReducer(initialState, {
  [GET_COMMERCES]: state => {
    state.error = null;
    state.loading = true;
  },
  [GET_COMMERCES_SUCCESS]: (state, { commerces }) => {
    state.commerces = commerces;
    state.error = null;
    state.loading = false;
  },
  [GET_COMMERCES_ERROR]: (state, { error }) => {
    state.error = error;
    state.loading = false;
  },
});
