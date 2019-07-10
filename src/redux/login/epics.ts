import {Epic} from 'redux-observable';
import {isActionOf} from 'typesafe-actions';
import {mergeMap, filter} from 'rxjs/operators';
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
    mergeMap(async action => {
      const {payload} = action;
      try {
        const response = await API.login(payload);
        localStorage.setItem('token', response.headers.authorization);
      } catch (error) {
        return actions.loginError({
          code: 'invalid-credentials',
          message: 'Invalid credentials'
        });
      }
      return actions.loginSuccess('abaisdb');
    })
  );

export default [loginEpic];
