import React from 'react';
import { string, number, func } from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { GREY, BLACK } from 'constants/style';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const Discount = ({
  discountIcon,
  commerceName,
  commerceAddress,
  distanceToCommerce,
  dicountType,
  onChange
}) => (
  <TouchableOpacity style={styles.container} onPress={onChange}>
    <View style={styles.imageContainer}>
      {discountIcon ? <Image source={discountIcon} /> : <Icon name="store-alt" size={30} color={BLACK} />}
    </View>
    <View style={styles.infoSection}>
      <View style={styles.infoSectionTop}>
        <View style={styles.discountDesc}>
          <Text style={styles.commerceName}>{commerceName}</Text>
          <View style={styles.addressContainer}>
            <Icon name="map-marker-alt" size={15} color={GREY} />
            <Text style={styles.commerceAddress}>{commerceAddress}</Text>
          </View>
        </View>
        <Text style={styles.discountValue}>
          {"20%"}
        </Text>
      </View>
      <View style={[styles.infoSectionFooter, styles.distance]}>
        <Text>{`${distanceToCommerce}km`}</Text>
        <Text style={styles.type}>{dicountType}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

Discount.propTypes = {
  discountIcon: string,
  commerceName: string.isRequired,
  commerceAddress: string.isRequired,
  distanceToCommerce: number.isRequired,
  dicountType: string.isRequired,
  onChange: func.isRequired
};

export default Discount;