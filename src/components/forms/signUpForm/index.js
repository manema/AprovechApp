import React from 'react';
import { func } from 'prop-types';
import { Form, Field } from 'react-final-form';
import { ActivityIndicator, Text, View } from 'react-native';

import Input from 'components/common/input';
import Button from '../../common/button';
import { SIGN_UP } from 'constants/strings';
import styles from './styles';

const SignUpForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, submitError, submitting }) => (
      <View onSubmit={handleSubmit}>
        {submitError && <Text>{submitError}</Text>}
        <Field name="Name" label="Nombre" component={Input} />
        <Field name="LastName" label="Apellido" component={Input} />
        <Field name="Email" label="Email" component={Input} />
        <Field name="Password" label="Contraseña" component={Input} password />
        <Field
          name="PasswordConfirmation"
          label="Confirmar Contraseña"
          component={Input}
          password
        />
        {submitting ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.btnContainer}>
            <Button text={SIGN_UP.signUpTitle} onPress={handleSubmit} />
          </View>
        )}
      </View>
    )}
  </Form>
);

SignUpForm.propTypes = {
  onSubmit: func.isRequired,
};

export default SignUpForm;