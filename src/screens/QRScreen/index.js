import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';

import { createQr, getQrById } from 'actions/qrActions';

const QRScreen = memo(({ navigation, createQr, getQrById, discounts, qr }) => {
  const { creating, qrId } = navigation.state.params;
  let relatedDiscount = discounts.find(({ id }) => id === qrId);
  
  useEffect(() => {
    creating ? createQr(qrId) : getQrById(qrId);
  }, [createQr, getQrById, qrId, creating]);
  
  return (
    <View style={styles.container}>
      {qr &&
        <>
          <Image style={styles.image} source={{ uri: `data:image/gif;base64,${qr.image}`}} />
          <Text>{creating ? relatedDiscount.description : qr.description}</Text>
        </>
      }
    </View>
  );
});

QRScreen.propTypes = {
  navigation: object.isRequired,
};

QRScreen.defaultProps = {
  discounts: []
}

QRScreen.options = {
  topBar: {
    title: {
      text: "QR",
    },
  },
};

const mapState = ({ qr, discount }) => ({
  qr: qr.qr,
  discounts: discount.discounts
});

const mapDispatch = { createQr, getQrById };

export default connect(mapState, mapDispatch)(QRScreen);