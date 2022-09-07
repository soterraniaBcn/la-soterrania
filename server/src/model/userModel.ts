import connection from "../services/database.service";
import { iUser, iUserLogin } from "./interface/iUser";

class User {
  async getUser(users: iUserLogin) {
    const queryStr = "SELECT * FROM soterraniatestschema.usuarias WHERE email1= $1";
    const values = [users.email1];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }
}

export default new User();
