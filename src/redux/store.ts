import {createStore} from 'redux';
import rootReducer from './rootReducer';

const initialStore = {};

export const store = createStore(rootReducer, initialStore);
