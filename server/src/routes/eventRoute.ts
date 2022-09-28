import Router from "express";
import eventController from "../controllers/eventController";
import jwt from '../middlewares/jwt';
import admin from "../middlewares/admin";

const router = Router();

router.get("/events", jwt.validateToken, eventController.getAllEvents);
router.post(
    "/events",
    jwt.validateToken,
    admin.checkRol,
    eventController.saveEvent
  );

export default router;
