import { Response, NextFunction } from "express";
import userModel from "../model/userModel";
import jwt from "jsonwebtoken";
import { config } from "../services/config";

const { secret } = config();

const checkCanDelete = async (req: any, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;

    jwt.verify(req.token, secret, async (err: any, decoded: any) => {
      if (err) {
        return res.status(403).send("El token no és vàlid");
      } else {
        try {
          const { id } = decoded;
          console.dir({ decoded, params: req.params });
          if (!id) {
            return res.status(403).send("El token no és vàlid");
          }

          const result = await userModel.getUserById(id);
          if (result && result.rol === "admin") {
            next();
          } else if (id === parseInt(req.params.id)) {
            next();
          } else {
            res.status(403).send("No autoritzat");
          }
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }
    });
  } else {
    res.sendStatus(403);
  }
};

export default { checkCanDelete };
