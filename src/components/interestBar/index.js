import React from 'react';
import { array, func } from 'prop-types';
import { ScrollView, Text } from 'react-native';

import InterestCircle from 'components/interestCircle';
import styles from './styles';

const InterestBar = ({
  interests,
  onChange
}) => (
  <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator={false} centerContent contentContainerStyle={[styles.content, {flexGrow: 1}]}>
    {
      interests && interests.map(({ name, id }) => 
      <InterestCircle name={name} id={id} key={id} onChange={onChange} /> 
    )}
  </ScrollView>
);

InterestBar.propTypes = {
  interests: array.isRequired,
  onChange: func.isRequired
};

export default InterestBar;