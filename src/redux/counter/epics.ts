import {Epic} from 'redux-observable';
import {from, of} from 'rxjs';
import {switchMap, filter, map, catchError} from 'rxjs/operators';
import {isActionOf} from 'typesafe-actions';
import Types from 'MyTypes';
import {setCounterAsync} from './api';

import * as actions from './actions';

const setCounterAsyncEpic: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState
> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.incrementAsync)),
    switchMap(() =>
      from(setCounterAsync()).pipe(
        map(actions.incrementAsyncSuccess),
        catchError(() => of(actions.incrementAsyncFailure()))
      )
    )
  );

export default [setCounterAsyncEpic];
