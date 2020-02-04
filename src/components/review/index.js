import React, { useState } from 'react';
import { string, number, func } from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { YELLOW_2 } from 'constants/style';
import { REVIEW_VALUES } from 'constants/constants';
import styles from './styles';

const Review = ({
  text,
  currentScore,
  onChange
}) =>
    <View style={styles.container}>
      <View style={styles.starsContainer}>
        {
          REVIEW_VALUES.map(value => 
            <Icon 
              style={{ marginHorizontal: 3 }}
              key={value} 
              name={currentScore >= value ? "star" : "star-outlined"}
              size={35} color={YELLOW_2}
              onPress={() => onChange(value)}
            />
        )}
      </View>
      {text && <Text style={styles.text}>{text}</Text>}
    </View>

Review.propTypes = {
  currentScore: number.isRequired,
  text: string.isRequired,
  onChange: func.isRequired
};

Review.defaultProps = {
  currentScore: 1,
  text: ''
};

export default Review;
