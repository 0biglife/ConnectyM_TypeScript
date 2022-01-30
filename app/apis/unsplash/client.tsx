import axios, {AxiosInstance} from 'axios';
import {accessKey, baseUrl} from './config';

const Unsplash: AxiosInstance = axios.create({
  headers: {
    Authorization: accessKey,
  },
  // baseURL: `${baseUrl}/?client_id=${accessKey}`,
  baseURL: baseUrl,
});

export default Unsplash;
