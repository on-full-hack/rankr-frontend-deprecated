import {combineReducers} from 'redux';
import counters from './counter/reducer';
import leagues from './league/reducer';
import login from './login/reducer';

const rootReducer = combineReducers({login, counters, leagues});

export default rootReducer;
