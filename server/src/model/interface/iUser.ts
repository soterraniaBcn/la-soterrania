export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUser extends iUserLogin {
  id?: number;
  estado: boolean;
  rol: string;
  nombre: string;
  nombre_artista_espacio: string;
  descripcion: string; 
  link: string;
}
