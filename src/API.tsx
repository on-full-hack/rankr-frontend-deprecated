import axios from 'axios';
import {string} from 'prop-types';

const api_url = 'http://localhost:8080';

const token = () => {
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
      `${api_url}/sign-up`,
      {
        username: username,
        password: password
      },
      {
        headers: {'Content-Type': 'application/json'}
      }
    ),
  login: async ({username, password}: Credentials) =>
    await axios.post(
      `${api_url}/login`,
      {
        username: username,
        password: password
      },
      {
        headers: {'Content-Type': 'application/json'}
      }
    ),
  createLeague: async ({name, description, discipline, type}: League) =>
    await axios.post(
      `${api_url}/leagues`,
      {
        name: name,
        description: description,
        discipline: discipline,
        type: type
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token()}`
        }
      }
    )
};
