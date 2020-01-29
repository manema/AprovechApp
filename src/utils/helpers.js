import { isAndroid, discountTypes } from 'constants/constants';
import { UIManager } from 'react-native';

export const enableAndroidAnimation = () => {
  console.log(isAndroid);
  if (
    isAndroid &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const auxFilter = (searchTerm, listToFilter) => {
  let expresion = new RegExp(`${searchTerm}.*`, "i");
  let filteredResults = listToFilter.filter(({ name }) => expresion.test(name));
  return filteredResults;
}

export const getDiscountValue = (discountType, discountValue) => `${discountType === discountTypes.value ? `$${discountValue}` : `${discountValue}%`}`;
