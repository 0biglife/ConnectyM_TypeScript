import axios, {AxiosInstance} from 'axios';
import base64 from 'react-native-base64';
import clientId from './config';

const apiUrl = 'https://accounts.spotify.com';
const clientSecret = '5536c8243998442697e700e0433f5310';

const base64Credentials = base64.encode(clientId + ':' + clientSecret);

const apiClient: AxiosInstance = axios.create({
  headers: {
    Authorization: `Basic ${base64Credentials}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  baseURL: apiUrl,
});

export default apiClient;
