import createReducer from 'reducers/createReducer';
import * as types from 'actions/actionTypes';

export const initialState = {
  place: {
    name: '',
    duration: null,
    description: '',
    category: {},
  },
  places: [],
};

const handleFetchPlaceSuccess = (state, { place }) => {
  state.place = place;
};

const handleFetchPlacesSuccess = (state, { places }) => {
  state.places = places;
};

export default createReducer(initialState, {
  [types.FETCH_PLACE_SUCCESS]: handleFetchPlaceSuccess,
  [types.FETCH_PLACES_SUCCESS]: handleFetchPlacesSuccess,
});
