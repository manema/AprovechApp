import discountService from 'services/discountService';
import { GET_DISCOUNT_SUCCESS, GET_DISCOUNT, GET_DISCOUNT_ERROR } from './actionTypes';

const getDiscountsAction = () => ({
  type: GET_DISCOUNT
});

const getDiscountsSuccess = discounts => ({
  type: GET_DISCOUNT_SUCCESS,
  payload: { discounts }
});

const getDiscountsError = error => ({
  type: GET_DISCOUNT_ERROR,
  payload: { error }
});

export const getDiscounts = () => async dispatch => {
  try {
    dispatch(getDiscountsAction());
    const { data: { results }} = await discountService.getDiscount();
    dispatch(getDiscountsSuccess(results));
  } catch (err) {
    dispatch(getDiscountsError(err));
  }
};
