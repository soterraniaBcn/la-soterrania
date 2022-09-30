import Router from "express";
import artistController from "../controllers/artistController";
import jwt from "../middlewares/jwt";
import admin from "../middlewares/admin";

const router = Router();

router.get("/artistes", jwt.validateToken, artistController.getAllArtists);
router.get("/artistes/:id", jwt.validateToken, artistController.getOneArtist);
router.post(
  "/artistes",
  jwt.validateToken,
  admin.checkRol,
  artistController.saveArtist
);
router.put(
  "/artistes/:id",
  jwt.validateToken,
  admin.checkRol,
  artistController.modifyArtist
);
router.delete(
  "/artistes/:id",
  jwt.validateToken,
  admin.checkRol,
  artistController.deleteArtist
);

export default router;
