import axios from 'axios';

// const API_URL = 'http://localhost:4000';
const API_URL = 'http://192.168.1.12:8080';

const getToken = () => {
  return localStorage.getItem('token');
};

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
    axios.post(
      `${API_URL}/sign-up`,
      {
        username,
        password
      },
      {
        headers: {'Content-Type': 'application/json'}
      }
    ),
  login: ({username, password}: Credentials) =>
    axios.post(
      `${API_URL}/login`,
      {
        username,
        password
      },
      {
        headers: {'Content-Type': 'application/json'}
      }
    ),
  createLeague: async ({
    name,
    description,
    discipline,
    type
  }: League): Promise<League> => {
    const response = await axios.post(
      `${API_URL}/leagues`,
      {
        name,
        description,
        discipline,
        type
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken()
        }
      }
    );

    return response.data.detailsDTO;
  },
  getAllLeagues: () =>
    axios.get(`${API_URL}/leagues`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken()
      }
    }),
  inviteUserToLeagueAsAdmin: ({userId, leagueId}: LeaguePlayerId) =>
    axios.post(
      `${API_URL}/leagues/user`,
      {
        userId,
        leagueId
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken()
        }
      }
    ),
  joinToLeague: ({leagueId}: {leagueId: number}) =>
    axios.post(
      `${API_URL}/leagues/user/join/${leagueId}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken()
        }
      }
    ),
  removeUserFromLeague: ({userId, leagueId}: LeaguePlayerId) =>
    axios.delete(`${API_URL}/leagues/user/${userId}/league/${leagueId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken()
      }
    }),
  updateLeague: ({id, description, discipline, name, type}: League) =>
    axios.put(
      `${API_URL}/leagues`,
      {
        id,
        description,
        discipline,
        name,
        type
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken()
        }
      }
    )
};
