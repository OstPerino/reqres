export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

// TODO: camel case in interfaces from snake case
export interface IUserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: any;
}

export interface IUserEdit {
  first_name: string;
  last_name: string;
  email: string;
}
