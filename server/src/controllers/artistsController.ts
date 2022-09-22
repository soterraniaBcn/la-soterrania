import {Request,Response} from 'express';
//sin acabar
const artistsController = (req: Request, res: Response) =>{
    res.json({token: req.body.token, rol: req.body.rol})
}

export default artistsController