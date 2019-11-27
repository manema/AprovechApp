import React, { useState } from 'react';
import { node, number } from 'prop-types';
import { TouchableOpacity, Text, LayoutAnimation } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { enableAndroidAnimation } from 'utils/helpers';
import config from './config';
import styles from './styles';

// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
enableAndroidAnimation();

const Swipe = ({
  children,
  style
}) => {
  const [expanded, setExpanded] = useState(false);

  const onSwipeUp = gestureState => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(true);
  }

  const onSwipeDown = gestureState => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setExpanded(false);
  }

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <GestureRecognizer
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}
      config={config}
      style={{ backgroundColor: 'red', height: expanded ? '100%' : 120, ...style }}
    >
      {children}
    </ GestureRecognizer>
  );
}

Swipe.propTypes = {
  children: node
};

export default Swipe;
