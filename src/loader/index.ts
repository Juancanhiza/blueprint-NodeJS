import { Application } from 'express';
import databaseLoader from './database';
import expressLoader from './express';
import Container from 'typedi';
import { ExampleRepositoryImpl } from '../repository';

export default async (app:Application): Promise<void> => {
    let database;
    try {
        database = await databaseLoader();
    } catch(err) {
        throw err;
    }
    console.log('Database connection is ready...');

    expressLoader(app);
    console.log('Express is ready...')
    

    // add DI objects
    Container.set('db-conn', database);
    Container.set({id: 'example-repository', value: new ExampleRepositoryImpl() });
}
