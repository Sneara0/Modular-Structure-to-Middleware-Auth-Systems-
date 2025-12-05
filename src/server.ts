import express, { Request, Response } from 'express';
import { initDB } from './database/db';
import { userRoute } from './modules/users/user.route';
import { authRoute } from './auth/auth.route';


const app=express();
    const port=5000;
//parser
    app.use (express.json())

    
initDB()

    app.use('/api/v1/users',userRoute)
    app.use('/api/v1/auth',authRoute)



    app.get('/',(req:Request,res:Response)=>{
        res.status(200).json({
            message:"This is the root",
            path:req.path
        })
    })

    app.listen(5000,()=>{
        console.log("server is running port 5000")
    })
 