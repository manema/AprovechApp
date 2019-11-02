/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-native-session';
import api from 'api';
import applyDefaultInterceptors from 'api/utils/applyDefaultInterceptors';
import HomePage from './src/containers/homepage/index';

import AppContainer from 'navigators';
import configureStore from './src/store/configureStore';

const store = configureStore({});
applyDefaultInterceptors(api);

const App = () => {

  useEffect(() => {
    const initSession = async () => {
      await sessionService.initSessionService(store);
    };
    initSession();
  }, []);

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
