import createReducer from 'reducers/createReducer';
import { GET_COMMERCES, GET_COMMERCES_SUCCESS, GET_COMMERCES_ERROR,
  GET_COMMERCES_BY_INTEREST, GET_COMMERCES_BY_INTEREST_SUCCESS, GET_COMMERCES_BY_INTEREST_ERROR } from 'actions/actionTypes';

export const initialState = {
  commerces: null,
  allDiscounts: [],
  error: null,
  loading: null
};

const handleGetCommerces = (state, { commerces }) => {
  let allDiscounts = [];

  commerces.length && commerces.forEach(({ discounts, address }) => {
    discounts.length && discounts.forEach( discount => {
      discount.address = address;
      allDiscounts.push(discount);
    })
  });

  state.commerces = commerces;
  state.error = null;
  state.loading = false;
  state.allDiscounts = allDiscounts;
}

export default createReducer(initialState, {
  [GET_COMMERCES]: state => {
    state.error = null;
    state.loading = true;
  },
  [GET_COMMERCES_SUCCESS]: handleGetCommerces,
  [GET_COMMERCES_ERROR]: (state, { error }) => {
    state.error = error;
    state.loading = false;
  },
  [GET_COMMERCES_BY_INTEREST]: state => {
    state.error = null;
    state.loading = true;
  },
  [GET_COMMERCES_BY_INTEREST_SUCCESS]: handleGetCommerces,
  [GET_COMMERCES_BY_INTEREST_ERROR]: (state, { error }) => {
    state.error = error;
    state.loading = false;
  },
});
