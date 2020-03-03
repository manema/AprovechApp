import React, { memo, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { object } from 'prop-types';
import qrService from 'services/qrService';
import Toast from 'react-native-simple-toast';

import { LIST_OF_QRS_SCREEN } from 'constants/screens';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import Button from '../../components/common/button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntFontsIcon from 'react-native-vector-icons/AntDesign';
import { discountTypes } from 'constants/constants';
import { REVIEW_SCREEN } from 'constants/strings';
import { GREY, BLACK, YELLOW } from 'constants/style';
import Review from 'components/review';
import styles from './styles';

const ReviewQualification = ({ kind, value }) => 
  <View style={styles.reviewComponentContainer}>
    <View style={styles.reviewValueSection}>
      <Text style={styles.reviewValue}>{value}
      </Text>
      <AntFontsIcon name='star' size={15} color={YELLOW} />
    </View>
    <Text style={styles.reviewTitle}>{kind}</Text>
  </View>

const ReviewScreen = memo(({ navigation, discountIcon, commerceAddress, itemQualification, discounts }) => {
  const [reviewValues, setReviewValues] = useState({ article: 1, commerce: 1, value: 1 });
  const { article, commerce, value } = reviewValues;
  const { qrId, idDiscount, idCommerce, commerceImage } = navigation.state.params;
  console.log(idDiscount);
  const currentDiscount = discounts.find(discount => discount.id === idDiscount);
  console.log(currentDiscount);

  const { description, address, discountValue, discountType, article: articleCurrentValue, value: valueCurrentValue, commerceValued: commerceValuedCurrentValue } = currentDiscount || {};
  const handleSuccessfulReview = useCallback(() => navigation.navigate(LIST_OF_QRS_SCREEN), [navigation]);

  const handleReviewQr = async dispatch => {
    const dataToReview = {...reviewValues, idQr: qrId, idDiscount, idCommerce };
    dataToReview.commerceValued = dataToReview.commerce;
    delete dataToReview.commerce;
    try {
      await qrService.reviewQr(dataToReview);
      Toast.showWithGravity('Gracias por su valoración!', Toast.LONG, Toast.CENTER);
      setTimeout(() => handleSuccessfulReview(), 3000);
    } catch (err) {
      Toast.showWithGravity('Algo no funcionó, por favor contacta al soporte tecnico.', Toast.LONG, Toast.CENTER);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {commerceImage ? <Image style={{ resizeMode: 'contain', flex: 1 }} source={{ uri: `data:image/gif;base64,${commerceImage}`}} /> : <View style={styles.placeholderIcon}><Icon name="store-alt" size={50} color={BLACK} /></View>}
        <View style={styles.addressContainer}>
          <Icon name="map-marker-alt" size={15} color={GREY} />
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <ReviewQualification kind={REVIEW_SCREEN.article} value={articleCurrentValue} />
        <ReviewQualification kind={REVIEW_SCREEN.value} value={valueCurrentValue} />
        <ReviewQualification kind={REVIEW_SCREEN.atention} value={commerceValuedCurrentValue} />
        <View style={styles.discountContainer}>
          <Text style={styles.discountValue}>
            {`${discountType === discountTypes.value ? `$${discountValue}` : `${discountValue}%`}`}
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 15, height: 40, marginVertical: 3 }}>
        <Text>{description}</Text>
      </View>
      <View style={styles.descriptionSection}>
        <Review 
          text={REVIEW_SCREEN.article} 
          currentScore={article}
          onChange={articleReview => setReviewValues(state => ({...state, article: articleReview }))} 
        />
        <Review 
          text={REVIEW_SCREEN.value}
          currentScore={value}
          onChange={valueReview => setReviewValues(state => ({...state, value: valueReview }))}
        />
        <Review 
          text={REVIEW_SCREEN.atention}
          currentScore={commerce}
          onChange={commerceReview => setReviewValues(state => ({...state, commerce: commerceReview }))}
        />
        <View style={styles.btnContainer}>
          <Button text={REVIEW_SCREEN.btn} textAddedStyle={styles.btn} onPress={handleReviewQr} />
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
  mapState
)(ReviewScreen);
