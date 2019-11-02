import React from 'react';
import { object, string, bool } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({
  addedStyle,
  text,
  onPress,
  secondary
}) => (
    <TouchableOpacity style={[styles.button, secondary && styles.btnSecondary, addedStyle]} onPress={onPress}>
      {text && <Text style={[styles.text, secondary && styles.textSecondary]}>{text}</Text>}
    </ TouchableOpacity>
);

Button.propTypes = {
  text: string,
  addedStyle: object,
  secondary: bool
};

Button.defaultProps = {
  addedStyle: {},
  secondary: false
};

export default Button;