import axios, {AxiosInstance} from 'axios';
import base64 from 'react-native-base64';
import {clientId} from './config';

const apiUrl = 'https://accounts.spotify.com';
const clientSecret = '5536c8243998442697e700e0433f5310';

const base64Credentials = base64.encode(clientId);

const naverAPI: AxiosInstance = axios.create({
  headers: {
    'X-Naver-Client-Id': clientId,
    'X-Naver-Client-Secret': 'p8ERfn2Kxz',
  },
  baseURL: 'https://openapi.naver.com',
});

export default naverAPI;
