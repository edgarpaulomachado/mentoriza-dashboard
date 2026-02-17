export interface SaveTokenData {
  user?: User;
  token: string;
  expiresIn?: string;
}

export interface User {
  username: string;
  email: string;
}
