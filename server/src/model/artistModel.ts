import connection from "../services/database.service";
import { iArtist } from "./interface/iArtist";

class Artist {

  async getAllArtists() {
    const queryStr = 'SELECT "id", estado, nombre, foto, genero, descripcion, instrumentacion, telefono1, telefono2, email, web, redsocial1, redsocial2, redsocial3, notas, id_usuaria, id_ciudad FROM public.artista';
    const result: any = await connection.query(queryStr, []);
    return result.rows;
  }

  async getOneArtist(id: any){
    const queryStr = 'SELECT * FROM public.artista WHERE id=$1;'
    const result:any = await connection.query(queryStr,[id])
    return result.rows[0];
}

  async saveArtist(artists: iArtist) {
    const queryStr =
      "INSERT INTO public.artista (estado, nombre, foto, genero, descripcion, generomusical, instrumentacion, telefono1, telefono2, email, web, redsocial1, redsocial2, redsocial3, notas, id_usuaria, id_ciudad) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *";
    const values = [
      artists.estado,
      artists.nombre,
      artists.foto || null,
      artists.genero || null,
      artists.descripcion,
      artists.generomusical, 
      artists.instrumentacion || null,
      artists.telefono1,
      artists.telefono2 || null,
      artists.email,
      artists.web,
      artists.redsocial1 || null,
      artists.redsocial2 || null,
      artists.redsocial3 || null,
      artists.notas || null,
      artists.id_usuaria,
      artists.id_ciudad,
    ] as string[];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }
  async modifyArtist(artist: iArtist){
    const queryStr='UPDATE artista SET (estado, nombre, foto, genero, descripcion, generomusical, instrumentacion, telefono1, telefono2, email, web, redsocial1, redsocial2, redsocial3, notas, id_usuaria, id_ciudad) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)  WHERE id = $18 RETURNING *';
    console.dir({artist,queryStr})
    const result:any = await connection.query(queryStr,[artist.estado,
      artist.nombre,
      artist.foto,
      artist.genero,
      artist.descripcion,
      artist.generomusical, 
      artist.instrumentacion,
      artist.telefono1,
      artist.telefono2,
      artist.email,
      artist.web,
      artist.redsocial1,
      artist.redsocial2,
      artist.redsocial3,
      artist.notas,
      artist.id_usuaria,
      artist.id_ciudad,
      artist.id]);
    return result.rows;
  }

  async deleteArtist(id:any){
    const queryStr = 'DELETE FROM public.artista WHERE id=$1 RETURNING *';
    const result:any= await connection.query(queryStr, [id]);
    return result.rows;
}
}
export default new Artist();