import {createAction} from 'typesafe-actions';
import * as types from './constants';

export const increment = createAction(types.INCREMENT);

export const incrementAsync = createAction(types.INCREMENT_ASYNC);

export const incrementAsyncSuccess = createAction(
  types.INCREMENT_ASYNC_SUCCESS,
  resolve => (number: number) => resolve(number)
);

export const incrementAsyncFailure = createAction(
  types.INCREMENT_ASYNC_FAILURE
);
