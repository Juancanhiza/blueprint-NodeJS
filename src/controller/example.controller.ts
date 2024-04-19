import { Request, Response } from 'express';


export default class ExampleController {
    static async findAll(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({});
    }
}