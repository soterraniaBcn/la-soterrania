import {Request, Response,  NextFunction} from 'express';
import userModel from '../model/userModel';

const checkState = async (req: Request,res: Response, next: NextFunction)=>{
    try {
        const {email1} =req.body;

        if(!email1){
           throw new Error(' email or password not exist');
        }

        const result = await userModel.getUserByEmail(email1);
            if(result && result.estado===true){
            
                next()
            }else{
                res.status(403).send("No autorizado")
        }
    } catch (error: any) {
        res.status(400).send(error.message);
    }
}

export default {checkState}