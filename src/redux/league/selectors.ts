import Types from 'MyTypes';

export const getLeagues = (state: Types.RootState) =>
  Object.values(state.leagues.all);
