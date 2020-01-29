import createReducer from 'reducers/createReducer';
import {
  CREATE_QR,
  CREATE_QR_SUCCESS,
  CREATE_QR_ERROR,
  GET_QR_BY_ID,
  GET_QR_BY_ID_SUCCESS,
  GET_QR_BY_ID_ERROR,
  GET_LIST_OF_QRS,
  GET_LIST_OF_QRS_SUCCESS,
  GET_LIST_OF_QRS_ERROR
} from 'actions/actionTypes';

export const initialState = {
  qr: null,
  allQrs: [],
  error: null,
  loading: null
};

export default createReducer(initialState, {
  [CREATE_QR]: state => {
    state.error = null;
    state.loading = true;
  },
  [CREATE_QR_SUCCESS]: (state, { qr }) => {
    state.qr = qr;
    state.error = null;
    state.loading = false;
  },
  [CREATE_QR_ERROR]: (state, { error }) => {
    state.error = error;
    state.loading = false;
  },
  [GET_QR_BY_ID]: state => {
    state.error = null;
    state.loading = true;
  },
  [GET_QR_BY_ID_SUCCESS]: (state, { qr }) => {
    state.qr = qr;
    state.error = null;
    state.loading = false;
  },
  [GET_QR_BY_ID_ERROR]: (state, { error }) => {
    state.error = error;
    state.loading = false;
  },
  [GET_LIST_OF_QRS]: state => {
    state.error = null;
    state.loading = true;
  },
  [GET_LIST_OF_QRS_SUCCESS]: (state, { allQRs }) => {
    state.allQrs = allQRs;
    state.error = null;
    state.loading = false;
  },
  [GET_LIST_OF_QRS_ERROR]: (state, { error }) => {
    state.error = error;
    state.loading = false;
  },
});
