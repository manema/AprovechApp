import React from 'react';
import { func } from 'prop-types';
import { Form, Field } from 'react-final-form';
import { ActivityIndicator, Text, View } from 'react-native';
import { validate } from 'validate.js';

import { signUpConstraints } from 'constraints/constraints';
import Input from 'components/common/input';
import Button from '../../common/button';
import { SIGN_UP } from 'constants/strings';
import styles from './styles';

const SignUpForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit} validate={values => validate(values, signUpConstraints)}>
    {({ handleSubmit, submitError, submitting }) => (
      <View onSubmit={handleSubmit}>
        {submitError && <Text>{submitError}</Text>}
        <Field name="name" label="Nombre" component={Input} />
        <Field name="lastName" label="Apellido" component={Input} />
        <Field name="email" label="Email" component={Input} />
        <Field name="password" label="Contraseña" component={Input} password />
        <Field
          name="passwordConfirmation"
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