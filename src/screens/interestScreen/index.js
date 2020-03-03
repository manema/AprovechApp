import React, { memo, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, Modal } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { object } from 'prop-types';

import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import { getUserInterests, addUserInterest, deleteUserInterest } from 'actions/interestActions';
import { KEYS_TO_INTERESTS_FILTER } from 'constants/constants';
import InterestCircle from 'components/interestCircle';
import DeleteInterestBtn from 'components/deleteInterestBtn';
import AddInterestBtn from 'components/addInterestBtn';
import Button from '../../components/common/button';
import Separator from 'components/common/separator';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

const InterestScreen = memo(({ navigation, getUserInterests, addUserInterest, deleteUserInterest, userInterests, interests }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredInterests = interests && interests.filter(createFilter(searchTerm, KEYS_TO_INTERESTS_FILTER));

  useEffect(() => {
    getUserInterests();
  }, [getUserInterests])

  const handleAddInterest = id => {
    addUserInterest(id);
    setIsModalVisible(false);
  };

  // useNavigateOnLoginEffect(navigation);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={{ width: '80%' }}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)} style={{ alignSelf: 'flex-end', marginBottom: 15 }}>
              <Text style={{ fontSize: 25 }}>x</Text>
            </TouchableOpacity>
            <SearchInput 
              onChangeText={term => setSearchTerm(term)} 
              style={styles.searchInput}
              placeholder="Tipea el nombre de tu interes"
            />
            <ScrollView contentContainerStyle={{ height: 300 }}>
              {filteredInterests.length ? filteredInterests.map(({ name, id }) => 
                <TouchableOpacity style={{ borderBottomWidth: 1, marginVertical: 5 }} onPress={() => handleAddInterest(id)} key={id}>
                  <Text style={{ fontSize: 18 }}>{name}</Text>
                </TouchableOpacity>
              ) : <Text style={{ fontSize: 18 }}>No se encontro ningun interes que conincida con su busqueda</Text>}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View style={{ flexGrow: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="heart" size={80} />
        <Text style={{ fontWeight: 'bold', fontSize: 15, position: 'absolute', left: 10, bottom: 0 }}>Mis intereses</Text>
      </View>
      <View style={styles.mainSeparator} />
      <ScrollView style={{ flexGrow: 7 }}>
        { 
          !!userInterests.length && userInterests.map(({ id, name }) =>
          <View style={{ width: '90%', marginLeft: '5%' }} key={id}>
            <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
              <InterestCircle key={id} id={id} name={name} onChange={() => {}} />
              <DeleteInterestBtn key={id} id={id} onChange={() => deleteUserInterest(id)} />
            </View>
            <Separator />
          </View>
        )}
      </ScrollView>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
        <AddInterestBtn onChange={() => setIsModalVisible(true)} id="interestId" />
      </View>
    </View>
  );
});

// InterestScreen.propTypes = {
//   navigation: object.isRequired,
// };

// InterestScreen.options = {
//   topBar: {
//     title: {
//       text: "Intereses",
//     },
//   },
// };

const mapState = ({ interest }) => ({
  userInterests: interest.userInterests,
  interests: interest.interests
});

const mapDispatch = { getUserInterests, addUserInterest, deleteUserInterest };

export default connect(mapState, mapDispatch)(InterestScreen);