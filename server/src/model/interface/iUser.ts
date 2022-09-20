export interface iUserLogin {
  email1: string;
  password: string;
}

export interface iUser extends iUserLogin {
  id_usuaria?: number;
  estado: boolean;
  rol: string;
}
