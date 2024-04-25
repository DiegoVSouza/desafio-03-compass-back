import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';
import { join } from 'path';
import { Env } from '../config/environments';

export const TypeOrmDataSource = new DataSource({
  type: 'postgres',
  host: Env.DATABASE_HOST,
  port: Number(Env.DATABASE_PORT),
  username: Env.DATABASE_USERNAME,
  password: Env.DATABASE_PASSWORD,
  database: Env.DATABASE_NAME,
  synchronize: false,
  entities: [join(__dirname, 'typeorm/schemas/*.schema.{js,ts}')],
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, 'typeorm/migrations/*.{js,ts}')],
  namingStrategy: new SnakeNamingStrategy(),
});

