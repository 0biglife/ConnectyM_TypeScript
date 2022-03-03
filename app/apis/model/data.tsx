//HTTP MODELS
import {AxiosError} from 'axios';

export interface GoogleUser {
  idToken: string;
  scopes: string[];
  serverAuthCode: string;
  user: {
    email: string;
    familyName: string;
    givenName: string;
    id: string;
    name: string;
    photo: string;
  };
}

export interface Response {
  ok: boolean;
  users: User;
}

export interface ResponseFeed {
  ok: boolean;
  feed: Feed;
}

export interface Feed {
  id: number;
  name: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  postTime: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: null | string;
  role: number;
  created_at: string;
  updated_at: string;
  thumbnailUrl: string;
}

export interface Article {
  id: number;
  title: string;
  body: string;
  url: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  message: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  isLoggedIn: boolean;
}

export interface AuthResult {
  jwt: string;
  user: User | null;
}

//Error
type AuthErrorData = {
  messages: {
    id: string;
    message: string;
  }[];
}[];

export type AuthError = AxiosError<{
  statusCode: number;
  error: string;
  message: AuthErrorData;
  data: AuthErrorData;
}>;
