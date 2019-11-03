import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';

import SignUpForm from 'components/forms/signUpForm';
import { signUp } from 'actions/userActions';
import { LOGIN, SIGN_UP } from 'constants/strings';
import { LOGIN_SCREEN } from 'constants/screens';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import Button from '../../components/common/button';
import styles from './styles';

const SignUpScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const signUpRequest = useCallback(user => dispatch(signUp(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(LOGIN_SCREEN), [navigation]);

  useNavigateOnLoginEffect(navigation);

  return (
    <KeyboardAvoidingView style={styles.container} enabled={false} behavior="height">
      <Text style={styles.welcomeMessage}>{SIGN_UP.signUpTitle}</Text>
      <View style={styles.signUpContainer}>
        <SignUpForm onSubmit={signUpRequest} />
      </View>
      <View style={styles.btnContainer}>
        <Button
          text={SIGN_UP.login}
          onPress={handleLogin}
          addedStyle={styles.btnContainer}
          secondary
        />
      </View>
    </KeyboardAvoidingView>
  );
});

SignUpScreen.propTypes = {
  navigation: object.isRequired,
};

SignUpScreen.options = {
  topBar: {
    title: {
      text: "Crear cuenta",
    },
  },
};

export default SignUpScreen;