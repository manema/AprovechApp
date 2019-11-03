import React from 'react';
import { bool, object, string } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const Input = ({
  input: { onChange, ...restInput },
  password = false,
  label,
  meta: { touched, error },
}) => (
  <View style={styles.container}>
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        secureTextEntry={password}
        placeholder={label}
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
};

export default Input;