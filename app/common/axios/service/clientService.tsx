import axios from 'axios';

const client = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    Accept: 'application/json',
    useQueryString: 'true',
  },
});

// client.interceptors.request.use(
  
// )

export default client;
