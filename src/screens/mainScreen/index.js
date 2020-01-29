/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState, useEffect, useCallback } from 'react';
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
import SearchInput, { createFilter } from 'react-native-search-filter';
import { KEYS_TO_COMMERCE_FILTER } from 'constants/constants';

import { getDataActions } from 'actions/getDataActions';
import { getInterests } from 'actions/interestActions';
import { getCommerces, getCommercesByInterest } from 'actions/commercesActions';
import { getDiscounts } from 'actions/discountActions';
import { DISCOUNT_SCREEN } from 'constants/screens';
import { auxFilter } from 'utils/helpers'; 
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
  const [searchTerm, setSearchTerm] = useState('');

  const handlePressDiscount = useCallback(id => navigation.navigate(DISCOUNT_SCREEN, { id }), [navigation]);
  const commercesSearched = commerces && auxFilter(searchTerm, commerces);
  const filteredDiscounts = discounts && discounts.filter(createFilter(searchTerm, KEYS_TO_COMMERCE_FILTER));

  let allDiscounts = new Set(filteredDiscounts);
  commercesSearched && commercesSearched.forEach(commerce => {
    allDiscounts = new Set([...new Set(commerce.discounts), ...allDiscounts])
  });

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
        <View style={styles.swipeChildrenContainer}>
          <SearchInput 
            onChangeText={term => setSearchTerm(term)} 
            style={styles.searchInput}
            placeholder="Type a message to search"
          />
          <InterestBar interests={interests} onChange={getCommercesByInterest}/>
          {allDiscounts && Array.from(allDiscounts).map(({ id, name, discountPercentage, dateStart, dateEnd, commerceAddress, interestDescription }) =>
            <Discount
              key={id}
              commerceName={name}
              commerceAddress={commerceAddress}
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
