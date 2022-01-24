import axios, {AxiosInstance} from 'axios';

const apiClient: AxiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    // 'Authorization': '${TOKEN}',
  },
  baseURL: 'http://localhost:3000/api',
});

export default apiClient;
