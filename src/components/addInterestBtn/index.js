import React from 'react';
import { string, number, func } from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { WHITE } from 'constants/style';

const AddInterestBtn = ({
  onChange
}) => (
  <TouchableOpacity style={styles.container} onPress={onChange}>
    <View>
      <Icon name="plus" size={60} color={WHITE} />
    </View>
  </TouchableOpacity>
);

AddInterestBtn.propTypes = {
  id: number.isRequired,
  onChange: func.isRequired
};

export default AddInterestBtn;
