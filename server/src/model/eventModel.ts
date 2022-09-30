import connection from "../services/database.service";
import {iEvent} from './interface/iEvent'
class Event {
    async getAllEvents() {
        const queryStr = 'SELECT nombre, descripcion, ubicacion, fechainicio, horainicio, horafin FROM public.evento';
        const result: any = await connection.query(queryStr, []);
        console.dir(result);
        return result.rows;
      }
      async getOneEvent(id: any){
        const queryStr = 'SELECT * FROM public.evento WHERE id=$1;'
        const result:any = await connection.query(queryStr,[id])
        return result.rows[0];
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
      async modifyEvent(event: iEvent){
        const queryStr='UPDATE evento SET (estado, nombre, foto,descripcion, ubicacion, organizacion, telefono1, telefono2,email1, email2, web, redsocial1, redsocial2, redsocial3,fechainicio, horainicio, fechafin, horafin) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)  WHERE id = $19 RETURNING *';
        const result:any = await connection.query(queryStr,[event.estado,
          event.nombre,
          event.foto,
          event.descripcion,
          event.ubicacion,
          event.organizacion, 
          event.telefono1 || null,
          event.telefono2 || null,
          event.email1,
          event.email2 || null,
          event.web,
          event.redsocial1 || null,
          event.redsocial2 || null,
          event.redsocial3 || null,
          event.fechainicio,
          event.horainicio,
          event.fechafin,
          event.horafin,
          event.id]);
        return result.rows;
      }
      async deleteEvent(id:any){
        const queryStr = 'DELETE FROM public.artista WHERE id=$1 RETURNING *';
        const result:any= await connection.query(queryStr, [id]);
        return result.rows;
    }
}

export default new Event();
