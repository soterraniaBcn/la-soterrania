import { Request, Response } from "express";
import { iEvent } from "../model/interface/iEvent";
import eventModel from '../model/eventModel'

const eventController = {
    getAllEvents: async (req: Request, res: Response) => {
        try {
          const result: any = await eventModel.getAllEvents();
          result
            ? res.status(200).json(result)
            : res.status(500).send("Hi ha hagut un error fent l'obtenció de dades");
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      },
      saveEvent: async (req: Request, res: Response) => {
        try {
          const {
            nombre,
            foto,
            descripcion,
            ubicacion,
            organizacion,
            telefono1,
            telefono2,
            email1,
            email2,
            web,
            redsocial1,
            redsocial2,
            redsocial3,
            fechainicio,
            horainicio,
            fechafin,
            horafin,
          }: iEvent = req.body;
    
          if (
            !nombre ||
            !foto ||
            !descripcion ||
            !ubicacion ||
            !organizacion ||
            !email1 ||
            !web ||
            !fechainicio ||
            !horainicio ||
            !fechafin ||
            !horafin
          ) {
            res
              .status(400)
              .send(
                "El camps nom, imatge, descripció, ubicació, organització, email, web, dada d'inici, hora d'inici, dada final i hora final són obligatoris"
              );
            return;
          }
          const result = await eventModel.saveEvent({
            estado :true,
            nombre,
            foto,
            descripcion,
            ubicacion,
            organizacion,
            telefono1,
            telefono2,
            email1,
            email2,
            web,
            redsocial1,
            redsocial2,
            redsocial3,
            fechainicio,
            horainicio,
            fechafin,
            horafin,
          });
          result
            ? res.status(200).json({ result: result })
            : res.status(500).send("No s'ha pogut crear un nou esdeveniment");
        } catch (error: any) {
          res.status(400).send(error.message);
        }
}}

export default eventController;