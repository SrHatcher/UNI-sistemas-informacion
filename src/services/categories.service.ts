import {Request, Response} from 'express'

class CategoriesService{
    public async getList(req: Request, res: Response): Promise<Response>{
        return res.json({
            "Categories":"Esto sera una lista de categorias",
            "Metodo": "GET"
        })
    }

    public async getONe(req: Request, res: Response): Promise<Response>{
        return res.json({
            "Categories":"Esto devuelve una categoria",
            "Metodo": "GET"
        })
    }

    public async create(req: Request, res: Response): Promise<Response>{
        return res.json({
            "Categories":"Esto crea una categoria",
            "Metodo": "POST"
        })
    }

    public async patch(req: Request, res: Response): Promise<Response>{
        return res.json({
            "Categories":"Esto edita una categoria",
            "Metodo": "PATCH"
        })
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        return res.json({
            "Categories":"Esto borra una categoria",
            "Metodo": "DELETE"
        })
    }
}
 

export default new CategoriesService()