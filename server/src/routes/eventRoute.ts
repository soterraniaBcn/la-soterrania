import Router from "express";
import eventController from "../controllers/eventController";
import jwt from '../middlewares/jwt';

const router = Router();

router.get("/events", jwt.validateToken, eventController.getAllEvents);


export default router;
