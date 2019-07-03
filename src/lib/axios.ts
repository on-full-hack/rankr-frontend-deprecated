import axios from 'axios';

const API_URL = 'http://192.168.1.12:8080';

const getToken = () => {
  return localStorage.getItem('token');
};

const post = <T>(route: string, payload: T) =>
  axios.post(`${API_URL}/${route}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken()
    }
  });

const get = (route: string) =>
  axios.get(`${API_URL}/${route}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken()
    }
  });

const deleteMethod = (route: string) =>
  axios.delete(`${API_URL}/${route}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken()
    }
  });

const put = <T>(route: string, payload: T) =>
  axios.put(`${API_URL}/${route}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken()
    }
  });

export default {post, get, delete: deleteMethod, put};
