import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export let AppDataSource: DataSource;

if (process.env.NODE_ENV === 'production') {
  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DB_URL || '',
    entities: ['src/entities/**/*.ts'],
    migrations: ['src/migrations/**/*.ts'],
    migrationsRun: true,
  });
} else {
  AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USERNAME || 'milky_auth_db_user',
    password: process.env.DB_PASSWORD || 'milky_auth_db_password',
    database: process.env.DB_NAME || 'milky_auth_db',
    entities: ['src/entities/**/*.ts'],
    migrations: ['src/migrations/**/*.ts'],
    migrationsRun: true,
  });
}