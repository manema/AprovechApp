import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, ScrollView, Image } from 'react-native';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { REVIEW_SCREEN, QR_SCREEN } from 'constants/screens';
import styles from './styles';

import { getListOfQrs } from 'actions/qrActions';
import Discount from 'components/discount';

const ListQrScreen = memo(({ navigation, getListOfQrs, allQrs }) => {

  
  const handlePressQr = useCallback((qrId, consumed) => navigation.navigate(consumed ? REVIEW_SCREEN : QR_SCREEN, { qrId, creating: false }), [navigation]);
  
  useEffect(() => {
    getListOfQrs();
  }, [getListOfQrs]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} centerContent>
      {!!allQrs.length && allQrs.map(({ qrId, commerceName, commerceAddress, commerceImage, consumed, interestDescription }) => 
        <Discount
          key={qrId} 
          isQr
          consumed={consumed}
          commerceName={commerceName}
          commerceAddress={commerceAddress}
          distanceToCommerce={1.2}
          interestDescription={interestDescription}
          discountIcon={commerceImage}
          onChange={() => handlePressQr(qrId, consumed)}
        />
      )}
    </ScrollView>
  );
});

ListQrScreen.propTypes = {
  navigation: object.isRequired,
};

ListQrScreen.defaultProps = {
  qr: undefined
}

ListQrScreen.options = {
  topBar: {
    title: {
      text: "List QR",
    },
  },
};

const mapState = ({ qr }) => ({
  allQrs: qr.allQrs
});

const mapDispatch = { getListOfQrs };

export default connect(mapState, mapDispatch)(ListQrScreen);
