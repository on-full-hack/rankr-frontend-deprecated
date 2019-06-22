import Types from 'MyTypes';
import {League} from '../../API';

export const getLeagues = (state: Types.RootState) =>
  Object.values(state.leagues.all);
