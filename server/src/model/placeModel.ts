import connection from "../services/database.service";
import { iPlace } from "./interface/iPlace";

class Place {

  async getAllPlaces() {
    const queryStr = 'SELECT   "id", estado, nombre, foto, descripcion, horario, telefono1, telefono2, email1, email2, web, redsocial1, redsocial2,redsocial3, aforo, transporte, equipamiento, notas, lgtbifriend, petfriend, accesible, direccion FROM public.espacio';
    const result: any = await connection.query(queryStr, []);
    return result.rows;
  }
  async getOnePlace(id: any){
    const queryStr = 'SELECT * FROM public.espacio WHERE id=$1;'
    const result:any = await connection.query(queryStr,[id])
    return result.rows[0];
}

}
export default new Place();