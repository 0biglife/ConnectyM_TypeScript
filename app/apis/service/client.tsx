import axios from 'axios';
import {Platform} from 'react-native';

const iOSbaseurl = 'http://localhost:1337';
const AOSbaseurl = 'http://10.0.2.2:1337';

const client = axios.create({
  baseURL: Platform.OS === 'ios' ? iOSbaseurl : AOSbaseurl,
});

export default client;

export const applyToken = (jwt: string) => {
  console.log('Apply Token by Client : ', jwt);
  client.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};

export const clearToken = () => {
  console.log('Delete Token by Client');
  client.defaults.headers.common.Authorization = '';
};
