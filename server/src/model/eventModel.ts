import connection from "../services/database.service";
import {iEvent} from './interface/iEvent'
class Event {
    async getAllEvents() {
        const queryStr = 'SELECT nombre, descripcion, ubicacion, fechainicio, horainicio, horafin FROM public.evento';
        const result: any = await connection.query(queryStr, []);
        console.dir(result);
        return result.rows;
      }
}

export default new Event();
