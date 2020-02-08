import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { RED } from 'constants/style';

const Loader = () =>
  <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color={RED} />
  </View>

export default Loader;