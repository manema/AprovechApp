import { combineReducers } from 'redux';
import { sessionReducer as session } from 'redux-react-native-session';
import dataReducer from './dataReducer'
import interest from './interestReducer';
import commerce from './commerceReducer';
import discount from './discountReducer';

export default combineReducers({
    interest,
    dataReducer,
    commerce,
    discount,
    session
})
