import { config } from 'dotenv';

import { join } from 'path';
import { DataSource } from 'typeorm';

config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const dbConfig: DataSource = new DataSource({
  type: 'postgres',
  entities: [join(__dirname, '../../infrastructure/entities/*.entity.{ts,js}')],
  migrations: [join(__dirname, 'migrations/*.{ts,js}')],
  host: '127.0.0.1',
  username: 'programador',
  password: 'hidros',
  database: 'tarefas',
  logging: false,
  synchronize: false,
  port: 5432,
});

export default dbConfig;
