import {User} from '@react-native-google-signin/google-signin';
import client from './testClient';

interface Article {
  ok: boolean;
  users: UserInfo;
}

interface UserInfo {
  id: string;
  name: string;
  thumbnailUrl: string;
}

//NewsFeed
export const getUserInfo = async () => {
  const response = await client.get<Article[]>('/users');
  return response.data;
};
