import {createAction} from 'typesafe-actions';
import * as types from './constants';
import {League} from '../../API';

export const createLeague = createAction(
  types.CREATE_LEAGUE,
  resolve => league => resolve({league})
);

export const createLeagueSuccess = createAction(types.CREATE_LEAGUE_SUCCESS);
