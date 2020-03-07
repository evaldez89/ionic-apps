import { Router, Request, Response } from "express";
import { User } from "../models/user.model";
import bcryp from 'bcrypt';

const userRoutes = Router();

userRoutes.post('/create', (req: Request, res: Response) => {
    const user  = {
        name: req.body.name,
        email: req.body.email,
        password: bcryp.hashSync(req.body.password, 10),
        avatar: req.body.avatar || null
    }

    User.create(user).then(createdUser => {
        res.json({
            status: {code: 0, msj: 'ok'},
            user: createdUser
        });
    }).catch(error => {
        res.json({
            // status: {code: error, msj: error}
            status: {
                code: error.code,
                msj: `[${error.name}] - ${error.errmsg}`
            }
        });
     });
});

export default userRoutes;