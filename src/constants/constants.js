import { Platform } from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const discountTypes = { percentage: 'Percentage', value: 'Value' };
export const KEYS_TO_COMMERCE_FILTER = ['name'];
export const KEYS_TO_INTERESTS_FILTER = ['name'];
export const REVIEW_VALUES = [1, 2, 3, 4, 5];
