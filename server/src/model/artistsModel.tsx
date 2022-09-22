import connection from "../services/database.service";

//revisar
import { iUser, iUserLogin } from "./interface/iUser";

class User {
  async saveUser(users: iUser) {
    const queryStr =
      "INSERT INTO public.usuarias (estado, email, password, rol) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [
      users.estado,
      users.email,
      users.password,
      users.rol,
    ] as string[];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }
}
