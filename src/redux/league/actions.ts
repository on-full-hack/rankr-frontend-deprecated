import {createAction} from 'typesafe-actions';
import * as types from './types';
import {League, LeagueDetails} from '../../API';

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

export const fetchLeagueDetails = createAction(
  types.FETCH_LEAGUE_DETAILS,
  resolve => (id: number) => resolve({id})
);

export const fetchLeagueDetailsSuccess = createAction(
  types.FETCH_LEAGUE_DETAILS_SUCCESS,
  resolve => (leagueDetails: LeagueDetails) => resolve({leagueDetails})
);
