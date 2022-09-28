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
};
export default placeController;