import connection from "../services/database.service";
import { iUser, iUserLogin } from "./interface/iUser";

class User {
  async saveUser(users: iUser) {
    const queryStr =
      "INSERT INTO public.usuaria (estado, email, password, rol) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [
      users.estado,
      users.email,
      users.password,
      users.rol,
    ] as string[];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }
  async getOneUser(id: any) {
    const queryStr =
      'SELECT "id", estado, email, rol FROM public.usuaria WHERE "id"= $1';
    const result: any = await connection.query(queryStr, [id]);
    console.dir(result);
    return result.rows[0];
  }
  async getUserByEmail(email: any) {
    const queryStr = "SELECT * FROM public.usuaria WHERE email= $1";
    const values = [email];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }
  async getAllUsers() {
    const queryStr = 'SELECT "id", estado, email, rol FROM public.usuaria';
    const result: any = await connection.query(queryStr, []);
    console.dir(result);
    return result.rows;
  }
  async modifUser(userParam: iUser) {
    const user = await this.getOneUser(userParam.id);
    const queryStr =
      "UPDATE public.usuaria SET (email, estado, rol) = ($1, $2, $3)  WHERE id = $4 RETURNING *";
    const result: any = await connection.query(queryStr, [
      userParam.email,
      userParam.estado,
      userParam.rol,
      userParam.id,
    ]);
    return result.rows[0];
  }

  async deleteUser(id: any) {
    const queryStr = "DELETE FROM public.usuaria WHERE 'id'=$1 RETURNING *";
    const result: any = await connection.query(queryStr, [id]);
    return result.rows;
  }
}

export default new User();
