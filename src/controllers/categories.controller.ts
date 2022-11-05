import { Request, Response, Router } from "express";
import categoriesService from "../services/categories.service";

class CategoriesController {
    router = Router()

    constructor(){
        this.initRoutes();
    }

    initRoutes(){
        this.router.get('/categories', categoriesService.getList)

        this.router.get('/categories/:id', categoriesService.getONe)

        this.router.post('/categories', categoriesService.create)

        this.router.patch('/categories/:id', categoriesService.patch)

        this.router.delete('/categories/:id', categoriesService.delete)
    }
}

export default new CategoriesController;