import Knex from 'knex'
import configs from '../../knexfile'

export default async (): Promise<Knex.Knex> => {
  const dbConnection = Knex(configs[(process.env.NODE_ENV as string) || 'development'])

  await dbConnection.raw('SELECT 1')

  return dbConnection
}
