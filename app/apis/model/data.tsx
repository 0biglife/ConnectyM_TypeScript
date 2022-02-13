//HTTP MODELS

export interface Response {
  ok: boolean;
  users: User;
}

export interface User {
  id: number;
  name: string;
  thumbnailUrl: string;
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

export interface Article {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  postTime: string;
  user: User;
  comments: Comment;
}

export interface Comment {
  id: number;
  message: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResult {
  jwt: string;
  user: User;
}
