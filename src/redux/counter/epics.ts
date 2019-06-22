import {Epic} from 'redux-observable';
import {mergeMap, filter} from 'rxjs/operators';
import {isActionOf, ActionType} from 'typesafe-actions';
import Types from 'MyTypes';
import {setCounterAsync} from './api';
import * as actions from './actions';

const setCounterAsyncEpic: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState
> = action$ =>
  action$.pipe(
    filter(isActionOf(actions.incrementAsync)),
    mergeMap(async action => {
      const number = await setCounterAsync();
      return actions.incrementAsyncSuccess(number);
    })
  );

export default [setCounterAsyncEpic];
