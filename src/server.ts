import http from "http";
import express from "express";
import { applyMiddleware,applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import {connectDatabase} from './config/SqlDataBaseConnection'
const https = require('https');
const fs = require('fs');
// import config from "./config"

import { Weather } from "./services";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);

});
const router = express();
router.use(express.static("public"));
router.get("/",function(req,res){
  res.sendfile("./public/index.html")

})
applyMiddleware(middleware, router);
applyRoutes(Weather,router)

applyMiddleware(errorHandlers, router);


const HTTPPORT=8080




async function startServer() {
  try{
    await connectDatabase()
    const server = http.createServer(router);
    server.listen(HTTPPORT, () =>
      console.log(`Server is running http://localhost:${HTTPPORT}...`));
  }catch(err){
    console.log(err)
  }
}


startServer()
