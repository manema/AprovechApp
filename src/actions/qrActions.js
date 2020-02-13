import qrService from 'services/qrService';
import {
  CREATE_QR,
  CREATE_QR_ERROR,
  CREATE_QR_SUCCESS,
  GET_QR_BY_ID,
  GET_QR_BY_ID_SUCCESS,
  GET_QR_BY_ID_ERROR,
  GET_LIST_OF_QRS,
  GET_LIST_OF_QRS_SUCCESS,
  GET_LIST_OF_QRS_ERROR,
  REVIEW_QR,
  REVIEW_QR_SUCCESS,
  REVIEW_QR_ERROR
} from './actionTypes';

const createQrAction = () => ({
  type: CREATE_QR
});

const createQrSuccess = qr => ({
  type: CREATE_QR_SUCCESS,
  payload: { qr }
});

const gcreateQrError = error => ({
  type: CREATE_QR_ERROR,
  payload: { error }
});

const getQRAction = () => ({
  type: GET_QR_BY_ID
});

const getQRActionSuccess = qr => ({
  type: GET_QR_BY_ID_SUCCESS,
  payload: { qr }
});

const getQRActionError = error => ({
  type: GET_QR_BY_ID_ERROR,
  payload: { error }
});

const getListOfQrsAction = () => ({
  type: GET_LIST_OF_QRS
});

const getListOfQrsSuccess = qrs => ({
  type: GET_LIST_OF_QRS_SUCCESS,
  payload: { allQRs: qrs }
});

const getListOfQrsError = error => ({
  type: GET_LIST_OF_QRS_ERROR,
  payload: { error }
});

const reviewQrAction = () => ({
  type: REVIEW_QR
});

const reviewQrActionSuccess = qrs => ({
  type: REVIEW_QR_SUCCESS,
  payload: { allQRs: qrs }
});

const reviewQrActionError = error => ({
  type: REVIEW_QR_ERROR,
  payload: { error }
});


export const createQr = (discountId, idCommerce) => async dispatch => {
  try {
    dispatch(createQrAction());
    const { data: { results }} = await qrService.createQr(discountId, idCommerce);
    dispatch(createQrSuccess(results));
  } catch (err) {
    dispatch(createQrError(err));
  }
};

export const getQrById = qrId => async dispatch => {
  try {
    dispatch(getQRAction());
    const { data: { results }} = await qrService.getQr(qrId);
    dispatch(getQRActionSuccess(results));
  } catch (err) {
    dispatch(getQRActionError(err));
  }
};

export const getListOfQrs = () => async dispatch => {
  try {
    dispatch(getListOfQrsAction());
    const { data: { results }} = await qrService.getAllQr();
    dispatch(getListOfQrsSuccess(results));
  } catch (err) {
    dispatch(getListOfQrsError(err));
  }
};

// export const reviewQr = dataToReview => async dispatch => {
//   dataToReview.commerceValued = dataToReview.commerce;
//   delete dataToReview.commerce;
//   try {
//     dispatch(reviewQrAction());
//     const { data: { results }} = await qrService.reviewQr(dataToReview);
//     dispatch(reviewQrActionSuccess(results));
//   } catch (err) {
//     dispatch(reviewQrActionError(err));
//   }
// };