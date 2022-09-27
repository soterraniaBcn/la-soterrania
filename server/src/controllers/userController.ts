import { Request, Response } from "express";
import { iUser } from "../model/interface/iUser";
import userModel from "../model/userModel";

const userController = {
  saveUser: async (req: Request, res: Response) => {
    try {
      const { email, password, id: id, estado, rol }: iUser = req.body;

      if (!email || !password) {
        res.status(400).send("Falta el correu electrònic o la contrasenya");
      }

      const result = await userModel.saveUser({
        email,
        password,
        id,
        estado,
        rol,
      });
      result
        ? res.status(200).json({ result: result })
        : res.status(500).send("No es va poder crear un nou usuari");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  },

  getUserById: async (req: Request, res: Response) => {
    try {
      const param = req.params.id;
      const user: any = await userModel.getUserById(param);
      res.json(user);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  },

  getAllUsers: async (req: Request, res: Response) => {
    try {
      const result: any = await userModel.getAllUsers();
      result
        ? res.status(200).json(result)
        : res.status(500).send("Va haver-hi un error en l'obtenció les dades");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  },
  /*
    modifUser: async (req:Request,res:Response) => {
        try{
                const{nombre, email, password, rol, permisos, ...users}: iUser= req.body
                console.dir(req.query)
                const result = await userModel.modifUser({user_id, nombre, email, password, rol, permisos, ...users});
                console.log(result.rows[0])
                const result = await userModel.modifUser(req.params.user_id, req.query)
                result
                ? res.status(200).json({result})
                : res.status(500).send('No se pudo modificar el usuario');
         }catch (error: any){
                res.status(400).send(error.message);
        }
    },
    */
  deleteUser: async (req: Request, res: Response) => {
    try {
      const param = req.params.id;
      const result = await userModel.deleteUser(param);
      result
        ? res.status(200).json({ result: `user deleted with ID: ${param}` })
        : res.status(500).send("No es va poder esborrar l'usuari seleccionat");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  },
};
export default userController;
