import React from 'react';
import { string, number, func } from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const InterestCircle = ({
  id,
  name,
  onChange
}) => (
  <TouchableOpacity style={styles.container} onPress={() => onChange(id)}>
    <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
);

InterestCircle.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  onChange: func.isRequired
};

export default InterestCircle;
