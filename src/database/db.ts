import { Pool } from "pg"



  export const pool=new Pool({
        connectionString:
        'postgresql://neondb_owner:npg_ZktVs4zbQrD5@ep-quiet-pine-a8ejgswm-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
    })

   export  const initDB=async()=>{
        await pool.query(`CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name  VARCHAR(250) UNIQUE NOT NULL,
            email VARCHAR(150) NOT NULL,
            password TEXT NOT NULL,
            age INT,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()

            )`)
            console.log("Connection DataBase")
    }