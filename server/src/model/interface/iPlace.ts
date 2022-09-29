export interface iPlace {
    id?: number;
    estado: string;
    nombre: string;
    foto: Text;
    descripcion: string;
    horario?: string;
    telefono1: number;
    telefono2?: number;
    email1: string;
    email2?: string;
    web: string;
    redsocial1?: string;
    redsocial2?: string;
    redsocial3?: string;
    aforo?: string;
    transporte?: string; 
    equipamiento?: string; 
    notas?: string;
    lgtbifriend?: string;
    petfriend?: string; 
    accesible?: string; 
    latitud: string;
    longitud: string; 
    direccion: string; 
    id_ciudad: number;
    id_usuaria: number;
  }