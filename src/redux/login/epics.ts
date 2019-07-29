import {Epic} from 'redux-observable';
import {isActionOf} from 'typesafe-actions';
import {mergeMap, filter, catchError} from 'rxjs/operators';
import {push} from 'connected-react-router';
import {of} from 'rxjs';
import Types from 'MyTypes';
import * as actions from './actions';
import {API} from '../../API';

const loginEpic: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState
> = action$ =>
  action$.pipe(
    filter(isActionOf(actions.login)),
    mergeMap(action =>
      of(API.login(action.payload)).pipe(
        mergeMap(response => {
          return of(actions.loginSuccess(), push('/'));
        }),
        catchError(error => {
          return of(
            actions.loginError({
              code: 'invalid-credentials',
              message: 'Invalid credentials'
            })
          );
        })
      )
    )
  );

export default [loginEpic];
