import axios from 'axios';
const url = 'https://api.github.com/repos/facebook/react';
const authToken = process.env.REACT_APP_TOKEN;

const api = axios.create({
  baseURL: url,
  headers: {
    Authorization: authToken,
    Accept: 'application/vnd.github+json',
  },
});

export default api;
