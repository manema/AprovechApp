import React from 'react';
import { func, node } from 'prop-types';
import { Form, Field } from 'react-final-form';
import { ActivityIndicator, Text, View } from 'react-native';
import { validate } from 'validate.js';

import { signUpConstraints } from 'constraints/constraints';
import Input from 'components/common/input';
import Button from '../../common/button';
import { ACCOUNT_FORM } from 'constants/strings';
import styles from './styles';

const AccountForm = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit} validate={values => validate(values, signUpConstraints)}>
    {({ handleSubmit, submitError, submitting }) => (
      <View onSubmit={handleSubmit} style={styles.formContainer}>
        <View style={styles.fieldsContainer}>
          <Text style={styles.title}>{ACCOUNT_FORM.title}</Text>
          {submitError && <Text>{submitError}</Text>}
          <Field name="name" label="Nombre" component={Input} addedStyle={styles.inputStyle} />
          <Field name="lastName" label="Apellido" component={Input} addedStyle={styles.inputStyle} />
          <Field name="email" label="Email" component={Input} addedStyle={styles.inputStyle} />
        </View>
        {children && <View style={styles.childrenContainer}>{children}</View>}
        {submitting ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.btnContainer}>
            <Button 
              text={ACCOUNT_FORM.btn}
              onPress={handleSubmit}
              addedStyle={styles.submitBtn}
              textAddedStyle={styles.submitBtnText}
            />
          </View>
        )}
      </View>
    )}
  </Form>
);

AccountForm.propTypes = {
  onSubmit: func.isRequired,
  children: node
};

export default AccountForm;
