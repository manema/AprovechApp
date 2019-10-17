/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useEffect } from 'react';
import api from 'api';
import {
  View,
  Text,
  Button
} from 'react-native';
import { connect } from 'react-redux'
import { getDataActions } from 'actions/getDataActions';

const HomePage = ({ data, getDataActions }) => {

  useEffect(() => {
    const initSession = async () => {
      const resp = await api.get("Usuarios?id=1");
      return resp;
      console.log(resp);
    };
    const e = initSession();
    e.then(myresponse => {
      console.log(myresponse);
    });
    console.log(e);
    // console.log(response);
    // try {
    //   const response = await api.get("Usuarios?id=1");
    //   console.log(response);
    // } catch(err) {
    //   throw error;
    // }
  }, []);

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
