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
  Button,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { getDataActions } from 'actions/getDataActions';
import LoginForm from 'components/forms/loginForm';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

const MainScreen = ({ data, getDataActions }) => {

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
  }, []);


  return (
    <View style={styles.container}>
      {/* <Text>AprovechApp</Text> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -34.888246,
          longitude: -56.159197,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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
)(MainScreen);
