import React from 'react';
import { bool, object, string } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const Input = ({
  input: { onChange, ...restInput },
  password = false,
  label,
  meta: { touched, error },
  addedStyle,
  editable
}) => (
  <View style={styles.container}>
    <View>
      <TextInput
        style={[styles.input, addedStyle]}
        onChangeText={onChange}
        secureTextEntry={password}
        placeholder={label}
        editable={editable}
        {...restInput}
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  </View>
);

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  addedStyle: object,
  editable: bool
};

Input.defaultProps = {
  addedStyle: {}
};

export default Input;
