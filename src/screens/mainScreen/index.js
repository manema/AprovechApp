/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useEffect, useCallback } from 'react';
import api from 'api';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { getDataActions } from 'actions/getDataActions';
import { getInterests } from 'actions/interestActions';
import { getCommerces, getCommercesByInterest } from 'actions/commercesActions';
import { getDiscounts } from 'actions/discountActions';
import { DISCOUNT_SCREEN } from 'constants/screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginForm from 'components/forms/loginForm';
import InterestBar from 'components/interestBar';
import Discount from 'components/discount';
import Swipe from 'components/swipe';
import styles from './styles';

const MainScreen = ({ 
  data,
  getDataActions,
  getInterests,
  getCommerces,
  getDiscounts,
  getCommercesByInterest,
  interests,
  commerces,
  discounts,
  navigation
}) => {
  useEffect(() => {
    getInterests();
    getCommerces();
    getDiscounts();
  }, [getInterests, getCommerces, getDiscounts]);
  console.log(navigation);

  const handlePressDiscount = useCallback(id => navigation.navigate(DISCOUNT_SCREEN, { id }), [navigation]);


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
      <Swipe style={styles.swipe}>
        {/* <SwipeChild discounts={discounts} interests={interests} onChangeBar={getCommercesByInterest} /> */}
        <View style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <InterestBar interests={interests} onChange={getCommercesByInterest}/>
          {discounts && discounts.map(({ id, name, discountPercentage, dateStart, dateEnd, address }) =>
            <Discount
              key={id}
              commerceName={name}
              commerceAddress={address}
              distanceToCommerce={1.2}
              dicountType="Accesorios"
              onChange={() => handlePressDiscount(id)}
            />
          )}
        </View>
      </ Swipe>
    </View>
  );
};

MainScreen.propTypes = {
  navigation: object.isRequired,
};

const mapState = ({ interest, commerce, discount }) => ({
  interests: interest.interests,
  commerces: commerce.commerces,
  discounts: commerce.allDiscounts
});

const mapDispatch = { getDataActions, getInterests, getCommerces, getCommercesByInterest, getDiscounts };

export default connect(
  mapState,
  mapDispatch
)(MainScreen);
