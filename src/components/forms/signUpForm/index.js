import React from 'react';
import { func } from 'prop-types';
import { Form, Field } from 'react-final-form';
import { ActivityIndicator, Button, Text, View } from 'react-native';

import Input from 'components/common/input';
import styles from './styles';

const SignUpForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, submitError, submitting }) => (
      <View onSubmit={handleSubmit}>
        {submitError && <Text>{submitError}</Text>}
        <Field name="name" label="Nombre" component={Input} />
        <Field name="lastName" label="Apellido" component={Input} />
        <Field name="email" label="Email" component={Input} />
        <Field name="password" label="Contraseña" component={Input} password />
        <Field
          name="passwordConfirmation"
          label="Confirmación"
          component={Input}
          password
        />
        {submitting ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.button}>
            <Button title="Crear cuenta" onPress={handleSubmit} />
          </View>
        )}
        <View style={styles.button}>
          <Button title="Ya sos usuario | Iniciar sesión" onPress={handleSubmit} />
        </View>
      </View>
    )}
  </Form>
);

SignUpForm.propTypes = {
  onSubmit: func.isRequired,
};

export default SignUpForm;