import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import * as types from './types';
import {Error} from '../../lib/types';

interface LoginState {
  error: Error | null;
}

export type LoginAction = ActionType<typeof actions>;

const defaultState = {error: null};

export const reducer = (
  state: LoginState = defaultState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case types.LOGIN_ERROR: {
      return {...state, error: action.payload.error};
    }
    default:
      return state;
  }
};

export default reducer;
