import connection from "../services/database.service";
import {iEvent} from './interface/iEvent'
class Event {
    async getAllEvents() {
        const queryStr = 'SELECT nombre, descripcion, ubicacion, fechainicio, horainicio, horafin FROM public.evento';
        const result: any = await connection.query(queryStr, []);
        console.dir(result);
        return result.rows;
      }
      async saveEvent(events: iEvent) {
        const queryStr =
          "INSERT INTO public.evento ( estado, nombre, foto,descripcion, ubicacion, organizacion, telefono1, telefono2,email1, email2, web, redsocial1, redsocial2, redsocial3,fechainicio, horainicio, fechafin, horafin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18 ) RETURNING *";
        const values = [
          events.estado,
          events.nombre,
          events.foto,
          events.descripcion,
          events.ubicacion,
          events.organizacion, 
          events.telefono1 || null,
          events.telefono2 || null,
          events.email1,
          events.email2 || null,
          events.web,
          events.redsocial1 || null,
          events.redsocial2 || null,
          events.redsocial3 || null,
          events.fechainicio,
          events.horainicio,
          events.fechafin,
          events.horafin,
        ] as string[];
        const result: any = await connection.query(queryStr, values);
        return result.rows[0];
      }
}

export default new Event();
