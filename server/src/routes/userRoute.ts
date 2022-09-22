import Router from "express";
import userController from "../controllers/userController";
import admin from "../middlewares/admin";
import { encryptPassword } from "../middlewares/auth";
import jwt from "../middlewares/jwt";
import canDelete from "../middlewares/canDelete";

const router = Router();

router.post("/user", encryptPassword, userController.saveUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.get(
  "/admin/user",
  jwt.validateToken,
  admin.checkRol,
  userController.getAllUsers
);

//router.put('/admin/user/:user_id', jwt.validateToken, admin.checkRol, userController.modifUser)

router.delete(
  "/user/:id",
  jwt.validateToken,
  canDelete.checkCanDelete,
  userController.deleteUser
);

export default router;
