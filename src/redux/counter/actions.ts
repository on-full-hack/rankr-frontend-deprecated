import {action} from 'typesafe-actions';
import * as types from './constants';

export const increment = () => action(types.INCREMENT);

export const incrementAsync = () => action(types.INCREMENT_ASYNC);

export const incrementAsyncSuccess = (number: number) =>
  action(types.INCREMENT_ASYNC_SUCCESS, {payload: number});

export const incrementAsyncFailure = () =>
  action(types.INCREMENT_ASYNC_FAILURE);
