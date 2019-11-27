import React from 'react';
import { string, number } from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const InterestCircle = ({
  id,
  name
}) => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
);

InterestCircle.propTypes = {
  id: number.isRequired,
  name: string.isRequired
};

export default InterestCircle;
