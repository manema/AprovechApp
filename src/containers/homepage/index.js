/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { connect } from 'react-redux'
import { getDataActions } from 'actions/getDataActions';

const HomePage = ({ data, getDataActions }) => {
  return (
    <View>
      <Text>AprovechApp</Text>
      <Button
          title="Press me"
          color="#f194ff"
          onPress={() => getDataActions()}
        />
    </View>
  );
};

const mapState = ({ dataReducer }) => ({
  data: dataReducer.data,
});

const mapDispatch = { getDataActions };

export default connect(
  mapState,
  mapDispatch
)(HomePage);
