import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';

import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import ResetPasswordForm from 'components/forms/resetPasswordForm';
import Button from 'components/common/button';
import styles from './styles';

const ResetPasswordScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  // const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  // const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  useNavigateOnLoginEffect(navigation);

  return (
    <KeyboardAvoidingView style={styles.container} enabled={false} behavior="height">
      <View style={styles.welcomeMessageContainer}>
        <Text style={styles.welcomeMessage}></Text>
        <TouchableOpacity style={styles.btnBack}>
          <Text text="<-" />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.formContainer}>
      </View> */}
      <ResetPasswordForm onSubmit={() => {}} />
      <View style={styles.btnContainer}>
        <Button
          // text={LOGIN.createAccount}
          onPress={() => {}}
          secondary
        />
      </View>
    </KeyboardAvoidingView>
  );
});

ResetPasswordScreen.propTypes = {
  navigation: object.isRequired,
};

ResetPasswordScreen.options = {
  topBar: {
    title: {
      text: "Reset password",
    },
  },
};

export default ResetPasswordScreen;