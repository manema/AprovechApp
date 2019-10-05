import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from './../reducers/index';
import { createLogger } from 'redux-logger';
import _ from 'lodash';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    const middlewares = [thunk];
  
    if (__DEV__) {
      const logger = createLogger({
        collapsed: true,
        predicate: (getState, { type }) => !_.startsWith(type, '@@redux-form'),
      });
      middlewares.push(logger);
    }
  
    const store = createStore(
      Reducers,
      initialState,
      composeEnhancers(applyMiddleware(...middlewares)),
    );
  
    return store;
  }
