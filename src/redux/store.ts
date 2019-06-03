import {RootAction, RootState} from 'MyTypes';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import {createEpicMiddleware} from 'redux-observable';
import epics from './rootEpics';

const initialStore = {};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState
>();

const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

export const store = createStore(rootReducer, initialStore, enhancer);

epicMiddleware.run(epics);
