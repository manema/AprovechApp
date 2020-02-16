import React, { useCallback } from 'react';
import { object, func } from 'prop-types';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from 'actions/userActions';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { BLACK } from 'constants/style';
import styles from './styles';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);
  return (
    <TouchableOpacity onPress={logoutRequest} style={styles.container}>
      <LineIcons name="logout" size={25} color={BLACK} style={styles.icon} />
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  )
};

LogoutButton.propTypes = {
  userData: object,
  logout: func.isRequired
};

export default LogoutButton;
