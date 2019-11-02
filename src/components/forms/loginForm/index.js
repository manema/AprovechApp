import React from 'react';
import { func } from 'prop-types';
import { Form, Field } from 'react-final-form';
import { ActivityIndicator, TouchableOpacity, Text, View } from 'react-native';

// import Input from 'components/common/Input';
import Input from '../../common/input';
import Button from '../../common/button';
// import * as constraints from 'utils/constraints';
import { LOGIN } from 'constants/strings';
import styles from './styles';

const LoginForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, submitError, submitting }) => (
      <View onSubmit={handleSubmit} style={styles.inputsContainer}>
        {submitError && <Text>{submitError}</Text>}
        <Field name="email" label={LOGIN.email} component={Input} />
        <Field name="password" label={LOGIN.password} component={Input} password />
        <View style={[styles.btnForget, styles.btnContainer]}>
          <Button
            addedStyle={{ width: 400 }}
            text={LOGIN.forgotPassword}
            onPress={handleSubmit}
            secondary
          />
        </View>
        <View style={[styles.btnLogin, styles.btnContainer]}>
          {submitting ? (
            <ActivityIndicator />
          ) : (
            // <View style={styles.button}>
              // <TouchableOpacity style={styles.button} title={LOGIN.loginTitle} onPress={handleSubmit}  color="#1E6738">
              //   <Text style={styles.text}>{LOGIN.loginTitle}</Text>
              // </ TouchableOpacity>
              <Button
                text={LOGIN.loginTitle}
                onPress={handleSubmit}
              />
            // </View>
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