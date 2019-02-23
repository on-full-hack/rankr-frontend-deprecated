import {combineReducers} from 'redux';
import counters from './counter/reducer';

const rootReducer = combineReducers({counters});

export default rootReducer;
