import express, {json, Request, Response} from 'express'
import categoriesController from './controllers/categories.controller';
import Connection from './database/connection';


class App{
    public express: express.Application;
    private connection: Connection | undefined;

    constructor(){
        this.express = express();
        this.middlewares()
        this.db()
        this.routes()
    }

    middlewares(){
        this.express.use(json())
    }

    routes(){
        this.express.use('/api', categoriesController.router)
    }

    db(){
        this.connection = new Connection
        this.connection.connection.sync()
        .then(()=>{
            console.log('Database is connected')
        })
        .catch(error=>{
            console.log("error:",error)
        })
    }

    listen(port: number){
        this.express.listen(port, ()=> console.log(`Server running in: http://localhost:${port}`))
    }
}

export default new App();