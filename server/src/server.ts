import express, { json } from 'express'
require('dotenv').config();
import type,{Express} from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import {Api} from './router/api'
import {Mango} from './db'
const app : Express=express();

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(compression())
new Mango().connect();
app.listen(process.env.PORT,()=>{
    console.log("Server started at "+ process.env.PORT)
})

app.get('/',async(req,res)=>{
    return res.send("It is working");
})
app.use('/api',new Api().getRouter())