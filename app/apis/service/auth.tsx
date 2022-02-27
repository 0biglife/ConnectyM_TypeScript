import client from './client';
import {AuthResult, User} from '../model/data';

interface RegisterParams {
  username: string;
  email: string;
  password: string;
}

interface LoginParams {
  identifier: string;
  password: string;
}

export const register = async (params: RegisterParams) => {
  const response = await client.post<AuthResult>(
    '/auth/local/register',
    params,
  );
  return response.data;
};

export const login = async (params: LoginParams) => {
  const response = await client.post<AuthResult>('/auth/local', params);
  return response.data;
};

export const getLoginStatus = async () => {
  const response = await client.get<User>('/users/me');
  return response.data;
};
