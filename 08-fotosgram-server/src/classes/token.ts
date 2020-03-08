import jwt from 'jsonwebtoken';


export default class Token {
    private static seed: string = 'este-es-el-seed-del-token';
    private static expiration: string = '30d';

    static getToken(payload: any): string {

        return jwt.sign({ user: payload }, this.seed, { expiresIn: this.expiration } );

    }
}