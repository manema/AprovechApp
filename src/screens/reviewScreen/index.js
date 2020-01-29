import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { object } from 'prop-types';

import { QR_SCREEN } from 'constants/screens';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import Button from '../../components/common/button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntFontsIcon from 'react-native-vector-icons/AntDesign';
import { discountTypes } from 'constants/constants';
import { DISCOUNT_SCREEN } from 'constants/strings';
import { GREY, BLACK, YELLOW } from 'constants/style';
import styles from './styles';

const ReviewQualification = () => 
  <View style={styles.reviewComponentContainer}>
    <View style={styles.reviewValueSection}>
      <Text style={styles.reviewValue}>{4.4}
      </Text>
      <AntFontsIcon name='star' size={15} color={YELLOW} />
    </View>
    <Text style={styles.reviewTitle}>Articulo
    </Text>
  </View>

const ReviewScreen = memo(({ navigation, discountIcon, commerceAddress, itemQualification, discounts }) => {
  const { qrId } = navigation.state.params;
  const currentDiscount = discounts.find(discount => discount.id === qrId);
  if(!currentDiscount) return null;
  const { description, address, discountValue, discountType } = currentDiscount;
  const handlePressGetDiscount = useCallback(() => navigation.navigate(QR_SCREEN, { qrId: id }), [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {discountIcon ? <Image source={discountIcon} /> : <View style={styles.placeholderIcon}><Icon name="store-alt" size={50} color={BLACK} /></View>}
        <View style={styles.addressContainer}>
          <Icon name="map-marker-alt" size={15} color={GREY} />
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <ReviewQualification />
        <ReviewQualification />
        <ReviewQualification />
        <View style={styles.discountContainer}>
          <Text style={styles.discountValue}>
            {`${discountType === discountTypes.value ? `$${discountValue}` : `${discountValue}%`}`}
          </Text>
        </View>
      </View>
      <View style={styles.descriptionSection}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.btnContainer}>
          <Button text={DISCOUNT_SCREEN.btn} textAddedStyle={styles.btn} onPress={() => handlePressGetDiscount()} />
        </View>
      </View>
    </View>
  );
});

ReviewScreen.propTypes = {
  navigation: object.isRequired,
};

ReviewScreen.options = {
  topBar: {
    title: {
      text: "Descuento",
    },
  },
};

const mapState = ({ commerce }) => ({
  discounts: commerce.allDiscounts
});

export default connect(
  mapState,
  null
)(ReviewScreen);
