import { Request, Response } from "express";
import { pool } from "../../database/db";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
  const  result= await userServices.createUserIntoDB(req.body)

    
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const userController = {
  createUser,
};
