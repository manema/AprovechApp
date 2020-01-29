import { Platform } from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const discountTypes = { percentage: 'Percentage', value: 'Value' };
export const KEYS_TO_COMMERCE_FILTER = ['name'];
