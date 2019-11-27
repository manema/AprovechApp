import { isAndroid } from 'constants/constants';
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
