import bodyParser from 'body-parser';
import Routes from '../route';
import express, { Application } from 'express';

export default (app: Application): void => {
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));
    new Routes(app);
}

