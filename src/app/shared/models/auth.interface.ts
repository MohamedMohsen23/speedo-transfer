export interface RegisterUserData {
  email: string;
  userName: string;
  password: string;
  gender: string;
  dateOfBirth: string;
  country: string;
}

export interface LoginResponse {
  messsage: string;
  status: string;
  token: string;
}
