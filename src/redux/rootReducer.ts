import {combineReducers} from 'redux';
import counters from './counter/reducer';
import leagues from './league/reducer';

const rootReducer = combineReducers({counters, leagues});

export default rootReducer;
