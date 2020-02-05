import React from 'react';
import { func } from 'prop-types';
import { Form, Field } from 'react-final-form';
import { validate } from 'validate.js';
import { ActivityIndicator, TouchableOpacity, Text, View } from 'react-native';

import { resetPasswordConstraints } from 'constraints/constraints';
import Input from '../../common/input';
import Button from '../../common/button';
import { RESET_PASSWORD_SCREEN } from 'constants/strings';
import styles from './styles';

const ResetPasswordForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit} validate={values => validate(values, resetPasswordConstraints)} >
    {({ handleSubmit, submitError, submitting }) => (
      <View style={styles.form}>
        <Field name="password" label={RESET_PASSWORD_SCREEN.password} component={Input} password />
        <Field name="newPassword" label={RESET_PASSWORD_SCREEN.newPassword} component={Input} password />
        <Field name="newPasswordConfirm" label={RESET_PASSWORD_SCREEN.newPasswordConfirmation} component={Input} password />
        {/* <View style={[styles.btnForget, styles.btnContainer]}>
          <Button
            addedStyle={{ width: 400 }}
            text={LOGIN.forgotPassword}
            onPress={()=>{}}
            secondary
          />
        </View> */}
        <View style={styles.btnResetContainer}>
          {submitting ? (
            <ActivityIndicator />
          ) : (
              <Button
                addedStyle={styles.submitBtn}
                textAddedStyle={styles.submitBtnText}
                text={RESET_PASSWORD_SCREEN.submitBtnText}
                onPress={handleSubmit}
              />
          )}
        </View>
      </View>
    )}
  </Form>
);

ResetPasswordForm.propTypes = {
  onSubmit: func.isRequired,
};

export default ResetPasswordForm;