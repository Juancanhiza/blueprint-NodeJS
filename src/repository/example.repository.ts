import { Example } from '../model';
import { BaseRepository, KnexRepository } from './base';

export interface ExampleRepository extends BaseRepository<Example> {
}

export class ExampleRepositoryImpl extends KnexRepository<Example> implements ExampleRepository {
    tablename = 'example';

    constructor() {
        super();
    }


}