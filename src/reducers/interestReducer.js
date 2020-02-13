import createReducer from 'reducers/createReducer';
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
} from 'actions/actionTypes';

export const initialState = {
  interests: null,
  userInterests: [],
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
  [GET_USER_INTEREST]: state => {
    state.error = null;
    state.loading = true;
  },
  [GET_USER_INTEREST_SUCCESS]: (state, { interests }) => {
    state.userInterests = interests;
    state.error = null;
    state.loading = false;
  },
  [GET_USER_INTEREST_ERROR]: (state, { error }) => {
    state.error = error;
    state.loading = false;
  }
});
