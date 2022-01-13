import axios, {AxiosInstance} from 'axios';
import base64 from 'react-native-base64';

// const redirectUrl = 'http://localhost:3000/redirect';
const apiUrl = 'http://accounts.spotify.com/api';
const clientId = '6d8a44a004eb49a8bdee52ea0a707b1a';
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
