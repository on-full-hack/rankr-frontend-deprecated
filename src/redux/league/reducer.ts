import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import * as types from './types';
import {League} from '../../API';

export type LeagueState = {
  all: Map<number, League>;
  matches: string[];
  players: string[];
};

export type LeagueAction = ActionType<typeof actions>;

const defaultState = {all: new Map<number, League>(), players: [], matches: []};

const createMapFromList = (list: League[]): Map<number, League> =>
  list.reduce(
    (acc, league) => {
      if (league.id) {
        return {...acc, [league.id]: league};
      }
      return acc;
    },
    {} as Map<number, League>
  );

export const reducer = (
  state: LeagueState = defaultState,
  action: LeagueAction
): LeagueState => {
  switch (action.type) {
    case types.CREATE_LEAGUE_SUCCESS: {
      const {league} = action.payload;
      if (league.id) {
        return {...state, all: {...state.all, [league.id]: league}};
      }
      return state;
    }
    case types.FETCH_LEAGUES_SUCCESS: {
      const {leagues} = action.payload;
      return {...state, all: createMapFromList(leagues)};
    }
    case types.FETCH_LEAGUE_DETAILS_SUCCESS: {
      const {
        leagueDetails: {matches, players, ...league}
      } = action.payload;
      console.log('league', league);
      return {
        ...state,
        all: {...state.all, [league.id]: league},
        matches: {...state.matches, ...matches},
        players: {...state.players, ...players}
      };
    }
    default:
      return state;
  }
};

export default reducer;
