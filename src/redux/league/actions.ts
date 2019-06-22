import {createAction} from 'typesafe-actions';
import * as types from './types';
import {League} from '../../API';

export const createLeague = createAction(
  types.CREATE_LEAGUE,
  resolve => (league: League) => resolve({league})
);

export const createLeagueSuccess = createAction(
  types.CREATE_LEAGUE_SUCCESS,
  resolve => (league: League) => resolve({league})
);
