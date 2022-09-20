import connection from "../services/database.service";
import { iUser, iUserLogin } from "./interface/iUser";

class User {
  async saveUser(users: iUser) {
    const queryStr =
      "INSERT INTO public.usuaria (estado, email1, password, rol) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [
      users.estado,
      users.email1,
      users.password,
      users.rol,
    ] as string[];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }
  async getUserById(id_usuaria: any) {
    const queryStr =
      'SELECT "id_usuaria", estado, email1, rol FROM public.usuaria WHERE "id_usuaria"= $1';
    const result: any = await connection.query(queryStr, [id_usuaria]);
    console.dir(result);
    return result.rows[0];
  }
  async getUserByEmail(email1: any) {
    const queryStr = "SELECT * FROM public.usuaria WHERE email1= $1";
    const values = [email1];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }
  async getAllUsers() {
    const queryStr =
      'SELECT "id_usuaria", estado, email1, rol FROM public.usuaria';
    const result: any = await connection.query(queryStr, []);
    console.dir(result);
    return result.rows;
  }
  async deleteUser(id_usuaria: any) {
    const queryStr =
      "DELETE FROM public.usuaria WHERE 'id_usuaria'=$1 RETURNING *";
    const result: any = await connection.query(queryStr, [id_usuaria]);
    return result.rows;
  }
}

export default new User();
