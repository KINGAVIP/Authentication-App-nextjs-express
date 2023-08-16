import {Mango} from '../../db'
import { UserTokenPayload, UserType } from '../../interfaces/User';

export class UserHelper{
    public static async addUser(user:UserType)
    {
        const db=new Mango()
        const userInstance=new db.userModel(user)
        return await userInstance.save();
    }
    public static async getUser(payload:Partial<UserTokenPayload>)
    {
        const db=new Mango()
        const user=await db.userModel.findOne({...payload})
        return user;
    }
}