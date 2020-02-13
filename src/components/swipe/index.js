import React, { useState, useEffect, useRef } from 'react';
import { func, node, number, bool } from 'prop-types';
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
  handleSwipeUp,
  triggerSwipeUp,
  handleSwipeDown
}) => {
  const [expanded, setExpanded] = useState(false);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (!firstUpdate.current) onSwipeUp();
    firstUpdate.current = false;
  }, [triggerSwipeUp]);

  const onSwipeUp = gestureState => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(true);
    handleSwipeUp(showSearchInput => !showSearchInput);
  }

  const onSwipeDown = gestureState => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    handleSwipeDown(null);
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
  handleSwipeUp: func,
  triggerSwipeUp: bool,
  handleSwipeDown: func
};

export default Swipe;
