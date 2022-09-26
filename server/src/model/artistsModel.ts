import connection from "../services/database.service";
import { iArtist } from "./interface/iArtist";

class Artist {
  async saveArtist(artists: iArtist) {
    const queryStr =
      "INSERT INTO public.artista (estado, nombre, foto, genero, descripcion, instrumentacion, telefono1, telefono2, email, web, redsocial1, redsocial2, redsocial3, notas, id_usuaria, id_ciudad) VALUES ($1, $2, $3, $4, $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17) RETURNING *";
    const values = [
      artists.estado,
      artists.nombre,
      artists.foto,
      artists.genero,
      artists.descripcion,
      artists.instrumentacion,
      artists.telefono1,
      artists.telefono2,
      artists.email,
      artists.web,
      artists.redsocial1,
      artists.redsocial2,
      artists.redsocial3,
      artists.notas,
      artists.id_usuaria,
      artists.id_ciudad,
    ] as string[];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }

  async getAllArtists() {
    const queryStr = 'SELECT "id", estado, nombre, foto, genero, descripcion, instrumentacion, telefono1, telefono2, email, web, redsocial1, redsocial2, redsocial3, notas, id_usuaria, id_ciudad FROM public.artista';
    const result: any = await connection.query(queryStr, []);
    return result.rows;
  }
  
}
export default new Artist();