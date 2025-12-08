import bcrypt from "bcryptjs";
import { pool } from "../../database/db";

interface CreateUserPayload {
  name: string;
  email: string;
  password: string | number;
}

const createUserIntoDB = async (payload: CreateUserPayload) => {
  const { name, email, password } = payload;

  const hashPassword = await bcrypt.hash(String(password), 12);

  const result = await pool.query(
    `INSERT INTO users (name, email, password)
     VALUES ($1, $2, $3)
     RETURNING id,name,age,created_at,updated_at`,
    [name, email, hashPassword]
  );
 // delete result.rows[0].password
  return result;
};


const getAllUserIntoDB = async () => {




  const result = await pool.query(
   `SELECT id,name,email,age,created_at,updated_at FROM users` 
  );
 // delete result.rows[0].password
  return result;
};


 console.log("ok?")








export const userServices = {
  createUserIntoDB,getAllUserIntoDB
};
