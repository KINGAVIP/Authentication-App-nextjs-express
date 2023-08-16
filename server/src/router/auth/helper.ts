import bcrypt from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import { UserType } from '../../interfaces/User'

export class  AuthHelper{
    public static generatetoken(payload:UserType):string{
        return jsonwebtoken.sign(payload,String(process.env.JWT_SECRET),{expiresIn:'10d'});
    };
    public static hashPassword(password:string):string{
        return bcrypt.hashSync(password)
    }
    public static verifyPassword(password:string,hashedpassword:string){
        return bcrypt.compareSync(password,hashedpassword)
    }
}