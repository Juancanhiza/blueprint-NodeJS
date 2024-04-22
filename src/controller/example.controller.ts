import { Request, Response } from 'express';
import { ExampleService }  from '../service';
import Container from 'typedi';
import { Example } from '../model/example';


export default class ExampleController {
    static async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const exampleService: ExampleService = Container.get(ExampleService);
            const data: Example[] = await exampleService.findAll({});
            return res.status(200).json({
                data
            });
        } catch(err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error!"
            })
        }
        
    }
}