import { combineReducers } from 'redux';
import { sessionReducer as session } from 'redux-react-native-session';
import dataReducer from './dataReducer'

export default combineReducers({
    dataReducer,
    session
})
