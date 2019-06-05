import axios from 'axios';

const API_URL = 'http://localhost:4000';

const getToken = () => {
  return localStorage.getItem('token');
};

type Credentials = {
  username: string;
  password: string;
};

enum LeagueTypes {
  PUBLIC,
  PRIVATE
}

type League = {
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
  signup: async ({username, password}: Credentials) =>
    await axios.post(
      `${API_URL}/sign-up`,
      {
        username,
        password
      },
      {
        headers: {'Content-Type': 'application/json'}
      }
    ),
  login: async ({username, password}: Credentials) =>
    await axios.post(
      `${API_URL}/login`,
      {
        username,
        password
      },
      {
        headers: {'Content-Type': 'application/json'}
      }
    ),
  createLeague: async ({name, description, discipline, type}: League) =>
    await axios.post(
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
    ),
  getAllLeagues: async () =>
    await axios.get(`${API_URL}/leagues`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken()
      }
    }),
  inviteUserToLeagueAsAdmin: async ({userId, leagueId}: LeaguePlayerId) =>
    await axios.post(
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
  joinToLeague: async ({leagueId}: {leagueId: number}) =>
    await axios.post(
      `${API_URL}/leagues/user/join/${leagueId}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken()
        }
      }
    ),
  removeUserFromLeague: async ({userId, leagueId}: LeaguePlayerId) =>
    await axios.delete(`${API_URL}/leagues/user/${userId}/league/${leagueId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken()
      }
    }),
  updateLeague: async ({id, description, discipline, name, type}: League) =>
    await axios.put(
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
