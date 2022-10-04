import { Request, Response, NextFunction } from 'express'
import userModel from '../model/userModel'

const checkState = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = (req as any).email || req.body.email

    if (!email) {
      throw new Error("L'email o password no existeix")
    }

    const result = await userModel.getUserByEmail(email)
    if (result && result.estado === 1) {
      next()
    } else {
      res.status(403).send('No autoritzat')
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export default { checkState }
