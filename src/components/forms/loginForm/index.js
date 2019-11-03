import React from 'react';
import { func } from 'prop-types';
import { Form, Field } from 'react-final-form';
import { validate } from 'validate.js';
import { ActivityIndicator, TouchableOpacity, Text, View } from 'react-native';

import { loginConstraints } from 'constraints/constraints';
import Input from '../../common/input';
import Button from '../../common/button';
import { LOGIN } from 'constants/strings';
import styles from './styles';

const LoginForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit} validate={values => validate(values, loginConstraints)} >
    {({ handleSubmit, submitError, submitting }) => (
      <View style={styles.inputsContainer}>
        {/* {submitError && <Text>{submitError}</Text>} */}
        <Field name="email" label={LOGIN.email} component={Input} />
        <Field name="password" label={LOGIN.password} component={Input} password />
        <View style={[styles.btnForget, styles.btnContainer]}>
          <Button
            addedStyle={{ width: 400 }}
            text={LOGIN.forgotPassword}
            onPress={()=>{}}
            secondary
          />
        </View>
        <View style={[styles.btnLogin, styles.btnContainer]}>
          {submitting ? (
            <ActivityIndicator />
          ) : (
              <Button
                text={LOGIN.loginTitle}
                onPress={handleSubmit}
              />
          )}
        </View>
      </View>
    )}
  </Form>
);

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;