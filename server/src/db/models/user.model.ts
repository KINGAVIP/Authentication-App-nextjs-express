import { Schema } from "mongoose";
import type { UserType } from "../../interfaces/User";
export const UserSchema=new Schema<UserType>({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})