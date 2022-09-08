import connection from "../services/database.service";
import { iUser, iUserLogin } from "./interface/iUser";

class User {
  async saveUser(users: iUser){
    const queryStr='INSERT INTO soterraniatestschema.usuarias ("id-usuaria", estado, email1, password, rol) VALUES ($1, $2, $3, $4, $5) RETURNING *'
    const values = [users["id-usuaria"], users.estado, users.email1, users.password, users.rol] as string[]
    const result:any = await connection.query(queryStr,values)
    return result.rows[0];
   
}
  async getUser(users: iUserLogin) {
    const queryStr = "SELECT * FROM soterraniatestschema.usuarias WHERE email1= $1";
    const values = [users.email1];
    const result: any = await connection.query(queryStr, values);
    return result.rows[0];
  }
}

export default new User();