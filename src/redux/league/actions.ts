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

export const fetchLeagues = createAction(types.FETCH_LEAGUES);

export const fetchLeaguesSuccess = createAction(
  types.FETCH_LEAGUES_SUCCESS,
  resolve => (leagues: League[]) => resolve({leagues})
);
