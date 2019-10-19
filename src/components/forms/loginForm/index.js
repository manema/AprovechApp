import React from 'react';
import { func } from 'prop-types';
import { Form, Field } from 'react-final-form';
import { ActivityIndicator, Button, Text, View } from 'react-native';

// import Input from 'components/common/Input';
import Input from '../../common/input';
// import * as constraints from 'utils/constraints';
// import strings from 'locale';
import styles from './styles';

const LoginForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, submitError, submitting }) => (
      <View onSubmit={handleSubmit}>
        {submitError && <Text>{submitError}</Text>}
        <Field name="email" label="email" component={Input} />
        <Field name="password" label="password" component={Input} password />
        {submitting ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.button}>
            <Button title="submit" onPress={handleSubmit} />
          </View>
        )}
      </View>
    )}
  </Form>
);

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;