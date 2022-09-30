import Router from "express";
import userController from "../controllers/userController";
import admin from "../middlewares/admin";
import { encryptPassword } from "../middlewares/auth";
import jwt from "../middlewares/jwt";
import canDelete from "../middlewares/canDelete";

const router = Router();

router.post("/user", encryptPassword, userController.saveUser);
router.get(
  "/users",
  jwt.validateToken,
  admin.checkRol,
  userController.getAllUsers
);
router.get("/users/:id", jwt.validateToken, userController.getOneUser);
router.put(
  "/users/:id",
  jwt.validateToken,
  admin.checkRol,
  userController.modifUser
);
router.delete(
  "/user/:id",
  jwt.validateToken,
  canDelete.checkCanDelete,
  userController.deleteUser
);

export default router;
