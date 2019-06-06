import {Epic} from 'redux-observable';
import {isActionOf, ActionType} from 'typesafe-actions';
import {mergeMap, filter} from 'rxjs/operators';
import Types from 'MyTypes';
import * as actions from './actions';
import {API} from '../../API';

const createLeagueEpic: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState
> = action$ =>
  action$.pipe(
    filter(isActionOf(actions.createLeague)),
    mergeMap(async action => {
      const league = await API.createLeague(action.payload.league);
      return actions.createLeagueSuccess();
    })
  );

export default [createLeagueEpic];
