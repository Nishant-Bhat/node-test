import * as dotenv from "dotenv"
import "reflect-metadata"

dotenv.config()

export default {
  NODE_ENV: process.env.NODE_ENV,
  APP_NAME: process.env.APP_NAME,
  PORT: process.env.PORT,
  SCHEMA_PASSOWRD:process.env.SCHEMA_PASSOWRD,
  SCHEMA_PORT:process.env.SCHEMA_PORT
}
