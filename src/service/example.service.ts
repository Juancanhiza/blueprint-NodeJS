import { ExampleRepository } from '../repository';
import { Example } from '../model/example';
import Container, { Service } from 'typedi';


@Service()
export default class ExampleService {
    exampleRepository: ExampleRepository;

    constructor() {
        this.exampleRepository = Container.get('example-repository');
    }

    async findAll(example: Partial<Example>): Promise<Example[]> {
        return await this.exampleRepository.find(example);
    }

    async findById(id: number): Promise<Example> {
        return await this.exampleRepository.findById(id);
    }

    async create(newExample: Partial<Example>): Promise<Example> {
        const fields = ['id', 'name'];
        return await this.exampleRepository.create(newExample, fields);
    }
}