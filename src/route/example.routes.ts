import { Router } from 'express';
import { ExampleController } from '../controller';

class ExampleRoutes {
    router = Router();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', ExampleController.findAll)
    }
}

export default new ExampleRoutes().router