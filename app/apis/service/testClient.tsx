import axios from 'axios';

const iOSbaseurl = 'http://localhost:3000/api';

const client = axios.create({
  baseURL: iOSbaseurl,
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
