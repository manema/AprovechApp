import React from 'react';
import { string, number, func } from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import styles from './styles';
import { WHITE } from 'constants/style';
const DeleteInterestBtn = ({
  id,
  onChange
}) => (
  <TouchableOpacity style={styles.container} onPress={() => onChange(id)}>
    <View>
      <Icon name="dash" size={30} color={WHITE} />
    </View>
  </TouchableOpacity>
);

DeleteInterestBtn.propTypes = {
  id: number.isRequired,
  onChange: func.isRequired
};

export default DeleteInterestBtn;
