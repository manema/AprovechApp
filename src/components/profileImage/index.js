import React from 'react';
import { object } from 'prop-types';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const ProfileImage = ({
  userData
}) => {
  const { photo, name, lastName } = userData;
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={photo ? { uri: `data:image/gif;base64,${photo}`} : require('../../assets/images/avatar.png')} 
      />
      <Text style={styles.text}>{`${name} ${lastName}`}</Text>
    </View>
  )
};

ProfileImage.propTypes = {
  userData: object
};

const mapState = ({ session }) => ({
  userData: session.user
});

export default connect(mapState, null)(ProfileImage);
