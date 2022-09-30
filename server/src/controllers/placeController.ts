import { Request, Response } from "express";
import placeModel from "../model/placeModel";
import { iPlace } from "../model/interface/iPlace"

const placeController = {
    getAllPlaces: async (req: Request, res: Response) => {
      try {
        const result: any = await placeModel.getAllPlaces();
        result
          ? res.status(200).json(result)
          : res.status(500).send("Hi ha hagut un error fent l'obtenció de dades");
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    },
    getOnePlace: async (req: Request, res: Response) => {
      try {
        const param = req.params.id;
        const place: any = await placeModel.getOnePlace(param);
        res.json(place);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    },  
    savePlace: async (req: Request, res: Response) => {
      try {
        const {
          id,
          estado,
          nombre,
          foto,
          descripcion,
          horario,
          telefono1,
          telefono2,
          email1,
          email2,
          web,
          redsocial1,
          redsocial2,
          redsocial3,
          aforo,
          transporte,
          equipamiento,
          notas,
          lgtbifriend,
          petfriend,
          accesible,
          latitud,
          longitud, 
          direccion, 
          id_ciudad,
          id_usuaria,
        }: iPlace = req.body;
  
        if (
          !estado ||
          !nombre ||
          !foto ||
          !descripcion ||
          !telefono1 ||
          !email1 ||
          !web ||
          !latitud ||
          !longitud ||
          !direccion||
          !id_usuaria ||
          !id_ciudad
        ) {
          res
            .status(400)
            .send(
              "El camps nom, imatge, descripció, telèfon1, email, web, latitud, longitud, direcció, id_usuaria, id_ciudad són obligatoris"
            );
          return;
        }
  
        const result = await placeModel.savePlace({
          id,
          estado,
          nombre,
          foto,
          descripcion,
          horario,
          telefono1,
          telefono2,
          email1,
          email2,
          web,
          redsocial1,
          redsocial2,
          redsocial3,
          aforo,
          transporte,
          equipamiento,
          notas,
          lgtbifriend,
          petfriend,
          accesible,
          latitud,
          longitud, 
          direccion, 
          id_ciudad,
          id_usuaria,
        });
        result
          ? res.status(200).json(result)
          : res.status(500).send("No s'ha pogut crear un nou espai");
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    },
    modifySpace: async (req: Request, res: Response) => {
      try {
        const {
          id,
          estado,
          nombre,
          foto,
          descripcion,
          horario,
          telefono1,
          telefono2,
          email1,
          email2,
          web,
          redsocial1,
          redsocial2,
          redsocial3,
          aforo,
          transporte,
          equipamiento,
          notas,
          lgtbifriend,
          petfriend,
          accesible,
          latitud,
          longitud, 
          direccion, 
          id_ciudad,
          id_usuaria,
        }: iPlace= req.body;
  
        await placeModel.modifyPlace({
          id,
          estado,
          nombre,
          foto,
          descripcion,
          horario,
          telefono1,
          telefono2,
          email1,
          email2,
          web,
          redsocial1,
          redsocial2,
          redsocial3,
          aforo,
          transporte,
          equipamiento,
          notas,
          lgtbifriend,
          petfriend,
          accesible,
          latitud,
          longitud, 
          direccion, 
          id_ciudad,
          id_usuaria,
        });
  
        const result = await placeModel.getOnePlace(id);
  
        result
          ? res.status(201).json(result)
          : res.status(500).send("No s'ha pogut modificar l'espai");
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    },
    deleteSpace: async (req: Request, res: Response) => {
      try {
        const param = req.params.id;
        const result = await placeModel.deletePlace(param);
        result
          ? res
              .status(201)
              .json({ result: `L'espai amb ID: ${param} està eliminat` })
          : res.status(500).send("No s'ha pogut borrar l'espai seleccionat");
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    },
};
export default placeController;