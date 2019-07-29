import {createAction} from 'typesafe-actions';
import * as types from './types';
import {Error} from '../../lib/types';

export const login = createAction(
  types.LOGIN,
  resolve => (username: string, password: string) =>
    resolve({username, password})
);

export const loginSuccess = createAction(types.LOGIN_SUCCESS);

export const loginError = createAction(
  types.LOGIN_ERROR,
  resolve => (error: Error) => resolve({error})
);
