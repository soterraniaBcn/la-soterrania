import { Request, Response } from "express";
import { iEvent } from "../model/interface/iEvent";
import eventModel from '../model/eventModel'

const eventController = {
    getAllEvents: async (req: Request, res: Response) => {
        try {
          const result: any = await eventModel.getAllEvents();
          result
            ? res.status(200).json(result)
            : res.status(500).send("Hubo un error en la obtención los datos");
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      },
}

export default eventController;