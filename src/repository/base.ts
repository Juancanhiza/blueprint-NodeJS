import { Knex } from 'knex';
import Container from 'typedi';

interface Reader<T> {
    find(item: Partial<T>): Promise<T[]>;
    findById(id: number): Promise<T>;
    create(item: Partial<T>, returnFields: string[]): Promise<T>;
}

export type BaseRepository<T> = Reader<T>;

export abstract class KnexRepository<T> implements BaseRepository<T> {
    knex: Knex
    tablename: string

    constructor() {
        this.knex = Container.get('db-conn');
    }

    public get qb(): Knex.QueryBuilder {
        return this.knex(this.tablename);
    }

    async findById(id: number): Promise<T> {
        return this.qb.where('id', id).first();
    }

    async find(item: Partial<T>): Promise<T[]> {
        return await this.qb.where(item);
    }

    async create(newItem: Partial<T>, returnFields: string[]): Promise<T> {
        return await this.qb.returning(returnFields).insert(newItem) as T;
    }
}