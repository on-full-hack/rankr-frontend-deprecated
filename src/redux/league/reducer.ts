import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import * as types from './types';
import {League} from '../../API';

export type LeagueState = {
  all: Map<number, League>;
};

export type LeagueAction = ActionType<typeof actions>;

const defaultState = {all: new Map<number, League>()};

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
    default:
      return state;
  }
};

export default reducer;
