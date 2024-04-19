import type { Knex } from 'knex'
import config from './src/config'

const environments: string[] = ['dev', 'staging', 'production']

const connection: string = `postgresql://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}`

const knexConfig: Knex.Config = {
  client: 'pg',
  connection,
  debug: ['dev', 'test'].includes(process.env.NODE_ENV || 'dev'),
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    extension: 'ts',
    tableName: 'knex_migrations',
    directory: './db/migrations',
  },
  seeds: {
    extension: 'ts',
    directory: './db/seeds',
  },
}

export default Object.fromEntries(environments.map((env: string) => [env, knexConfig]))
