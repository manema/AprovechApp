import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK } from 'constants/style';
import { withNavigation } from 'react-navigation'
import { MAIN_SCREEN } from 'constants/screens';
import styles from './styles';

const HomeButton = ({ navigation }) => {
  const GoHomeRequest = useCallback(() => navigation.navigate(MAIN_SCREEN), [navigation]);
    return (
      <TouchableOpacity onPress={GoHomeRequest} style={styles.container}>
        <View style={styles.contentContainer}>
          <Icon name="home" size={25} color={BLACK} style={styles.icon} />
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableOpacity>
    )
};

export default withNavigation(HomeButton);
