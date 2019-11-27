import React from 'react';
import { array } from 'prop-types';
import { ScrollView, Text } from 'react-native';

import InterestCircle from 'components/interestCircle';
import styles from './styles';

const InterestBar = ({
  interests
}) => (
  <ScrollView horizontal style={styles.container} centerContent>
    {
      interests && interests.map(({ name, id }) => 
      <InterestCircle name={name} id={id} key={id} /> 
    )}
  </ScrollView>
);

InterestBar.propTypes = {
  interests: array.isRequired
};

export default InterestBar;