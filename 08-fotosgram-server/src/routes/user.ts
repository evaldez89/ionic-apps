import { Router, Request, Response } from "express";
import { User, IUser } from "../models/user.model";
import bcryp from 'bcrypt';
import Token from "../classes/token";


const getUserToken = (user: IUser): string => {
    return Token.getToken({
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
    });
}

const userRoutes = Router();

userRoutes.post('/login', (req: Request, res: Response) => {
    const body = req.body;

    User.findOne({ email: body.email }, (error, user) => {
        if (error) throw error;

        let status = {
            code: 99,
            msj: 'Invalid Login',
            token: ''
        }

        if (user) {
            const userToken = getUserToken(user);

            if (user.isValidPassword(body.password)) {
                status = {
                    code: 0,
                    msj: `${user.name}`,
                    token: userToken
                }
            } else { status.msj += '****'; }  // Remove this, is just to know when de password is invalid
        }

        return res.json({status});
    });

});

userRoutes.post('/create', (req: Request, res: Response) => {
    const user  = {
        name: req.body.name,
        email: req.body.email,
        password: bcryp.hashSync(req.body.password, 10),
        avatar: req.body.avatar || null
    }

    User.create(user).then(createdUser => {
        const userToken = getUserToken(createdUser);
        res.json({
            status: {code: 0, msj: 'ok'},
            user: createdUser.name,
            token: userToken
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