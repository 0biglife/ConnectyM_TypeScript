import {Article} from '../../model/data';
import client from '../client';

//NewsFeed
export const getArticles = async () => {
  const response = await client.get<Article[]>('/articles');
  return response.data;
};

//Upload
export const writeArticles = async (params: {body: string; uri: string}) => {
  const response = await client.post<Article>('/articles', params);
  return response.data;
};
