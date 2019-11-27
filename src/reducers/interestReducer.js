import createReducer from 'reducers/createReducer';
import { GET_INTEREST, GET_INTEREST_SUCCESS, GET_INTEREST_ERROR } from 'actions/actionTypes';

export const initialState = {
  interests: null,
  error: null,
  loading: null
};

export default createReducer(initialState, {
  [GET_INTEREST]: state => {
    state.error = null;
    state.loading = true;
  },
  [GET_INTEREST_SUCCESS]: (state, { interests }) => {
    state.interests = interests;
    state.error = null;
    state.loading = false;
  },
  [GET_INTEREST_ERROR]: (state, { error }) => {
    state.error = error;
    state.loading = false;
  },
});
