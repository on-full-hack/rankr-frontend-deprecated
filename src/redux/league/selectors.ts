import Types from 'MyTypes';

export const getLeagues = (state: Types.RootState) =>
  Object.values(state.leagues.all);

export const getById = (state: Types.RootState, id: number) =>
  state.leagues.all[id];
