export type TSearch = string;

export interface IuserInfo {
  message: string;
  name: string | null;
  login: string | null;
  created_at: string | number | date;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string | null;
  twitter_username: string | null;
  company: string;
}
