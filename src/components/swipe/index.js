import React, { useState } from 'react';
import { func, node, number } from 'prop-types';
import { TouchableOpacity, Text, LayoutAnimation } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { enableAndroidAnimation } from 'utils/helpers';
import config from './config';
import styles from './styles';

// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
enableAndroidAnimation();

const Swipe = ({
  children,
  style,
  handleSwipeUp
}) => {
  const [expanded, setExpanded] = useState(false);

  const onSwipeUp = gestureState => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(true);
    handleSwipeUp(showSearchInput => !showSearchInput);
  }

  const onSwipeDown = gestureState => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setExpanded(false);
    handleSwipeUp(showSearchInput => !showSearchInput);
  }

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <GestureRecognizer
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}
      config={config}
      style={{ backgroundColor: 'white', height: expanded ? '100%' : 90, ...style }}
    >
      {children}
    </ GestureRecognizer>
  );
}

Swipe.propTypes = {
  children: node,
  handleSwipeUp: func
};

export default Swipe;
