import axios, {AxiosInstance} from 'axios';
import {Article, Comment, Feed} from '../model/data';

const baseurl = 'http://localhost:3000/api';

// const baseurl = __DEV__ ? 'http://localhost:1337' : 'http://localhost:1337';

const apiClient: AxiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  },
  baseURL: baseurl,
});

export default apiClient;

export const getPosts = async () => {
  const response = await apiClient.get<Feed[]>('/feeds');
  return response.data;
};

export const getArticles = async () => {
  const response = await apiClient.get<Article[]>('/articles');
  return response.data;
};

export const getArticle = async (id: number) => {
  const response = await apiClient.get<Article>(`/articles/${id}`);
  return response.data;
};

export const getComments = async (articleId: number) => {
  const response = await apiClient.get<Comment[]>(
    `/articles/${articleId}/comments`,
  );
  return response.data;
};
