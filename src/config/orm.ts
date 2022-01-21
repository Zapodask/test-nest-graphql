import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  host: process.env.DB_HOST,
  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'db',
  entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
};

module.exports = options;
