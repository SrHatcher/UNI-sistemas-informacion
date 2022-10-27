import 'dotenv/config'
import app from './app'
//import express from 'express';
import App from './app'

//const PORT= process.env.APP_PORT || 3000;
//const app = express();

//app.listen(PORT, ()=> {
//    console.log(`server working in port ${PORT}`)
//})

App.listen(process.env.APP_PORT as unknown as number || 3000)

console.log(document.createElement('img'))