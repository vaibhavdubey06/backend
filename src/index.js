//require('dotenv').config({path: './.env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
 import {app} from "./app.js";
dotenv.config({
    
    path: './.env'
}); 
connectDB()
.then(() =>{
   app.listen(process.env.PORT||8000,()=>console.log(`Server is running on port ${process.env.PORT}`)); 
})
.catch((error)=>console.log("MongoDB connection failed !!",error));







/*

import express from "express";
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
const app = express();

(async ()=> {
    try{
       await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
              console.log("ERROR:", error);
              throw error;
       })
       app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}
    catch(error){
        console.error("Error:",error)
        throw error
    }
})()*/