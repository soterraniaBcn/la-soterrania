import connection from "../services/database.service";
import { iPlace } from "./interface/iPlace";

class Place {
  async getAllPlaces() {
    const queryStr =
      'SELECT   "id", estado, nombre, foto, descripcion, horario, telefono1, telefono2, email1, email2, web, redsocial1, redsocial2, redsocial3, aforo, transporte, equipamiento, notas, lgtbifriend, petfriend, accesible, direccion FROM public.espacio';
    const result: any = await connection.query(queryStr, []);
    return result.rows;
  }
  async getOnePlace(id: any) {
    const queryStr = "SELECT * FROM public.espacio WHERE id=$1;";
    const result: any = await connection.query(queryStr, [id]);
    return result.rows[0];
  }
  async savePlace(place: iPlace) {
    const queryStr =
      "INSERT INTO public.espacio ( estado, nombre, foto, descripcion, horario, telefono1, telefono2, email1, email2, web, redsocial1, redsocial2, redsocial3, aforo, transporte, equipamiento, notas, lgtbifriend, petfriend, accesible, latitud, longitud, direccion, id_ciudad, id_usuaria) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) RETURNING *";
    const values = [
      place.estado,
      place.nombre,
      place.foto,
      place.descripcion,
      place.horario || null,
      place.telefono1,
      place.telefono2 || null,
      place.email1,
      place.email2 || null,
      place.web,
      place.redsocial1 || null,
      place.redsocial2 || null,
      place.redsocial3 || null,
      place.aforo,
      place.transporte || null,
      place.equipamiento || null,
      place.notas || null,
      place.lgtbifriend || null,
      place.petfriend || null,
      place.accesible || null,
      place.latitud,
      place.longitud,
      place.direccion,
      place.id_usuaria,
      place.id_ciudad,
    ] as string[];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }
  async modifyPlace(place: iPlace) {
    const queryStr =
      "UPDATE espacio SET (estado, nombre, foto, descripcion, horario, telefono1, telefono2, email1, email2, web, redsocial1, redsocial2, redsocial3, aforo, transporte, equipamiento, notas, lgtbifriend, petfriend, accesible, latitud, longitud, direccion, id_ciudad, id_usuaria) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)  WHERE id = $26 RETURNING *";
    const result: any = await connection.query(queryStr, [
      place.estado,
      place.nombre,
      place.foto,
      place.descripcion,
      place.horario,
      place.telefono1,
      place.telefono2,
      place.email1,
      place.email2,
      place.web,
      place.redsocial1,
      place.redsocial2,
      place.redsocial3,
      place.aforo,
      place.transporte,
      place.equipamiento,
      place.notas,
      place.lgtbifriend,
      place.petfriend,
      place.accesible,
      place.latitud,
      place.longitud,
      place.direccion,
      place.id_usuaria,
      place.id_ciudad,
      place.id,
    ]);
    return result.rows;
  }
  async deletePlace(id:any){
    const queryStr = 'DELETE FROM public.espacio WHERE id=$1 RETURNING *';
    const result:any= await connection.query(queryStr, [id]);
    return result.rows;
}
}
export default new Place();
