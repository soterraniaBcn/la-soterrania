import { Request, Response } from "express";
import artistsModel from "../model/artistsModel";
import { iArtist } from "../model/interface/iArtist";

const artistsController = {
  saveArtist: async (req: Request, res: Response) => {
    try {
      const {
        estado,
        nombre,
        foto,
        genero,
        descripcion,
        generomusical,
        instrumentacion,
        telefono1,
        telefono2,
        email,
        web,
        redsocial1,
        redsocial2,
        redsocial3,
        notas,
        id_usuaria,
        id_ciudad,
      }: iArtist = req.body;

      if (
        !nombre ||
        !foto ||
        !descripcion ||
        !generomusical ||
        !telefono1 ||
        !email ||
        !web ||
        !id_usuaria ||
        !id_ciudad
      ) {
        res
          .status(400)
          .send(
            "El camps nom, imatge, descripció, gènere musical, telèfon1, email, web, id_usuaria, id_ciudad són obligatoris"
          );
        return;
      }

      const result = await artistsModel.saveArtist({
        estado,
        nombre,
        foto,
        genero,
        descripcion,
        generomusical,
        instrumentacion,
        telefono1,
        telefono2,
        email,
        web,
        redsocial1,
        redsocial2,
        redsocial3,
        notas,
        id_usuaria,
        id_ciudad,
      });
      result
        ? res.status(200).json({ result: result })
        : res.status(500).send("No s'ha pogut crear una nova usuària");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  },

  getAllArtists: async (req: Request, res: Response) => {
    try {
      const result: any = await artistsModel.getAllArtists();
      result
        ? res.status(200).json(result)
        : res.status(500).send("Hi ha hagut un error fent l'obtenció de dades");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  },
};
export default artistsController;
