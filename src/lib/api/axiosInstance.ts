import axios from 'axios';
const url = 'https://www.pre-onboarding-selection-task.shop';
const authToken = process.env.REACT_APP_TOKEN;

const api = axios.create({
  baseURL: url,
  headers: {
    Authorization: authToken,
    Accept: 'application/vnd.github+json',
  },
});

export default api;
