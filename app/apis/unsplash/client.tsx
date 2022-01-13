import axios, {AxiosInstance} from 'axios';
import {accessKey, baseUrl} from './config';

const apiClient: AxiosInstance = axios.create({
  headers: {
    Authorization: accessKey,
  },
  baseURL: baseUrl + `/search/collections/?client_id=${accessKey}`,
});

export default apiClient;
