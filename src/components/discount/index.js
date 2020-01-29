import React from 'react';
import { string, number, func, bool } from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { GREY, BLACK } from 'constants/style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import QRIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { getDiscountValue } from 'utils/helpers';

const Discount = ({
  discountIcon,
  commerceName,
  commerceAddress,
  distanceToCommerce,
  interestDescription,
  dicountType,
  discountValue,
  onChange,
  isQr,
  consumed
}) => (
  <TouchableOpacity style={styles.container} onPress={onChange}>
    <View style={styles.imageContainer}>
      {discountIcon ? <Image style={styles.image} source={{ uri: `data:image/gif;base64,${discountIcon}`}} /> : <Icon name="store-alt" size={30} color={BLACK} />}
      {consumed && <Image style={{ width: 100, height: 50, position: 'absolute', top: -1, left: 0, zIndex: 10000 }} source={require('../../assets/images/pending-review-icon.png')} />}
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
        { isQr ? 
          <QRIcon name="qrcode" size={40} color={BLACK} style={styles.qrIcon}/> :
          <Text style={styles.discountValue}>
            {getDiscountValue(dicountType, discountValue)}
          </Text>
        }
      </View>
      <View style={[styles.infoSectionFooter, styles.distance]}>
        <Text>{`${distanceToCommerce}km`}</Text>
        <Text style={styles.type}>{interestDescription}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

Discount.propTypes = {
  discountIcon: string,
  commerceName: string.isRequired,
  commerceAddress: string.isRequired,
  distanceToCommerce: number.isRequired,
  interestDescription: string.isRequired,
  dicountType: string.isRequired,
  discountValue: number.isRequired,
  onChange: func.isRequired,
  isQr: bool,
  consumed: bool
};

Discount.defaultProps = {
  isQr: false,
  consumed: false,
  discountValue: 0
};

export default Discount;