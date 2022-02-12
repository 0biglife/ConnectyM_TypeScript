import axios, {AxiosInstance} from 'axios';

const baseurl = __DEV__
  ? 'http://localhost:3000/api'
  : 'http://localhost:3000/api';

const apiClient: AxiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    // 'Authorization': '${TOKEN}',
  },
  baseURL: baseurl,
});

export default apiClient;
