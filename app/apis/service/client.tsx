import axios from 'axios';

const apiClient = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    // 'Authorization': '${TOKEN}',
  },
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default apiClient;
