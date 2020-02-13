
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
import Loader from 'components/common/loader';
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
  navigation,
  isInterestLoading,
  isCommerceLoading,
  isGettingCommerceById
}) => {

  const handleCommerceClick = commerceId => {
    setUseIndividualCommerceDiscounts(commerceId);
    setTriggerSwipeUp(triggerSwipeUp => !triggerSwipeUp);
  };

  useEffect(() => {
    getInterests();
    getCommerces();
    getDiscounts();
  }, [getInterests, getCommerces, getDiscounts]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSwipeUp, setIsSwipeUp] = useState(false);
  const [triggerSwipeUp, setTriggerSwipeUp] = useState();
  const [useIndividualCommerceDiscounts, setUseIndividualCommerceDiscounts] = useState(null);

  const handlePressDiscount = useCallback((id, idCommerce) => navigation.navigate(DISCOUNT_SCREEN, { id, idCommerce }), [navigation]);
  const commercesSearched = commerces && auxFilter(searchTerm, commerces);
  const individualFilteredDiscounts = commerces && commerces.find(({ id }) => id === useIndividualCommerceDiscounts);
  const discountsToFilter = (individualFilteredDiscounts && individualFilteredDiscounts.discounts) || discounts;
  const filteredDiscounts = discountsToFilter && discountsToFilter.filter(createFilter(searchTerm, KEYS_TO_COMMERCE_FILTER));

  let allDiscounts = new Set(filteredDiscounts);
  !individualFilteredDiscounts && commercesSearched && commercesSearched.forEach(commerce => {
    allDiscounts = new Set([...new Set(commerce.discounts), ...allDiscounts])
  });

  const isLoading = isCommerceLoading || isInterestLoading;

  return (
    <View style={styles.container}>
      { isLoading ? 
        <Loader /> :
      <>
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
          {commerces && commerces.map(({ latitude, longitude, name, address, id }) => (
            <Marker
              coordinate={{ latitude, longitude}}
              title={name}
              description={address}
              onPress={() => handleCommerceClick(id)}
            />
          ))}
        </MapView>
      </View>
      <Swipe style={styles.swipe} handleSwipeUp={setIsSwipeUp} triggerSwipeUp={triggerSwipeUp} handleSwipeDown={setUseIndividualCommerceDiscounts}>
        <View style={[styles.swipeChildrenContainer, isSwipeUp && styles.swipeChildrenContainerMarginBottom]}>
          { 
            isSwipeUp &&
            <SearchInput 
              onChangeText={term => setSearchTerm(term)} 
              style={styles.searchInput}
              inputViewStyles={{ width: '90%' }}
              placeholder="Busca tus descuentos favoritos"
            />
          }
          <InterestBar interests={interests} onChange={getCommercesByInterest}/>
          {isSwipeUp && allDiscounts && Array.from(allDiscounts).map(({ idTemp, id, idCommerce, name, discountPercentage, dateStart, dateEnd, address, interestDescription }) =>
            <Discount
              key={idTemp}
              commerceName={name}
              commerceAddress={address}
              distanceToCommerce={1.2}
              dicountType="Accesorios"
              onChange={() => handlePressDiscount(id, idCommerce)}
            />
          )}
        </View>
      </ Swipe>
      </>
      }
    </View>
  );
};

MainScreen.propTypes = {
  navigation: object.isRequired,
};

const mapState = ({ interest, commerce, discount }) => ({
  interests: interest.interests,
  commerces: commerce.commerces,
  discounts: commerce.allDiscounts,
  isInterestLoading: interest.loading,
  isCommerceLoading: commerce.loading,
  isGettingCommerceById: commerce.isGettingCommerceById
});

const mapDispatch = { getDataActions, getInterests, getCommerces, getCommercesByInterest, getDiscounts };

export default connect(
  mapState,
  mapDispatch
)(MainScreen);
