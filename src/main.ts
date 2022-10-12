import 'dotenv/config'
import express from 'express';

const PORT= process.env.APP_PORT || 3000;

const app = express();

app.listen(PORT, ()=> {
    console.log(`server working in port ${PORT}`)
})