import {Request,Response} from 'express';
import artistsModel from '../model/artistsModel';
import { iArtist } from "../model/interface/iArtist";

const artistsController = {

    saveArtist: async (req: Request, res: Response) => {
        /*
        try {
          const { email, password, id: id, estado, rol }: iArtist = req.body;
    
          if (!email || !password) {
            res.status(400).send("Falta el correo electrónico o contraseña");
          }
    
          const result = await artistsModel.saveArtist({
            email,
            password,
            id,
            estado,
            rol,
          });
          result
            ? res.status(200).json({ result: result })
            : res.status(500).send("No se pudo crear un nuevo usuario");
        } catch (error: any) {
          res.status(400).send(error.message);
        } */
      },

    getAllArtists: async (req: Request, res: Response) => {
    try {
      const result: any = await artistsModel.getAllArtists();
      result
        ? res.status(200).json(result)
        : res.status(500).send("Hubo un error en la obtención los datos");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  },
}
export default artistsController