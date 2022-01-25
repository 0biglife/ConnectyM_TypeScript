//HTTP MODELS

export interface Response {
  ok: boolean;
  user: User;
}

export interface User {
  id: number;
  name: string;
}

export interface ResponseFeed {
  ok: boolean;
  feeds: Feed[];
}

export interface Feed {
  id: number;
  title: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  postTime: string;
}

//Photos
export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}

export interface Geolocation {
  lat: string;
  lng: number;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

//NewsAPI Interface
export interface inputData {
  status: string;
  roralResults: number;
  articles: Articles;
}

export interface Articles {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}
