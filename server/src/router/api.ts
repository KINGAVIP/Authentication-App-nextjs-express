import express from 'express'
import type {Router} from 'express'
import {Auth} from './auth'
export class Api{
    private router:Router;
    constructor()
    {
        this.router=express.Router();
        this.router.use("/auth",new Auth().getRouter())
    }
    public getRouter()
    {
        return this.router;
    }
}