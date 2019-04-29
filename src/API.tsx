import axios from 'axios';

const api_url = 'http://localhost:8080';

const token = () => {
  return localStorage.getItem('token');
};

export const API = {
  signup: async ({username, password}) =>
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
  login: async ({username, password}) =>
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
  createLeague: async ({name, description, discipline, type}) =>
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
