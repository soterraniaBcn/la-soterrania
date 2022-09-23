import Router from "express";
import eventController from "../controllers/eventController";

const router = Router();

router.get("/events", eventController.getAllEvents);


export default router;
