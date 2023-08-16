import type {Request,Response} from 'express'
import { UserType } from '../../interfaces/User'
import { UserHelper } from '../user/helper';
import { AuthHelper } from './helper';
export class AuthRoutes{
    public static async register(req:Request,res:Response)
    {
        try{
            const {username,email,password}=req.body;
            const hashedpassword=AuthHelper.hashPassword(password)
            const payload:UserType={
                username,
                email,
                password:hashedpassword,
            }        
            const token:string=AuthHelper.generatetoken(payload)
            await UserHelper.addUser(payload);
            console.log('Register')
            return res.json({success:true,access_token:token})
        }
        catch(err:any)
        {
            console.log(err)
            return res.json({success:false,err  })
        }
    }
    public static async login(req:Request,res:Response)
    {
        try{
            const {email,password}:{email:string,password:string}=req.body;
            const user=await UserHelper.getUser({email});
            if(!user)
            {
                return res.json({success:false,message:'User do not exist'})
            }
            const userData=AuthHelper.verifyPassword(password,user.password)
            if(!userData)
            {
                return res.json({success:false,message:'Password is wrong'})
            }
            console.log('Login Successful')
            return res.json({success:true,'User':'Login succesfull'})
        }
        catch(err:any)
        {
            console.log(err)
        }
    }
}