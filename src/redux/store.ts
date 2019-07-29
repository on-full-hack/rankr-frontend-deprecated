import {RootAction, RootState} from 'MyTypes';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import {createRootReducer} from './rootReducer';
import {createEpicMiddleware} from 'redux-observable';
import epics from './rootEpics';

const initialStore = {};

export const history = createBrowserHistory();

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

const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware, routerMiddleware(history))
);

export const store = createStore(
  createRootReducer(history),
  initialStore,
  enhancer
);

epicMiddleware.run(epics);
