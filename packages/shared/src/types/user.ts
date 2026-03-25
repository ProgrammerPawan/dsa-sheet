export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  createdAt: string;
}
export interface AuthPayload {
  token: string;
  user: User;
}
export interface LoginCredentials {
  username: string;
  password: string;
}
export interface RegisterCredentials extends LoginCredentials {
  name: string;
  email: string;
}
