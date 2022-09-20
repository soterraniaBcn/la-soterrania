export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUser extends iUserLogin {
  id?: number;
  estado: boolean;
  rol: string;
}
