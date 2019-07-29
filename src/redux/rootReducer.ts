import {combineReducers} from 'redux';
import counters from './counter/reducer';
import leagues from './league/reducer';
import login from './login/reducer';
import {connectRouter} from 'connected-react-router';
import {History} from 'history';

const rootReducer = {login, counters, leagues};

export const createRootReducer = (history: History) =>
  combineReducers({router: connectRouter(history), ...rootReducer});

export default rootReducer;
