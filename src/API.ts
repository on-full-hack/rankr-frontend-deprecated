import axios from 'axios';

const API_URL = 'http://localhost:8080';

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
  name: string;
  description: string;
  discipline: string;
  type: LeagueTypes;
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
    )
};
