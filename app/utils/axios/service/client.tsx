import axios from 'axios';

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  },
  baseURL: 'https://newsapi.org/v2/',
});

export default api;
