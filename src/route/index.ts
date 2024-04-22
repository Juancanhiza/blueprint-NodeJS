import { Application } from 'express';
import exampleRoutes from './example.routes';

export default class Routes {
    constructor(app: Application) {
        app.use('/example', exampleRoutes);
    }
}