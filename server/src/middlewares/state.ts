import { Request, Response, NextFunction } from "express";
import userModel from "../model/userModel";

const checkState = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new Error(" email or password not exist");
    }

    const result = await userModel.getUserByEmail(email);
    console.dir(result)
    if (result && result.estado === true) {
      next();
    } else {
      res.status(403).send("No autorizado");
    }
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export default { checkState };
