import express from "express";
import { APP_PORT } from "./config";
import routers from './routes';
import './config/databaseConfig.js';
import errorHandler from "./middlewares/errorHandler";




const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',routers);

app.use(errorHandler)
app.listen(APP_PORT,()=>console.log(`'server runing..on port ${APP_PORT}`));