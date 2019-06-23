import {createAction} from 'typesafe-actions';
import * as types from './types';
import {League, LeagueData, LeagueDetails} from '../../API';

export const createLeague = createAction(
  types.CREATE_LEAGUE,
  resolve => (league: LeagueData) => resolve({league})
);

export const createLeagueSuccess = createAction(
  types.CREATE_LEAGUE_SUCCESS,
  resolve => (league: League) => resolve({league})
);

export const fetchLeagues = createAction(types.FETCH_LEAGUES);

export const joinToLeague = createAction(
  types.JOIN_TO_LEAGUE,
  resolve => (id: number) => resolve({id})
);

export const joinToLeagueSuccess = createAction(
  types.JOIN_TO_LEAGUE_SUCCESS,
  resolve => () => resolve()
);
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
