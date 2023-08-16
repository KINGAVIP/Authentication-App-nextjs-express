import {exit} from 'process'
import { UserType } from '../interfaces/User';
import { UserSchema } from './models/user.model';
import mongoose from 'mongoose'
export class Mango{
    public userModel:mongoose.Model<UserType>;
    constructor()
    {
        this.userModel=mongoose.model("user",UserSchema);
    }
    public async connect()
    {
        try{
            await mongoose.connect(String(process.env.MONGO_URI));
            console.log("db Connected")
        }
        catch(err:any)
        {
            console.log(err)

            exit(1);
        }
    }
}