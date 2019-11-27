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
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { getDataActions } from 'actions/getDataActions';
import { getInterests } from 'actions/interestActions';
import { getCommerces } from 'actions/commercesActions';
import LoginForm from 'components/forms/loginForm';
import InterestBar from 'components/interestBar';
import Swipe from 'components/swipe';
import styles from './styles';

const MainScreen = ({ data, getDataActions, getInterests, getCommerces, interests, commerces }) => {

  useEffect(() => {
    getInterests();
    getCommerces();
  }, [getInterests, getCommerces]);


  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -34.888246,
            longitude: -56.159197,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {commerces && commerces.map(({ latitude, longitude, name, address }) => (
            <Marker
              coordinate={{ latitude, longitude}}
              title={name}
              description={address}
            />
          ))}
        </MapView>
      </View>
      <InterestBar interests={interests} />
      <Swipe style={styles.swipe}>
        <InterestBar interests={interests} />
      </ Swipe>
    </View>
  );
};

const mapState = ({ interest, commerce }) => ({
  interests: interest.interests,
  commerces: commerce.commerces
});

const mapDispatch = { getDataActions, getInterests, getCommerces };

export default connect(
  mapState,
  mapDispatch
)(MainScreen);
