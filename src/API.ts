import axios from './lib/axios';

type Credentials = {
  username: string;
  password: string;
};

export enum LeagueTypes {
  PUBLIC,
  PRIVATE
}

export type League = {
  id?: number;
  name: string;
  description: string;
  discipline: string;
  type: LeagueTypes;
};

type LeaguePlayerId = {
  userId: number;
  leagueId: number;
};

export const API = {
  signup: ({username, password}: Credentials) =>
    axios.post('sign-up', {
      username,
      password
    }),
  login: ({username, password}: Credentials) =>
    axios.post(`login`, {
      username,
      password
    }),
  createLeague: async ({
    name,
    description,
    discipline,
    type
  }: League): Promise<League> => {
    const response = await axios.post(`leagues`, {
      name,
      description,
      discipline,
      type
    });

    return response.data.specificContract;
  },
  getAllLeagues: async () => {
    const response = await axios.get('leagues');
    return response.data.specificContract;
  },
  getLeagueDetails: async () => {
    const response = await axios.get(`leagues`);
    return response.data.specificContract;
  },
  inviteUserToLeagueAsAdmin: ({userId, leagueId}: LeaguePlayerId) =>
    axios.post(`leagues/user`, {
      userId,
      leagueId
    }),

  joinToLeague: ({leagueId}: {leagueId: number}) =>
    axios.post(`leagues/user/join/${leagueId}`, {}),

  removeUserFromLeague: ({userId, leagueId}: LeaguePlayerId) =>
    axios.delete(`leagues/user/${userId}/league/${leagueId}`),

  updateLeague: ({id, description, discipline, name, type}: League) =>
    axios.put(`leagues`, {
      id,
      description,
      discipline,
      name,
      type
    })
};
