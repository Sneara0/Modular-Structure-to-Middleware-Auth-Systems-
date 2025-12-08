import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { secret } from "../auth/auth.service";

import { pool } from "../database/db";

const auth=()=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        const token= req.headers.authorization;
        if(!token){
            throw new Error("you are not authorized")
        }

        const decoded= jwt.verify(token,secret) as JwtPayload
        const user=await pool.query(
            `SELECT * users  WHERE email =$1`,[decoded.email]
        )

        if(user.rows.length===0){
            throw new Error("user not found")
        }
     next();

    }
}