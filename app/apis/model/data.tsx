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
