import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';
import { join } from 'path';
import { Env } from '../config/environments';

console.log(join(__dirname, 'typeorm/schemas/*.schema.{js,ts}'));

export const TypeOrmDataSource = new DataSource({
  type: 'postgres',
  host: Env.DB_HOST,
  port: Number(Env.DB_PORT),
  username: Env.DB_USERNAME,
  password: Env.DB_PASSWORD,
  database: Env.DB_NAME,
  synchronize: false,
  logger: 'advanced-console',
  entities: [join(__dirname, 'typeorm/schemas/*.schema.{js,ts}')],
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, 'typeorm/migrations/*.{js,ts}')],
  namingStrategy: new SnakeNamingStrategy(),
});
