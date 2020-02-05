import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, Text, View, KeyboardAvoidingView, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { object } from 'prop-types';
import ImagePicker from 'react-native-image-picker';

import LoginForm from 'components/forms/loginForm';
import { login } from 'actions/userActions';
import { LOGIN } from 'constants/strings';
import { SIGN_UP_SCREEN } from 'constants/screens';
import { ACCOUNT_SCREEN } from 'constants/strings';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import Separator from 'components/common/separator';
import AccountForm from 'components/forms/accountForm';
import Button from '../../components/common/button';
import styles from './styles';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Settings = () => 
  <View>
    <Text style={[styles.settingTitle, styles.settingChildren]}>{ACCOUNT_SCREEN.title}</Text>
    <TouchableOpacity style={[styles.settingButtons, styles.settingChildren]} onPress={() => {}}>
      <Text>{ACCOUNT_SCREEN.settings}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.settingButtons, styles.settingChildren]} onPress={() => {}}>
      <Text>{ACCOUNT_SCREEN.passwordChange}</Text>
    </TouchableOpacity>
  </View>

const Account = memo(({ navigation }) => {
  const [avatarImage, setAvatarImage] = useState('');
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  useNavigateOnLoginEffect(navigation);

  const handlePressAvatarIcon = () => ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };
      setAvatarImage(response.data);
    }
  });

  return (
    <KeyboardAvoidingView style={styles.container} enabled={false} behavior="height">
      <View style={styles.topSideContainer}>
        <TouchableWithoutFeedback onPress={() => handlePressAvatarIcon()}>
          <Image 
            style={{ width: 100, height: 100, borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 }}
            source={avatarImage ? { uri: `data:image/gif;base64,${avatarImage}`} : require('../../assets/images/avatar.png')} 
          />
        </TouchableWithoutFeedback>
        <Text style={styles.userName}>Usuario Cliente</Text>
        <Text>usuario@gmail.com</Text>
      </View>
      <View style={styles.mainSeparator} />
      <View>
        <Separator />
      </View>
      <View style={{ width: '80%', alignSelf: 'center' }}>
        <AccountForm onSubmit={() => {}}>
          <Settings />
        </AccountForm>
      </View>
    </KeyboardAvoidingView>
  );
});

Account.propTypes = {
  navigation: object.isRequired,
};

Account.options = {
  topBar: {
    title: {
      text: "Mi cuenta",
    },
  },
};

export default Account;
