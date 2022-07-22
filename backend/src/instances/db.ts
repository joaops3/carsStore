import { Sequelize } from "sequelize";
import dotenv from "dotenv"


dotenv.config()

export const database = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD as string,
    { dialect: "mysql", port: parseInt(process.env.DB_PORT as string)})


